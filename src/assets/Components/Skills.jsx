import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const getSkills = async () => {
    const res = await fetch("/skills.json");
    const data = await res.json();
    setSkills(data);
    console.log(data);
  };
  useEffect(() => {
    getSkills();
  }, []);
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
