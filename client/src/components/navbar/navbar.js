import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => 
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            {/* <!-- Brand and toggle get grouped for better mobile display --> */}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>

            {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link className={window.location.pathname === "/" ? "active" : ""} to="/" id="home">Home</Link></li>
                    <li><Link className={window.location.pathname === "/saved" ? "active" : ""} to="/saved" id="saved">Saved Articles</Link></li>
                </ul>
            </div>
        </div>
    </nav>

export default Navbar;