import React from 'react'
import "./Footer.css"
import facebook from "./facebook.svg"
import instagram from "./instagram.svg"
import twitter from "./twitter.svg"
import youtube from "./youtube.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
            {/* <!-- Customer Support --> */}
            <div className="footer-column">
                <h4>CUSTOMER SUPPORT</h4>
                <ul>
                    <li><a href="#">Track Order</a></li>
                    <li><a href="#">Return & Refund</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
    
            {/* <!-- Company --> */}
            <div className="footer-column">
                <h4>COMPANY</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
    
            {/* <!-- Follow Us --> */}
            <div className="footer-column">
                <h4>FOLLOW US</h4>
                <div className="social-icons">
                    <a href="#"><img src={facebook} alt="Facebook"/></a>
                    <a href="#"><img src={instagram} alt="Instagram"/></a>
                    <a href="#"><img src={twitter} alt="Twitter"/></a>
                    <a href="#"><img src={youtube} alt="YouTube"/></a>
                </div>
            </div>
    
            {/* <!-- Contact Us --> */}
            <div className="footer-column" id ="contact-us">
                <h4>CONTACT US</h4>
                <p>Email: support@stylehaven.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: 123, Fashion Street, Mumbai, India</p>
            </div>
        </div>
    
        {/* <!-- Copyright Section --> */}
        <div className="footer-bottom">
            <p>&copy; 2025 StyleHaven. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;
