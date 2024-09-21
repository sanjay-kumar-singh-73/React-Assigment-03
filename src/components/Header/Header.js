// src/components/Header.js
import React, { useState } from 'react';
import "./Header.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import { MdOutlineArrowDropDown } from "react-icons/md";

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg" alt=""/>
      </div>
      <div  className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
      <ul >
        <li><a href="#">Catalog</a></li>
        <li><a href="#">How it works <MdOutlineArrowDropDown /></a></li>
        <li><a href="#">Pricing  </a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Services <MdOutlineArrowDropDown className="drop" /></a></li>
        <li><a href="#">User-cases <MdOutlineArrowDropDown /></a></li>
        <li><a href="#">Need help? <MdOutlineArrowDropDown /></a></li>
      </ul>
      </div>
      <div className="Button">
        <button className="btn" id="log">Log In</button>
        <button className="btn" id="sign">Sign Up</button>
      </div>
      <button className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
