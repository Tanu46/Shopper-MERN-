import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";
const ListProduct = () => {
  // logic fetch the data from api
  const [allproducts, setAllproducts] = useState([]);
  const fetchInfo = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllproducts(data);
      });
  };
  useEffect(() => {
    fetchInfo();
  },[]);

  const remove_Product=async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
        method:'POST',
        headers:{
            Accept:'application/json',
            'content-Type':'application/json',
        },
        body:JSON.stringify({
            id:id
        })
    })
    await fetchInfo();
  }
  return (
    <div className="list-product">
      <h1>Alll products List</h1>
      <div className="listproduct-format-main">
        <p>product</p>
        <p>Title</p>
        <p>Old price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproduct">
        <hr />
        {allproducts.map((product, index) => {
          return (
            <>
              {" "}
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img
                  src={product.image}
                  alt=""
                  className="listproduct-producticon"
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{remove_Product(product.id)}} className="listproduct-removeicon" src={cross_icon} />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
