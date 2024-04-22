import React, { useState } from "react";
import "./addproduct.css";
import upload_area from "../../assets/upload_area.svg";
const Addproduct = () => {
    const[image,setImage]=useState(false);
    const[productDetails,setProductDetails]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler=(e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler=(e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_product=async()=>{
        console.log(productDetails)
        // insidethis function we will upload img on endpoint so our img  uploded andget the img url
//    we save data into mongodb database
let responseData;
let product=productDetails;
let formData=new FormData();
formData.append('product',image);
// senddata to API
await fetch('http://localhost:4000/upload',{
    method:'POST',
    headers:{
        Accept:'application/json',
    },
    body:formData,
}).then((resp)=>resp.json()).then((data)=>{
responseData=data;
})
if(responseData.success){
    product.image=responseData.image_url;
    console.log(product);
    await fetch('http://localhost:4000/addproduct',{
        method:"POST",
        headers:{
            Accept:"application/json",
            'content-Type':"application/json"
        },
        body:JSON.stringify(product),
    }).then((resp)=>resp.json()).then((data)=>{
        data.success?
            alert("product added successfully"):alert("failed")
        
        // console.log(data);
    })
}

   
   
    }

  return (
    <div className="addproduct">
      <div className="addproduct-itemfield">
        <p>product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler}  type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p> offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler}  type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>product category</p>
        <select value={productDetails.category} onChange={changeHandler}  name="category" className="addproduct-selector">
          <option value="women"> women</option>
          <option value="men"> men</option>
          <option value="kid"> kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumnail-img" alt="" />
        </label>
        <input onChange={imageHandler} type="file" name="image" id="file-input "  />
      </div>
      <button onClick={()=>{Add_product()}} className=" addproduct-btn">ADD</button>
    </div>
  );
};

export default Addproduct;
