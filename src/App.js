import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import "./App.css"
import Skills from './Components/Skills'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Home/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App