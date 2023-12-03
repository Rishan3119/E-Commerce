import React from 'react'
import './DescriptionBox.css'
function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an online platform that facilitates the buying and selling of products or service over the internet.It serves a virtual marketplace where buisness and individuals can showcase their products,interact with customers, and conduct transactions without the need for a physical presence.E-commerce websites have gained immense popularity due to their convenience,accessibility,and the global reach they offer.</p>
            <p>It can be a substitute for brick-and-mortar stores, though some businesses choose to maintain both.</p>
        </div>
    </div>
  )
}

export default DescriptionBox