import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">NewsLetter</span>
        <span className="big-text">Sign Up for latest updates and offers</span>
        <div className="form">
          <input type="email" placeholder="Email Address"/>
          <button>Enter</button>
        </div>
        <div className="text">
          Will be used in accordance with Privacy Policy i will add privicyy
          policy page policy
        </div>
        <div className="social-icons">
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaLinkedin size={14} />
          </div>
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
