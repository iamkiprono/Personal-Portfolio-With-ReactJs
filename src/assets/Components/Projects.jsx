import React from "react";
import projects from "./Data/ProjectsData";

const Projects = () => {
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
                  <a target="_blank" href={project.live_url}>
                    View Live
                  </a>
                  <a target="_blank" href={project.github_url}>
                    View code on GitHub
                  </a>
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
