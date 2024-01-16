import React from 'react';
import self from '../../assets/self.png';
import './header.css';

const Header = () => (
  <div className="muadh__header section__padding" id="home">
    <div className="muadh__header-content">
      <h1 className="gradient__text">Hello There! My Name is Muadh George</h1>
      <p>I am a Computer Science major at Georgia Tech actively pursuing opportunities in the field of software engineering. I'm enthusiastic about applying my skills and knowledge to contribute meaningfully to innovative projects and am currently on the lookout for a fulfilling role in the realm of software engineering. </p>

    <div className="gpt3__header-content__input">
      </div>

      <div className="gpt3__header-content__people">
      </div>
      
      </div>

    <div className="muadh__header-image">
      <img src={self} alt='self'/>
    </div>
  </div>
);

export default Header;