import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Search Bar */}
      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      {/* Hamburger Icon */}
      <button className="navbar-toggle" onClick={toggleMenu}>
        &#9776;
      </button>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <a href="/">Home</a>
        <a href="/">Products</a>
        <a href="/">About Us</a>
        <a href="/">Contact</a>
      </div>

      {/* Buttons Section */}
      <div className={`navbar-icons ${menuOpen ? "show" : ""}`}>
        <a href="/" className="cart">
          Cart <span className="cart-count">0</span>
        </a>
        <a href="/login" className="login">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;
