import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '/src/assets/logo.png'; // Adjust if your path is different

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Project Z Logo" className="logo-img" />
        <div className="logo-text-group">
          <h2 className="logo-text">Project Z</h2>
          <span className="tagline">Style it. Snap it. Shop it.</span>
        </div>
      </Link>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/results">Results</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
