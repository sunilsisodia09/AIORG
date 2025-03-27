import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <p>Empowering AI solutions for a better tomorrow.</p>
        </div>

       
        <div className="footer-section">
          <ul>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/about">About</Link></li>
            {/* <li><Link to="#Home">Home</Link></li> */}
          </ul>
        </div>

     
        <div className="footer-section">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="icon" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
          </div>
        </div>
      </div>

    
      <div className="footer-bottom">
        <p>© 2025 AI ORG 11. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
