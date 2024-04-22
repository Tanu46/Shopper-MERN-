import React, { useContext } from "react";
import "./cartitems.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/shopContext";
const CartItems = () => {
  const {all_product,cartItems,removeToCart,getTotalCartAmount}= useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main ">
        <p>products</p>
        <p>Title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e) => 
      {
        if (cartItems[e.id] > 0) {
          return <div>
              <div className="cartitems-format cartitems-format-main"  >
                <img src={e.image} alt="" className="cartitems-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeToCart(e.id)
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
      
        }
        return null;
      })}
      <div className="cartitms-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${ getTotalCartAmount()}</p>
                </div>
            <hr/>
            <div className="cartitems-total-item">
                <p>shipping Fee</p>
                <p>Free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${ getTotalCartAmount()}</h3>
            </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>if you have a promo code ,Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code"/>
                <button>submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
