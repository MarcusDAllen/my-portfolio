import React from 'react';
import "../styles/AboutMe.css";

function About() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p>
        I am a passionate Computer Science student with a strong interest in creating
        innovative software solutions. In addition to my academic pursuits, I am also an
        avid competitive pool player. My journey in both fields has been shaped by hard work,
        dedication, and a constant drive to improve. 
      </p>
      <p>
        I have been passionate about competitive pool from a young age. Over the years, 
        I've honed my skills and achieved numerous accomplishments that reflect my dedication 
        and love for the game. Below are some key highlights:
      </p>
      
      <ul>
        <li>
          <h3> <strong>First State Tournament</strong> </h3> - At 13 years old, I played in my first state 
          tournament in the teams division, alongside my dad and his friends. We finished 
          9th-12th in the Sportsman's Division (the lowest division in the SDABA tournament). 
          This experience sparked my passion for competitive pool and set me on the path for 
          further accomplishments.
        </li>
        <h3>Pool Accomplishments</h3>
        <p>
          I have had the privilege of competing in various pool tournaments, where I've gained
          valuable experience and recognition:
        </p>

        <li>
          <strong>VNEA International Junior Championship</strong> - I participated in this 
          prestigious international tournament, where I received 7-8th place in 2018 and 
          13-16th place in 2019. This competition features participants from countries such as 
          New Zealand and Canada.
        </li>
        <li>
          <strong>VNEA International Junior Championship - Single Elimination</strong> - In 2019, 
          after placing 13-16th in the main tournament, I won the Single Elimination consolation 
          tournament, demonstrating my resilience and determination.
        </li>
        <li>
          <strong>SDABA State Pool Tournament (2023)</strong> - I placed 4th in the B Division at the
          South Dakota Amateur Billiards Association (SDABA) State Pool Tournament, showcasing my
          consistency and competitive edge at the state level.
        </li>
        <li>
          <strong>Multiple State Tournament Wins</strong> - I have been a multiple-time winner in
          various state tournaments, consistently ranking among the top players in my division.
        </li>
      </ul>

      <p>
        These achievements highlight my commitment to excelling in both academics and competitive
        sports. I believe that the dedication and perseverance I've developed through pool translate
        into my academic and professional life, particularly in my pursuit of a career in software
        development.
      </p>

      <h2>My Accomplishments</h2>
      <div className="accomplishments">
        <div className="accomplishment">
          <h3>2018 VNEA International Junior Championship</h3>
          <p>7-8th place overall, marking my skills on the international level</p>
        </div>
        <div className="accomplishment">
          <h3>2019 VNEA International Junior Championship </h3>
          <p>Placed 13th-16th overall and won the single-elimination consolation tournament, marking a major achievement at the national level.</p>
        </div>
        <div className="accomplishment">
          <h3>2023 SDABA State Pool Tournament</h3>
          <p>4th place in the B division, showcasing skill and perseverance in the state-level competition.</p>
        </div>
        <div className="accomplishment">
          <h3>Multiple State Wins</h3>
          <p>Won several state tournaments over the years, highlighting consistent performance and a commitment to excellence in the sport of pool.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
