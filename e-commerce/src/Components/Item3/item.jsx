import React from 'react';
import "./item.css";
import { Link } from 'react-router-dom';
const Item = (props) => {
    return (
        <div className='item'>
          <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
          {/* scrollto onclick goes toupword direction  */}
            <p>{props.name}</p>                            
           
            <div className="item-prices">
                <div className="price-new">
                    ${props.new_price}
                </div>
                <div className="price-old">
                    ${props.old_price}
                </div>
            </div>
            
        </div>
    );
}

export default Item;
