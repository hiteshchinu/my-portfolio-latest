// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS for the Navbar
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = ({ toggleDarkMode, darkMode }) => {
  return (
    <Navbar expand="lg" className={`navbar ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} fixed="top">
      <Navbar.Brand>
        <Link className="terminal-text" to="/">Hitesh Khandelwal</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} className="terminal-text" to="/home">Home</Nav.Link>
          <Nav.Link as={Link} className="terminal-text" to="/about">About</Nav.Link>
          <Nav.Link as={Link} className="terminal-text" to="/projects">Projects</Nav.Link>
          <Nav.Link as={Link} className="terminal-text" to="/contact">Contact</Nav.Link>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
