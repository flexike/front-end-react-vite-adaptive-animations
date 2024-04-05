import React from "react";
import "./pricing.css";
import checkMark from "../assets/img/CheckIcon.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="p-wrapper" id="pricing-section" ref={ref}>
      <div className="p-container">
        <div className="flexColumnCenter p-block">
          <motion.div
            className="flexColumnCenter p-block-upper"
            initial={{ y: -70, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="blockTitle p-title">Plans & Pricing</h2>
            <p>Startup Framework is free forever — you only pay for</p>
            <p>custom domain hosting or to export your site.</p>
          </motion.div>

          <div className="flexCenter p-block-lower">
            <div className="flexCenter p-grid">
              <motion.div
                className="flexCenter p-grid-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flexColumnCenter p-grid-points">
                  <h4>Starter</h4>
                  <h5 className="p-grid-price">
                    9.99 <span>$</span>
                  </h5>
                  <p>
                    <img src={checkMark} className="checkMark" />2 GB of space
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    14 days of backups
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Social integrations
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Clien billing
                  </p>
                  <p className="p-notIncluded">Remote access</p>
                  <p className="p-notIncluded">Custom domain</p>
                  <p className="p-notIncluded">24 hours support</p>
                  <p className="p-notIncluded">Admin tools</p>
                  <p className="p-notIncluded">Collaboration tools</p>
                  <p className="p-notIncluded">User management</p>
                  <div className="flexCenter p-btn-wrapper">
                    <a href="" className="btn p-btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flexCenter p-grid-item"
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flexColumnCenter p-grid-points">
                  <h4>Professional</h4>
                  <h5 className="p-grid-price">
                    19.99 <span>$</span>
                  </h5>
                  <p>
                    <img src={checkMark} className="checkMark" />2 GB of space
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    14 days of backups
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Social integrations
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Clien billing
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Remote access
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Custom domain
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    24 hours support
                  </p>
                  <p className="p-notIncluded">Admin tools</p>
                  <p className="p-notIncluded">Collaboration tools</p>
                  <p className="p-notIncluded">User management</p>
                  <div className="flexCenter p-btn-wrapper">
                    <a href="" className="btn p-btn center-grid-btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="flexCenter p-grid-item"
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flexColumnCenter p-grid-points">
                  <h4>Team</h4>
                  <h5 className="p-grid-price">
                    49.99 <span>$</span>
                  </h5>
                  <p>
                    <img src={checkMark} className="checkMark" />2 GB of space
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    14 days of backups
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Social integrations
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Clien billing
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Remote access
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Custom domain
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    24 hours support
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Admin tools
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    Collaboration tools
                  </p>
                  <p>
                    <img src={checkMark} className="checkMark" />
                    User management
                  </p>
                  <div className="flexCenter p-btn-wrapper">
                    <a href="" className="btn p-btn">
                      Get Started
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default pricing;
