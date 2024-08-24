import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send an email or store data)
    console.log('Form Data:', formData);
  };

  return (
    <Container id="contact" className="py-5">
      <Row>
        <Col lg={6}>
          <h2 className="mb-4">Get in Touch</h2>
          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-envelope me-2"></i>
              <a href="mailto:hiteshkhandelwal2002@gmail.com">hiteshkhandelwal2002@gmail.com</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-linkedin me-2"></i>
              <a href="https://www.linkedin.com/in/hitesh2002/">hitesh2002</a>
            </li>
            <li className="mb-2">
              <i className="bi bi-github me-2"></i>
              <a href="https://github.com/hiteshchinu">hiteshchinu</a>
            </li>
          </ul>
        </Col>
        <Col lg={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                placeholder="Your message here"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
