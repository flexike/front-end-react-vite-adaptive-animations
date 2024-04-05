import React from "react";
import "./footer.css";
import iconTwitter from "../assets/img/fa-twitter.svg";
import iconFacebook from "../assets/img/fa-facebook-square.svg";
import iconGoogle from "../assets/img/fa-google-plus.svg";

function footer() {
  return (
    <footer className="ft-wrapper" id="footer-section">
      <div className="ft-container">
        <div className="flexStartCenter ft-block">
          <h2 className="blockTitle">Startup</h2>
          <div className="flexStartCenter">
            <a href="#footer-section">Privacy Policy</a>
            <a href="#footer-section">Terms</a>
            <a href="https://twitter.com/?lang=uk" target="_blank">
              <img src={iconTwitter} alt="icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src={iconFacebook} alt="icon" />
            </a>
            <a href="https://www.google.com.ua/?hl=uk" target="_blank">
              <img src={iconGoogle} alt="icon" />
            </a>
          </div>
        </div>

        <div className="ft-hr-wrapper">
          <hr />
        </div>

        <div className="flexStart ft-lower">
          <a href="#footer-section">Tour</a>
          <a href="#footer-section">Features</a>
          <a href="#footer-section">Pricing Plans</a>
          <a href="#footer-section">Our Works</a>
          <a href="#footer-section">Brands</a>
          <a href="#footer-section">Contacts</a>

          <div>© 2024 Designmodo. All rights reserved.</div>
        </div>

        <div className="flexCenter">
          <div className="flexColumnCenter true-lord">
            Web-site created by © 2024 flexike. Using react-vite. Not for
            commercial.
            <br />
            Design found in Figma
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
