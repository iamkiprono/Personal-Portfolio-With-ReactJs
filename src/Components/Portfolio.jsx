import React from "react";
import "./Portfolio.css";
import fulltime from "../assets/360.jpg";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h3>Portfolio</h3>
      <div className="projects">
        <div className="portfolio-container">
          <img src={fulltime} alt="" />
          <div className="project-details">
            
            <p>
              This is a Football News website that fetches news from an external
              JSON file and renders to the page
            </p>

            <div className="project-links">
              <a href="">Visit</a>
              <a href="">View on Github</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
