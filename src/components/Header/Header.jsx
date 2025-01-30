import { Link } from "react-router-dom"
import React from "react";
import './Header.css'
const Header = ({ appName }) => {

    return (
        <header>
            <h1>{appName}</h1>
            <nav>
                <Link to='/products'> Products List</Link> | <Link to='/'> Log In</Link>
            </nav>
        </header>
    )
}

export default Header