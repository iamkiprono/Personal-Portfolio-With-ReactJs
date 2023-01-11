import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">Kiprono</div>
        <div className="navlinks">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Navbar