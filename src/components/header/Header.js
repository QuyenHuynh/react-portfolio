import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </>
        );
}

export default Header;