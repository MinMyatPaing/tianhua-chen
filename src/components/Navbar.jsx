import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ darkMode, onThemeChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#003976] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold tracking-wide">
          Tianhua Chen
        </NavLink>
        <div className="hidden md:flex gap-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "!text-blue-400" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/teaching"
            className={({ isActive }) => (isActive ? "!text-blue-400" : "")}
          >
            Teaching
          </NavLink>
          <NavLink
            to="/research"
            className={({ isActive }) => (isActive ? "!text-blue-400" : "")}
          >
            Research
          </NavLink>
          <NavLink
            to="/publications"
            className={({ isActive }) => (isActive ? "!text-blue-400" : "")}
          >
            Publications
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "!text-blue-400" : "")}
          >
            Contact
          </NavLink>
          <button
            onClick={onThemeChange}
            className="bg-white text-[#003976] px-3 py-1 rounded font-medium hover:bg-gray-200 cursor-pointer"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="block">
            About
          </NavLink>
          <NavLink
            to="/research"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Research
          </NavLink>
          <NavLink
            to="/publications"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Publications
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block"
          >
            Contact
          </NavLink>
          <button
            onClick={onThemeChange}
            className="block mt-2 bg-white text-[#003976] px-3 py-1 rounded w-full"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
