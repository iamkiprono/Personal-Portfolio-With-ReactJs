import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const getProjects = async () => {
    const res = await fetch("/projects.json");
    const data = await res.json();
    setProjects(data);
    console.log(data);
  };
  useEffect(() => {
    getProjects();
  }, []);
  return (
    <div>
      <div className="container">
        <h3 className="headings">Projects</h3>
        <div className="projects-cards">
          {projects.map((project) => {
            return (
              <div className="card">
                <img src={project.image} alt="" />
                <h3>{project.project}</h3>
                <p>{project.desc}</p>
                <div className="button-links">
                  <a target="_blank" href={project.live_url}>View Live</a>
                  <a target="_blank" href={project.github_url}>View code on GitHub</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
