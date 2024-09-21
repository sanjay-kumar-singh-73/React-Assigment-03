// HeroSection.js
import React from "react";
import "./HeroSection.css"; // Importing the CSS file

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Create and sell custom products</h1>
        <ul className="hero-list">
          <li>✔️ 100% Free to use</li>
          <li>✔️ 900+ High-Quality Products</li>
          <li>✔️ Largest global print network</li>
        </ul>
        <div className="hero-buttons">
          <button className="start-button">Start for free</button>
          <button className="how-it-works-button">How it works?</button>
        </div>
      </div>
      {/* <div className="hero-image-container">
        <img
          className="hero-image"
          src="http://www.w3.org/2000/svg" // Replace with your image URL
          alt="Product"
        />
        <img src="" alt=""/>
        <div className="hero-person"></div>
      </div> */}
    </div>
  );
};

export default HeroSection;
