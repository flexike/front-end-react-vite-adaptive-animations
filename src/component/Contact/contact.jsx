import React from "react";
import "./contact.css";
import phoneIcon from "../assets/img/phone-icon.svg";
import mailIcon from "../assets/img/envelope-icon.svg";
import officeIcon from "../assets/img/building-icon.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="c-wrapper" id="contact-section" ref={ref}>
      <div className="c-container">
        <div className="flexCenter c-block">
          <motion.div
            className="flexColumnStart c-block-left"
            initial={{ opacity: 0, x: -400 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <h4 className="blockTitle">Lets Keep in Touch</h4>
            <p className="blockText c-block-left-subtitle">
              We have created a new product that will help designers, developers
              and companies create websites for their startups quickly and
              easily.
            </p>
            <p className="flexStart c-block-left-contact-p">
              <img src={phoneIcon} alt="icon" height={40} />
              +1 555 505 5050
            </p>
            <p className="flexStart c-block-left-contact-p">
              <img src={mailIcon} alt="icon" height={40} />
              info@designmodo.com
            </p>
            <p className="flexStart c-block-left-contact-p">
              <img src={officeIcon} alt="icon" height={40} />
              San Francisco, CA560 Bush St & 20th Ave, Apt5 San Francisco,
              230909
            </p>
          </motion.div>

          <motion.div
            className="c-block-right"
            initial={{ opacity: 0, x: 1200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2 }}
          >
            <form className="c-form-wrapper">
              <div className="flexColumn c-form">
                <div className="flexCenter c-form-firstrow">
                  <div className="flexColumn">
                    <label htmlFor="form-name">Your name</label>
                    <input
                      type="text"
                      name="form-name"
                      placeholder="First Name"
                      required
                    />
                  </div>

                  <div className="flexColumn">
                    <label htmlFor="form-budget">Budget</label>
                    <input
                      type="number"
                      name="form-budget"
                      placeholder="$500"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="flexColumn">
                  <label htmlFor="form-email">Your email</label>
                  <input
                    type="email"
                    name="form-email"
                    placeholder="example@mail.com"
                    required
                  />
                </div>

                <div className="flexColumn">
                  <label htmlFor="form-userMessage">Your message</label>
                  <textarea name="userMessage" placeholder="Message" required />
                </div>

                <div className="flexEnd c-form-btn-wrapper">
                  <button type="submit" className="btn c-form-btn">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default contact;
