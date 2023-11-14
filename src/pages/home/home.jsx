import React from 'react';
import ReactDOM from 'react-dom/client';
import './home.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeroSection from './components/hero.jsx';
import 'animate.css';

function Project({ title, description }) {
  return (
    <>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
function Homepage() {
  const projects = [
    { title: 'Project 1', description: 'This is project 1.' },
    { title: 'Project 2', description: 'This is project 2.' },
    // add more projects here
  ];

  return (
    <>
      <HeroSection className="mt-50"/>
    <Container>

      <Row className='mt-50'>
        <Col>
          <h1>Welcome to My Portfolio</h1>
          <p>This is a brief introduction about myself.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>My Projects</h2>
        </Col>
      </Row>
      <Row>
        {projects.map((project, index) => (
          <Project key={index} title={project.title} description={project.description} />
        ))}
      </Row>
    </Container>
    </>
  );
}

export default Homepage;