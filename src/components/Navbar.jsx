import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/">Tianhua Chen</NavLink>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/research" onClick={() => setMenuOpen(false)}>
              Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/publications" onClick={() => setMenuOpen(false)}>
              Publications
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </li>
          <li>
            <button onClick={toggleTheme}>
              {darkMode ? "Light 🌞" : "Dark 🌙"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
