import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './pages/About';
import Research from './pages/Research';
import Publications from './pages/Publications';
import Contact from './pages/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;