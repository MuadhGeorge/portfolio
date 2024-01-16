import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="muadh__navbar">
      <div className="muadh__navbar-links">
        <div className="muadh__navbar-links_logo">
          <img src={logo} alt="logos" />
        </div>
        <div className='muadh__navbar-links_container'>
          <p><a href='#home'>Home</a></p>
          <p><a href='#about'>About Me</a></p>
          <p><a href='#expnproj'>Experience & Projects</a></p>
          <p><a href='#Lead'>Leadership</a></p>
          <p><a href='#contact'>Contact</a></p>
          </div>
      </div>
      <div className="muadh__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="muadh__navbar-menu_container scale-up-center">
          <div className="muadh__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#about">About Me</a></p>
            <p><a href="#expnproj">Experience & Projects</a></p>
            <p><a href="#Lead">Leadership</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;