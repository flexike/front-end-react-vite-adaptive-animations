import React from "react";
import "./blog.css";
import iconPlay from "../assets/img/IconPlay.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function blog() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className="b-wrapper" id="blog-section" ref={ref}>
      <div className="b-container">
        <div className="flexColumnCenter b-block">
          <motion.div
            className="flexColumnCenter blockTitle b-block-upper"
            initial={{ y: -70, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h3>Easy to setup.</h3>
            <h3>Easy to maintain</h3>
            <p className="blockText">
              Bootstrap is a widely-used, sleek, intuitive and powerful
              front-end framework for faster and easier web development.
            </p>
          </motion.div>
          <motion.div
            className="flexCenter b-block-lower"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 2 }}
          >
            <a
              href="https://www.youtube.com/watch?v=CW5oGRx9CLM"
              target="_blank"
            >
              <img src={iconPlay} className="b-btn-play" />
            </a>
            <a href="#contact-section" className="btn b-btn">
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default blog;
