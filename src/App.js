import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./App.css";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
import Portfolio from "./Components/Portfolio";

const App = () => {
  return (
    
      <div>
        <Navbar />       
        <Home />
        <Skills />
        <Portfolio />
        <ContactForm />
        <Footer />
        </div>
  )
};

export default App;
