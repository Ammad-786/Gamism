import React from 'react';
import { FaGamepad, FaCopyright, FaTwitter, FaFacebook, FaCube, FaInstagram} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-3d-icons">
          <FaCube className="threed-icon" />
          <FaCube className="threed-icon" />
          <FaCube className="threed-icon" />
        </div>

        <FaGamepad className="footer-icon" />
        <p className="footer-text">All rights reserved</p>
        <FaCopyright className="footer-icon" />
        <div className="footer-social-icons">
          <a href="/" target="_blank">
            <FaTwitter className="social-icon" />
          </a>
          <a href="/" target="_blank">
            <FaFacebook className="social-icon" />
          </a>
          <a href="/" target="_blank">
            <FaInstagram className="social-icon" />
          </a>
        </div>
       
      </div>
    </div>
  );
}

export default Footer;