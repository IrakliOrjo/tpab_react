import React from 'react';
import logo2 from '../../assets/logo2.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Don't want to get pimped by industry?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={logo2} alt="gpt3_logo" />
        <p>Created By Irakli Orjonikidze <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Georgia, Tbilisi</p>
        <p>irakliorjo92@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>TPAB Fan Tribute. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;