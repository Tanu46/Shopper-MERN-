 
 import React from "react";
import "./footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import pinterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>shopper</p>
      </div>
      <ul className="footer-links">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={instagram} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={pinterest} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp} alt="" />
        </div>
      </div>
      <div className="copyright">
        <hr/>
        <p>copyright@2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
