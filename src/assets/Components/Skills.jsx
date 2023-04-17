import React from "react";
import skills from "../Components/Data/SkillsData";
const Skills = () => {
  return (
    <div>
      <div className="container">
        <h3 className="headings">Skills</h3>
        <div className="skills-cards">
          {skills.map((skill) => {
            return (
              <div className="card">
                <img src={skill.icon} alt="" />
                <h3>{skill.skill}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
