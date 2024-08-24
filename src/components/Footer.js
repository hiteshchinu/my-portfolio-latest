import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="text-center py-3">
        <p>
          &copy; {new Date().getFullYear()} Made with 💚 by Hitesh Khandelwal.{" "}
        </p>
        <p>
          <a
            href="https://github.com/hiteshchinu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>{" "}
          <a
            href="https://www.linkedin.com/in/hitesh2002/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
