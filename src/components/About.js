// src/components/About.js
import React from "react";
import { Container } from "react-bootstrap";

const About = () => {
  const aboutMe = {
    name: "Hitesh Khandelwal",
    hobbies: ["music", "exploring new technologies", "fitness"],
    profession: "Electrical and Electronics Engineering Graduate",
    skills: ["data analytics", "frontend development", "IoT", "problem-solving"],
    interests: ["coding", "project development", "continuous learning"],
    description: `Hi, I'm Hitesh Khandelwal, an enthusiastic Electrical and Electronics Engineering graduate with a strong foundation in data analytics, frontend development, and IoT. My education at VIT Chennai and various projects, including a gesture-controlled robotic arm and a full-stack note-taking application, reflect my technical skills and problem-solving abilities.`,
    additionalInfo: `I am passionate about leveraging my skills to contribute to innovative projects. In my free time, I enjoy exploring new technologies, working on personal projects, and staying fit. I am always eager to learn and grow within dynamic teams and challenging environments.`,
  };

  // Convert the object to a formatted JSON string
  const jsonText = JSON.stringify(aboutMe, null, 2);

  return (
    <Container id="about" className="my-5">
      <h2>About Me</h2>
      <pre className="code-block">{jsonText}</pre>
    </Container>
  );
};

export default About;
