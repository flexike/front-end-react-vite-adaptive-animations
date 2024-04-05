import React from "react";
import "./hero.css";
import { motion } from "framer-motion";

function hero() {
  return (
    <section className="hero-wrapper">
      <div className="flexColumnCenter hero-container">
        <div className="flexColumnCenter home-block">
          <motion.div
            className="flexColumnCenter home-text"
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: -0, opacity: 0 }}
            transition={{ duration: 5 }}
          >
            <h2 className="blockText">Startup</h2>
            <h2 className="blockTitle flexCenter home-title">
              Forget About Code
            </h2>
            <span className="blockText">
              Startup Framework gives you complete freedom over your creative
            </span>
            <span className="blockText">
              process — you don’t have to think about any technical aspects.
            </span>
            <span className="blockText">
              There are no limits and absolutely no coding.
            </span>
          </motion.div>
        </div>

        <motion.div
          className="flexCenter hero-btn-wrapper"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <a href="#contact-section" className="btn hero-btn">
            Create an account
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default hero;
