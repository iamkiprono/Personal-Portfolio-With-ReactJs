import React from "react";
import Navbar from "./assets/Components/Navbar";
import Home from "./assets/Components/Home";
import Skills from "./assets/Components/Skills";
import Projects from "./assets/Components/Projects";
import Contact from "./assets/Components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
