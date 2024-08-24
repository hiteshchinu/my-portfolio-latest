// src/components/Home.js
import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Typed from 'typed.js';
import './Home.css'; // Import custom CSS for Home component
import profilePhoto from '../assets/images/default.png'; // Replace with the correct path

const Home = () => {
  useEffect(() => {
    const options = {
      strings: ['Data Analyst', 'Developer', 'Electrical Engineer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      loop: true
    };

    const typed = new Typed('.typed', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="hero" className="home">
      <Row className="align-items-center justify-content-center">
      <Col md={6} className="text-center">
          <img src={profilePhoto} alt="Hitesh Khandelwal" className="profile-photo" />
        </Col>
        <Col md={6} className="text-center text-md-left">
          <div className="hero-content">
            <h1>
              Welcome to Hitesh's portfolio!
            </h1>
            <h1>
              I'm <span className="typed"></span>
            </h1>
            <p>Data Analyst, Developer, Electrical Engineer</p>
            <ul className="list-unstyled list-social">
              <li>
                <a href="https://github.com/hiteshchinu" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/hitesh2002/" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
