import React from "react";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Components/Home";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Router>
 
        <Navbar />
        <Home />
        <div className="shadow-black"></div>
        <Skills />
        <div className="shadow-black"></div>
        <Projects />
        <div className="shadow-black"></div>
        <Contact />
      </Router>
    </div>
  );
};

export default App;
