import React from "react";
import "../styles/Contact.css"; // Import the Contact.css file

const Contact = () => {
  return (
    <div className="contact">
      <h1>Points of Contact</h1>
      <div className="contact-details">
        <div className="contact-detail">
          <h3>By Text or Call:</h3>
          <p><a href="tel:+1 605-252-0324">+1 605-252-0324</a></p>
        </div>
        <div className="contact-detail">
          <h3>By Email:</h3>
          <p>Marcus.dallen08@gmail.com</p>
        </div>
        <div className="contact-detail">
          <h3>LinkedIn:</h3>
          <a href="https://www.linkedin.com/in/marcus-allen-5898a3313/" target="_blank" rel="noopener noreferrer">
            Visit LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
