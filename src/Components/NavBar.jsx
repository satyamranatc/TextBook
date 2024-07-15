import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav id = "MainNav">

        <h2>TextBook</h2>

        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/courses"}>Courses</Link></li>
            <li><Link to={"/practice"}>Practice</Link></li>
            <li><Link to={"/doubt"}>Doubt</Link></li>
            <li><Link to={"/contact"}>Contact Us</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
        </ul>

    </nav>
  )
}
