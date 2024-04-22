import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import nav_drop from '../Assets/humburger.png';
import { ShopContext } from '../../Context/shopContext';
const Navbar = () => {

    const[menu,setMenu]=useState("shop")
    const{getTotalCartItems}=useContext(ShopContext)
    const menuRef=useRef();
    const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt=''/>
                <p>Shopper</p>

            </div>
            <img className='nav-dropdown' src={nav_drop} onClick={dropdown_toggle} on alt=''/>
           <ul ref={menuRef} className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}} ><Link style={{textDecoration:'none'}} to='/' >shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}} ><Link style={{textDecoration:'none'}} to='/men' >men</Link>{menu==="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}} ><Link style={{textDecoration:'none'}} to='/women' >women</Link>{menu==="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}} ><Link style={{textDecoration:'none'}} to='/kids' >kids</Link>{menu==="kids"?<hr/>:<></>}</li>

           </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>logout</button>:<Link to='/login' ><button>login</button></Link> }
            {/* <Link to='/login' ><button>login</button></Link>  */}
            <Link to='/cart' ><img src={cart_icon} alt=''/></Link>  
                <div className='cart-counters'>{getTotalCartItems()}</div>
            </div>

            
        </div>
    );
}

export default Navbar;
