import React, { useState } from "react";
import "./header.css";
import menuIcon from "../assets/img/menu-icon.svg";
import { motion } from "framer-motion";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const showMenuFunc = (menuOpened) => {
    if (window.innerWidth <= 600) {
      return { right: !menuOpened && "-200%" };
    }
  };

  const decreaseContainerHeight = (menuOpened) => {
    if (menuOpened) {
      return { height: menuOpened && "20rem" };
    }
  };

  return (
    <header className="h-wrapper" id="header-section">
      <motion.div
        className="flexCenterDown h-container"
        style={decreaseContainerHeight(menuOpened)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-menu-wrapper">
          <img
            src={menuIcon}
            alt="icon"
            height={40}
            onClick={() => setMenuOpened((prev) => !prev)}
          />
        </div>
        <div className="flexCenterDown h-menu" style={showMenuFunc(menuOpened)}>
          <a href="#header-section">
            <span style={{ opacity: "30%" }}>Home</span>
          </a>
          <a href="#features-section">Features</a>
          <a href="#pricing-section">Pricing</a>
          <a href="#blog-section">Blog</a>
          <a href="#team-section">Team</a>
          <a href="#contact-section">Contact</a>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
