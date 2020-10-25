import React from "react"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <ul className="nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}


export default Header