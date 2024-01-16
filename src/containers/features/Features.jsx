import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Georgia Tech Vertically Integrated Project:  Research Assistant',
    text: 'I conducted data analysis and visualization to support Sustainable Development Goals (SDGs) 9 and 16, facilitating comprehensive data gathering, assessment, and visual representation. Additionally, I developed data dashboards aimed at providing valuable insights into infrastructure initiatives, industrialization progress, and societal peace and inclusivity levels. By applying big data analytics, I identified trends and patterns that informed policy formulation and project strategies, contributing to more informed decision-making processes.',
  },
  {
    title: 'Tic Tac Toe: Python Game Developer',
    text: 'I created a user-friendly graphical interface (GUI) for a Tic Tac Toe game using the tkinter library, enabling intuitive player interaction. The underlying game logic was engineered to allow players to make moves on a 3x3 grid, with efficient checks for win and tie conditions. The code seamlessly handled user interactions, such as button clicks, ensuring real-time updates to the game state. Additionally, I implemented and displayed an in-game scoreboard within the GUI to effectively track the number of wins for each player, enhancing the overall user experience.',
  },
  {
    title: '2D Dungeon Crawler Project: Software Engineer',
    text: 'I spearheaded the design and execution of fundamental game mechanics, including character control, enemy interactions, powerup collection, and level progression, to create a smooth and immersive player experience. Additionally, I introduced a high-score leaderboard feature, elevating player engagement and fostering healthy competition, thereby enhancing the games replay value. My dedication to quality was evident in the implementation of unit tests, systematically ensuring the functionality and reliability of game features, resulting in a bug-free and robust gaming experience.',
  },
  {
    title: 'Personal Portfolio Project: Front-End Web Developer',
    text: 'I created my personal website using React, JavaScript, and CSS. Leveraging React ensured a responsive and interactive user interface, while JavaScript enhanced functionality for dynamic content updates. CSS played a key role in crafting an appealing and cohesive design. This project not only showcased my technical skills but also allowed me to present a comprehensive digital representation of myself, merging creativity with web development expertise.',
  },
];

const Features = () => {
  return (
    <div className="muadh__features section__padding" id="expnproj">
    <div className="muadh__features-heading">
      <h1 className="gradient__text">Project Prowess: Weaving Success, One Experience at a Time - Where Every Task is a Chapter in My Career Story</h1>
    </div>
    <div className="muadh__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
  )
}

export default Features