import React from 'react'


const Navbar = () => {
  return (
    <div className='top-nav'>
        <div className='navbar'>
            <nav>
                <h3>Kiprono</h3>
                <ul>
                    <li className='navlinks'>
                        <a href="#home">Home</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                       
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar