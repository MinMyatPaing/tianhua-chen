import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar";
import About from "./pages/About";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import Teaching from "./pages/Teaching";
import Research from "./pages/Research";
import ResearchDetails from "./pages/ResearchDetails";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    if (darkMode) {
      root.style.setProperty("--bg-color", "#111827");
      root.style.setProperty("--text-color", "#f3f4f6");
      root.style.setProperty("--subtext-color", "#9ca3af");
      root.style.setProperty("--accent-color", "#60a5fa");
      root.style.setProperty("--card-bg", "#1f2937");
      localStorage.setItem("theme", "dark");
    } else {
      root.style.setProperty("--bg-color", "#ffffff");
      root.style.setProperty("--text-color", "#111827");
      root.style.setProperty("--subtext-color", "#4b5563");
      root.style.setProperty("--accent-color", "#3b82f6");
      root.style.setProperty("--card-bg", "#f3f4f6");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}>
      <NavBar darkMode={darkMode} onThemeChange={toggleTheme} />
      <main className="px-4 py-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
