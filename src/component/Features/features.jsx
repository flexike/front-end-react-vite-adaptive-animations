import React, { useRef } from "react";
import "./features.css";
import iconPage from "../assets/img/feature-page.svg";
import iconDiamond from "../assets/img/feature-diamond.svg";
import laptopScreen from "../assets/img/Mockup@2x.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="f-wrapper" id="features-section" ref={ref}>
      <motion.img
        ref={ref}
        src={laptopScreen}
        alt="photo"
        className="f-bg-image"
        initial={{ opacity: 0, x: -400 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2 }}
      />
      <div className="f-container">
        <div className="flexColumnRight f-block">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 400 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="flexColumnStart blockText f-block-upper"
          >
            <h2 className="blockTitle f-block-upper-title">
              We Create Something New
            </h2>
            <p>
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
          </motion.div>

          <div className="flexStart blockText f-block-lower">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 400 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.2 }}
            >
              <img src={iconPage} alt="icon" />
              <p>30 New feature pages</p>
              <p>Startup Framework contains</p>
              <p>components and complex blocks</p>
              <p>which can easily.</p>
            </motion.div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: 400 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1.3 }}
            >
              <img src={iconDiamond} alt="icon" />
              <p>Useful Symbol Components</p>
              <p>Samples will show you the feeling on</p>
              <p>how to play around using the </p>
              <p>components.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;
