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
        <div className="h-[2px] shadow-black bg-[#7C96AB]"></div>
        <Skills />
        <div className="h-[2px] shadow-black bg-[#7C96AB]"></div>
        <Projects />
        <div className="h-[2px] shadow-black bg-[#7C96AB]"></div>
        <Contact />
      </Router>
    </div>
  );
};

export default App;
