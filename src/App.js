// src/App.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Import custom CSS for themes

function App() {
  const [darkMode, setDarkMode] = useState(true); // Initialize dark mode as true

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavbarComponent toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <div className="content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
