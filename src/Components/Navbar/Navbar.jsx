import React, { useContext, useState } from 'react'
 import './Navbar.css'
 import logo from '../Assets/logo.png'
 import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
function Navbar() {
    
    const [menu,setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none',color:'#626262'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Mens")}}><Link to='/Mens' style={{textDecoration:'none',color:'#626262'}}>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Womens")}}><Link to='/Womens' style={{textDecoration:'none',color:'#626262'}}>Women</Link>{menu==="Womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link to='/Kids' style={{textDecoration:'none',color:'#626262'}}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
           <Link to='/login'><button>Login</button></Link> 
            <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar