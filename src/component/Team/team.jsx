import React from "react";
import "./team.css";
import flexikeAvatar from "../assets/img/flexike.jpg";
import bcatAvatar from "../assets/img/black_cat.png";
import wcatAvatar from "../assets/img/white-cat.jpg";
import ocatAvatar from "../assets/img/orange-cat.jpg";
import instIcon from "../assets/img/fa-instagram.svg";
import tgIcon from "../assets/img/telegram-white-icon.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function team() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="t-wrapper" id="team-section" ref={ref}>
      <div className="t-container">
        <div className="t-block">
          <motion.div
            className="flexColumnStart t-block-upper"
            initial={{ x: "-20%", opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <h3 className="blockTitle">Startup Crew</h3>
            <p className="blockText">
              The most important part of the Startup Framework is the samples.
              The samples form a set of 25 usable pages you can use as is or you
              can add new blocks from UI Kit.
            </p>
          </motion.div>
          <div className="flexStart t-grid-wrapper">
            <div className="t-grid">
              <motion.div
                className="t-grid-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <motion.img
                  src={flexikeAvatar}
                  alt="avatar"
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 1.5 }}
                />
                <h5>flexike</h5>
                <p>Full Stack Developer</p>
                <div className="flexStart t-grid-item-socials">
                  <a href="https://www.instagram.com/flexikee" target="_blank">
                    <img src={instIcon} height={20} />
                  </a>
                  <a href="https://t.me/flexike" target="_blank">
                    <img src={tgIcon} height={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="t-grid-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <img src={bcatAvatar} alt="avatar" />
                <h5>Black Cat</h5>
                <p>Product Manager</p>
                <div className="flexStart t-grid-item-socials">
                  <a
                    href="https://www.google.com/search?q=black+cats&tbm=isch&ved=2ahUKEwjItKzvnJyFAxX1vf0HHW-mA2IQ2-cCegQIABAA&oq=black+cats&gs_lp=EgNpbWciCmJsYWNrIGNhdHMyBRAAGIAEMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeSOgPUKgCWKIOcAJ4AJABAJgBdqABvgaqAQMzLjW4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ8ICBxAAGIAEGBPCAggQABgHGB4YE4gGAQ&sclient=img&ei=eyUIZoiLDPX79u8P78yOkAY&bih=953&biw=1920&prmd=isvnbmtz#imgrc=bjiGdp2B2smuBM"
                    target="_blank"
                  >
                    <img src={instIcon} height={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="t-grid-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <img src={wcatAvatar} alt="avatar" />
                <h5>White Cat</h5>
                <p>UI/UX Designer</p>
                <div className="flexStart t-grid-item-socials">
                  <a
                    href="https://www.google.com/search?q=white+cats&tbm=isch&ved=2ahUKEwjJvvbEnJyFAxUEyrsIHSUrCfcQ2-cCegQIABAA&oq=white+cats&gs_lp=EgNpbWciCndoaXRlIGNhdHMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBMyBxAAGIAEGBNIn6gBUKyWAVjnpgFwAXgAkAEAmAGAAaAB5QiqAQM2LjW4AQPIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCsICBxAjGOoCGCfCAgQQIxgnwgIEEAAYA8ICBRAAGIAEwgIKEAAYgAQYigUYQ8ICCBAAGIAEGLEDwgILEAAYgAQYsQMYgwHCAgQQABgeiAYB&sclient=img&ei=IiUIZsmlDoSU7_UPpdakuA8&bih=953&biw=1920&prmd=isvnbmtz#imgrc=RU9bBc3mcJWiOM"
                    target="_blank"
                  >
                    <img src={instIcon} height={20} />
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="t-grid-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3 }}
              >
                <img src={ocatAvatar} alt="avatar" />
                <h5>Orange Cat</h5>
                <p>Copyrighter</p>
                <div className="flexStart t-grid-item-socials">
                  <a
                    href="https://www.google.com/search?sca_esv=d1d3b98f0629dca4&sca_upv=1&sxsrf=ACQVn08oanBtzgjK2mnHlQEGx8NaxiH8nQ:1711809819531&q=orange+cats&tbm=isch&source=lnms&prmd=isvnbmtz&sa=X&ved=2ahUKEwjOwdrBnJyFAxUqh1YBHf-7CVcQ0pQJegQIDBAB&biw=1920&bih=953&dpr=1#imgrc=umYIAJcpyabt6M"
                    target="_blank"
                  >
                    <img src={instIcon} height={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default team;
