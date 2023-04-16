import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
        <div className='navbar'>
            <nav>
                <h3>Kiprono</h3>
                <ul>
                    <li className='navlinks'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='skills'>Skills</NavLink>
                        <NavLink to='projects'>Projects</NavLink>
                        <NavLink to='contact'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar