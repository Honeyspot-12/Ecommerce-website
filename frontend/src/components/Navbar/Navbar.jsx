import React, { useContext } from "react";
import './Navbar.css';
import logo from '../asset/logo2.png';
import mobileIcon from '../asset/mobile.svg';
import arrowDownIcon from '../asset/arrowdown.svg';
import searchIcon from '../asset/search.svg';
import profileIcon from '../asset/profile.svg';
import heartIcon from '../asset/heart.svg';
import cartIcon from '../asset/cart.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { Wishlistcontext } from "../../context/Wishlistcontext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(Wishlistcontext);
  const wishlistCount = wishlist.reduce((total, item) => total + item.quantity, 0);
  const cartCount = (cart || []).reduce((total, item) => total + item.quantity, 0);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // navigate("/login"); // or use navigate("/login")
  };
  return (
    <div className="navbar">
      <div className="topheader">
        <div className="wmk">
          <ul>
            <li><Link to="/"> WOMEN</Link></li>
            <li><Link to="/mens"> MEN</Link></li>
            <li><Link to="/kids"> KIDS</Link></li>
          </ul>
        </div>
        <div className="tcd">
          <ul>
            <li><Link to="/track-order">TRACK ORDER</Link></li>
            <li><a href="#contact-us">CONTACT US</a></li>
            <img src={mobileIcon} alt="Mobile Icon" />
            <li><Link to="/download-app">DOWNLOAD APP</Link></li>
            <div className="login-button">
              <button><Link to="/login">Login</Link></button>
              {localStorage.getItem("token") && (
                <button onClick={handleLogout}>Logout</button>
              )}
            </div>

          </ul>
        </div>
      </div>
      {/* Header */}
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="genre">
          <ul>
            <li><Link to="/">SUMMER COLLECTION <img src={arrowDownIcon} alt="Arrow Down" /></Link></li>
            <li><Link to="/">TOPWEAR <img src={arrowDownIcon} alt="Arrow Down" /></Link></li>
            <li><Link to="/">BOTTOMWEAR <img src={arrowDownIcon} alt="Arrow Down" /></Link></li>
            <li><Link to="/">BESTSELLERS <img src={arrowDownIcon} alt="Arrow Down" /></Link></li>
            <li><Link to="/">FOOTWEAR <img src={arrowDownIcon} alt="Arrow Down" /></Link></li>
            <li><Link to="/">ACCESSORIES <img src={arrowDownIcon} alt="Arrow Down" /></Link></li>
          </ul>
        </div>

        <div className="search">
          <input type="text" placeholder="Search for products, brands and more" />
          <button type="submit"><img src={searchIcon} alt="Search" /></button>
        </div>

        <div className="crp">
          <Link to="/Signup"><img src={profileIcon} alt="Profile" /></Link>
          <Link to="/wishlist"><img src={heartIcon} alt="Wishlist" />
            <span className="wishlist-count">{wishlistCount}</span>
          </Link>
          <Link to="/cart"><img src={cartIcon} alt="Cart" />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;