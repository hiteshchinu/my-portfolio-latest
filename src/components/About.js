// src/components/About.js
import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  const aboutMe = {
    name: "Hitesh Khandelwal",
    hobbies: ["music", "movies"],
    profession: "Electrical Engineer transitioning into IT",
    skills: ["web development", "data analytics", "problem-solving"],
    interests: ["coding", "staying fit", "learning and growing"],
    description: `Hi, I'm Hitesh Khandelwal, a passionate electrical engineer with a keen interest in transitioning into the IT sector.
I've gained experience in various technologies, including web development, data analytics, and more.
My portfolio showcases a range of projects that highlight my skills and dedication.`,
    additionalInfo: `I enjoy problem-solving, coding, and staying fit by going to the gym.
I’m excited about the opportunities in the tech field and am always looking to learn and grow.`,
  };

  // Convert the object to a formatted JSON string
  const jsonText = JSON.stringify(aboutMe, null, 2);

  return (
    <Container id="about" className="my-5">
      <h2>About Me</h2>
      <pre className="code-block">
        {jsonText}
      </pre>
    </Container>
  );
};

export default About;
