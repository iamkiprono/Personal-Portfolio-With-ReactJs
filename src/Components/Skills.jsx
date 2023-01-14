import React from "react";
import "./Skills.css";
import htmlicon from "../assets/html.png";
import cssicon from "../assets/css.png";
import jsicon from "../assets/js.png";
import reacticon from "../assets/react.png";
import githubicon from "../assets/github.png";


const Skills = () => {
  return (
    <div className="skills">
      <div className="skills-container">
        <h3>Skills</h3>
        <p>Front-End Skills</p>
        <div className="skills-cards">
          <div className="html-card card">
            <p>HTML</p>
            <img src={htmlicon} alt="" />
          </div>
          <div className="CSS-card card">
            <p>CSS</p>
            <img src={cssicon} alt="" />
          </div>
          <div className="JavaScript-card card">
            <p>JavaScript</p>
            <img src={jsicon} alt="" />
          </div>
          <div className="React-card card">
            <p>React</p>
            <img src={reacticon} alt="" />
          </div>
        </div>
        <p>Version Control</p>
        <div className="skills-cards">
          <div className="html-card card">
            <p>Github</p>
            <img src={githubicon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
