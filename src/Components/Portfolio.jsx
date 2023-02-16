import React from "react";
import "./Portfolio.css";
import fulltime from "../assets/360.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h3>Projects</h3>
      <div className="projects">
        <div className="portfolio-container">
          <img src={fulltime} alt="" />
          <div className="project-details">
            <h3>FullTime360</h3>
            
            <p>
              This is a Football News website that fetches news from an external
              JSON file and renders to the page
            </p>

            <div className="project-links">
              <a href="https://fulltime360.netlify.app/" target="_blank">Visit</a>
              <a href="https://github.com/iamkiprono/FullTime-360-Website" target="_blank">View on Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
