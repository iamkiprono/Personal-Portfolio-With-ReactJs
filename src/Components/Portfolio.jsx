import React from "react";
import "./Portfolio.css";
import fulltime from "../assets/360.jpg";
import countries from "../assets/countries.JPG";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio-container">
        <h3 className="project-heading">Projects</h3>
        <div className="card-holder">
          <div className="card-portfolio">
            <img src={fulltime} alt="" />
            <h4>Name: FullTime360</h4>
            <p>
              This is a football news website that consumes a RestAPI for the
              news updates. The user can sign in an make changes on the databse
              and the website will automatically fetch the updated news using
              the fetch API and render on the webpage
            </p>
            <h4>Tech:</h4>
            <p>Vanilla JavaScript</p>
            <div className="btns">
              <a target="_blank" href="https://fulltime360.netlify.app">
                View live
              </a>
              <a target="_blank" href="https://github.com/iamkiprono/FullTime-360-Website">
                View on Github
              </a>
            </div>
          </div>
          <div className="card-portfolio">
            <img src={countries} alt="" />
            <h4>Name: Rest API Frontend Mentor Challenge</h4>
            <p>
              This is a Front End Mentor challenge that requires to build an
              exact replica of a design and make use of an API to fetch the
              countries' data and display on the webpage. It also has search
              capability and the user can filter through countries using the
              search bar
            </p>
            <h4>Tech:</h4>
            <p>React</p>
            <div className="btns">
              <a target="_blank" href="https://countriescollins.netlify.app/">
                View live
              </a>
              <a target="_blank" href="https://github.com/iamkiprono/Countries-Rest-API-with-ReactJs">
                View on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
