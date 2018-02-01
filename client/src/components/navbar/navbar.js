import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => 
    <nav className="navbar navbar-light bg-faded">
        <ul className="navbar-nav">
            <li><Link className={window.location.pathname === "/" ? "nav-item nav-link active" : "nav-item nav-link"} to="/" id="home">Home</Link></li>
            <li><Link className={window.location.pathname === "/saved" ? "nav-item nav-link active" : "nav-item nav-link"} to="/saved" id="saved">Saved Articles</Link></li>
        </ul>
    </nav>;

export default Navbar;