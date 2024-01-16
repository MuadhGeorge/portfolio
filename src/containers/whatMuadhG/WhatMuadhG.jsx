import React from 'react'
import Feature from '../../components/feature/Feature';
import './whatMuadhG.css';

const WhatMuadhG = () => {
  return (
    <div className="muadh__whatmuadh section__margin" id="about">
    <div className="muadh__whatmuadh-feature">
      <Feature title="Background" text="Originating from a distinctive background that profoundly influences my goals and perspectives, my journey began in Morocco, where I became fluent in Arabic before returning to the United States. Settling in College Park, Georgia, a community facing substantial economic challenges, I encountered the struggles of a lower-income environment. These challenges fueled my determination to overcome obstacles through a steadfast commitment to education and perseverance. Amana Academy in Alpharetta emerged as my educational cornerstone, symbolizing my family's unwavering dedication to providing better opportunities. Witnessing my father's entrepreneurial endeavors served as a powerful example of resilience and fortitude. Now navigating the landscape of higher education, I draw upon these experiences to shape my perspective and contribute meaningfully to the broader world." />
    </div>
    <div className="muadh__whatmuadh-heading">
      <h1 className="gradient__text">Allow me to share some insights about myself, providing you with a glimpse into who I am.</h1>
      <p><a href='#contact'>Connect with Me</a></p>
    </div>
    <div className="muadh__whatmuadh-container">
      <Feature title="Front-End" text="HTML, CSS, ReactJs, TypeScript, Swift, JQuery" />
      <Feature title="Back-End" text="HTML, CSS, ReactJs, TypeScript, Swift, JQuery" />

      <Feature title="Relavant Course Work" text="Object Oriented Programming, Data Structures/Algorithms, Objects/Design, Discrete Mathematics, Linear Algebra, Multivariate Calculus, Computer Organization/Programming, Combinatorics, Statistics" />
      <Feature title="Education" text="Shifting from Amana Academy, a STEM-focused school, to Milton High School was a crucial transition in my education. At Milton, I expanded my horizons beyond the classroom by actively engaging with the community. Now pursuing a Computer Science major at Georgia Tech, set to graduate in May 2025, I aim to utilize my technical skills for a positive impact. This journey, from a STEM foundation to community involvement and now focusing on computer science, highlights my commitment to both academic and societal growth." />
    </div>
  </div>
  )
}

export default WhatMuadhG