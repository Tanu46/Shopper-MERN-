import React, { useContext } from "react";
import "./productDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/shopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const{addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(122)</p>

        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-newprice">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis cum
          suscipit molestias totam dignissimos voluptatibus pariatur culpa illo
          accusamus eius earum, recusandae minima enim deleniti. A, delectus ab
          placeat, quod sit est deleniti quasi repellat excepturi, distinctio
          eius laboriosam libero.
        </div>
        <div className="productdisplay-right-size">
            <h1>select size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
        <p className="productdisplay-right-category"><span>category:  </span>women,Tshirt,croptop</p>
        <p className="productdisplay-right-category"><span>tags:  </span>women,Tshirt,croptop</p>

      </div>
    </div>
  );
};

export default ProductDisplay;
//mountit into product.jsx(pages)
