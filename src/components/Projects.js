import React from 'react';
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p>
        Here are a few projects that showcase my skills, ideas, and passion for software development.
        While some projects are concepts or works in progress, they reflect my drive to learn, create, and innovate.
      </p>

      <div className="project-card">
        <h3>Portfolio Website</h3>
        <p>
          Designed and developed this personal portfolio website using React Router, HTML, CSS, and JavaScript.
          The site highlights my background, accomplishments, and skills while providing a clean, professional layout.
        </p>
      </div>

      <div className="project-card">
        <h3>Bracket Generator</h3>
        <p>
          Developed a Python-based competition bracket generator for 8-player tournaments, 
          with plans to expand to support larger brackets (16, 32, 64 players).
          Focused on clean logic and user-friendly design.
        </p>
      </div>

      <div className="project-card">
        <h3>Pool Game AI Analysis Tool (Concept)</h3>
        <p>
          An AI-driven concept to analyze professional pool games, identify shot patterns, and assist players 
          in visualizing solutions for table layouts. Combining computer vision and machine learning ideas 
          to bring AI innovation to billiards.
        </p>
      </div>

      <div className="project-card">
        <h3>Online Appointment Booking System</h3>
        <p>
          Collaborated in a team to design and deliverables for an online appointment booking 
          system for a nail salon. Part of my duties in this project was to create UML diagrams, 
          create method specification cards, use case diagrams, and more.  
        </p>
      </div>
    </div>
  );
}

export default Projects;
