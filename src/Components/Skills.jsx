import React from "react";
import "./Skills.css";
import htmlicon from "../assets/html.png";
import cssicon from "../assets/css.png";
import jsicon from "../assets/js.png";
import reacticon from "../assets/react.png";
import githubicon from "../assets/github.png";


const Skills = () => {
  return (
    
    <div id="skills" className="skills">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1228355685509098"
     crossorigin="anonymous"></script>
      <div className="skills-container">
        <h3>Skills</h3>
        <div className="front-end">
          <div className="front-head">
        <p>Front-End Skills</p>
        </div>
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
        </div>
        <div className="version-control">
        <p>Version Control</p>
        <div className="skills-cards">
          <div className="html-card card">
            <p>Github</p>
            <img src={githubicon} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
