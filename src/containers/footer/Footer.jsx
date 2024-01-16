import React from 'react';
import muadhLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="muadh__footer section__margin" id="contact">
    <div className="muadh__footer section__padding">
    <div className="muadh__footer-heading">
      <h1 className="gradient__text">Thank You.</h1>
      <h1 className="gradient__text">Connect with me!</h1>
    </div>
    <div className="muadh__footer-links">
      <div className="muadh__footer-links_logo">
        <img src={muadhLogo} alt="muadh_logo" />
        <p>Atlanta, GA 30332, <br /> All Rights Reserved</p>
      </div>
      <div className="muadh__footer-links_div">
        <h4>Social Media</h4>
        <p><a href='https://www.instagram.com/muadhgeorge/'>Instagram</a></p>
        <p><a href="https://www.linkedin.com/in/muadhgeorge/">Linkedin</a></p>
        <p><a href='https://www.tiktok.com/@muadhgeorge'>TikTok</a></p>
        <p><a href='https://github.com/MuadhGeorge'>GitHub</a></p>
      </div>
      <div className="muadh__footer-links_div">
        <h4>Missed some info?</h4>
        <p><a href="#home">Home</a></p>
        <p><a href="#about">About Me</a></p>
        <p><a href="#expnproj">Experience & Projects</a></p>
        <p><a href="#Lead">Leadership</a></p>
      </div>
      <div className="muadh__footer-links_div">
        <h4>Get in touch</h4>
        <p>Atlanta, GA 30332</p>
        <p>(404) 532-8295</p>
        <p>muadh308@gmail.com</p>
      </div>
    </div>

    <div className="muadh__footer-copyright">
      <p>@2023 Muadh George. All rights reserved.</p>
    </div>
  </div>
  </div>
  )
}

export default Footer