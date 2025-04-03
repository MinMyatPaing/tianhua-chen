// src/App.jsx
// Main application component that sets up routing and theme toggling.

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./pages/About";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import PublicationDetail from "./pages/PublicationDetails";
import Teaching from "./pages/Teaching";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-gray-900 text-white min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <NavBar darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)} />
      <main className="px-4 py-6 max-w-5xl mx-auto">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/teaching" element={<Teaching />} />
          <Route path="/publications/:slug" element={<PublicationDetail />} />
          <Route path="/publications"  element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
