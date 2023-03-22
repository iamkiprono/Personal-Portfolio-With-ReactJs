import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="navbar" className="navbar">
      <div className="logo">Kiprono</div>
      <div className="navlinks">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a
              className="resume"
              href="https://kipronoresume.netlify.app"
              target="_blank"
            >
              View Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
