import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './project.css'; // Import the CSS file

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/hiteshchinu/repos', {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        });

        const projectsData = await Promise.all(response.data.map(async (project) => {
          try {
            const imageResponse = await axios.get(`https://api.github.com/repos/hiteshchinu/${project.name}/contents/cover.png`, {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
              },
            });
            project.coverImage = imageResponse.data.download_url;
          } catch (error) {
            project.coverImage = null;
          }

          try {
            const topicsResponse = await axios.get(`https://api.github.com/repos/hiteshchinu/${project.name}/topics`, {
              headers: {
                Authorization: `token ${GITHUB_TOKEN}`,
                Accept: 'application/vnd.github.mercy-preview+json',
              },
            });
            project.topics = topicsResponse.data.names || [];
          } catch (error) {
            project.topics = [];
          }

          return project;
        }));

        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching GitHub projects', error.response || error);
        setError('Failed to fetch projects'); // Set error state
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [GITHUB_TOKEN]);

  if (loading) {
    return (
      <Container className="my-5 text-center">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5 text-center">
        <p>{error}</p>
      </Container>
    );
  }

  return (
    <Container id="projects" className="my-5">
      <h2 className="text-center mb-4">My GitHub Projects</h2>
      <Row xs={1} sm={2} md={3} lg={3} className="g-4">
        {projects.length > 0 ? (
          projects.map((project) => (
            <Col key={project.id}>
              <Card className="project-card">
                <Card.Img 
                  variant="top" 
                  src={project.coverImage || require('../assets/images/default.png')} 
                  alt={`${project.name} cover`} 
                  className="project-card-img"
                />
                <Card.Body>
                  <Card.Title className="project-card-title">{project.name}</Card.Title>
                  <Card.Text>
                    {project.description || 'No description available.'}
                  </Card.Text>
                  
                  <div className="d-flex flex-wrap align-items-center mt-2 my-3">
                    {project.html_url && (
                      <a
                        href={project.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary me-2"
                      >
                        View on GitHub
                      </a>
                    )}
                    {project.homepage && (
                      <a
                        href={project.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary me-2"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>

                  <div className="d-flex flex-wrap align-items-center">
                    {project.topics && project.topics.map((topic) => (
                      <span key={topic} className="badge">
                        # {topic}
                      </span>
                    ))}
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No projects available.</p>
        )}
      </Row>
    </Container>
  );
};

export default Projects;
