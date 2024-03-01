import React from "react";

import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga
          </div>
        </div>
        <div className="col">
          {/* {"contacts "} */}
          <div className="title">Contacts</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">Nawabganj - 208002, Kanpur -India</div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: +91 9100000006</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email:helpme@gmail.com</div>
          </div>
        </div>
        <div className="col">
          {/* {"categories "} */}
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speaker</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          {/* pages */}
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">privicy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms and Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">
            REACTSTORE 2023 
          </div>
          <img src={Payment} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
