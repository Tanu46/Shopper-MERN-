import React from 'react';
import "./offer.css";
import exclusive_img  from "../Assets/exclusive_image.png"
const Offer = () => {
    return (
        <div className='offer'>
          <div className="offer-left">
            <h1>Exclusive</h1>
<h1>offers for you</h1>
<p>only on best sellersproducts</p>
<button>Check now</button>
            </div>
            <div className="offer-right">
<img src={exclusive_img} alt=''/>
                </div>  
        </div>
    );
}

export default Offer;
