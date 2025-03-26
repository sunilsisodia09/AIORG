import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const MyNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">AI ORG 11</div>

      <div className="menu-toggle" onClick={() => setMenuOpen(true)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <span className="close-menu" onClick={closeMenu}>&times;</span>
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/service" className={location.pathname === "/service" ? "active" : ""} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <Link className="btn" to="/login" onClick={closeMenu}>
          <button className="login-btn">Login</button>
        </Link>
        <Link className="btn" to="/register" onClick={closeMenu}>
          <button className="signup-btn">Sign Up</button>
        </Link>
      </ul>
    </nav>
  );
};

export default MyNavbar;
