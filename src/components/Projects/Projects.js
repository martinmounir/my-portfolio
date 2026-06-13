import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import portfolio from '../../Assets/Projects/portfolio.png'
import Social_Media_Dashboard from '../../Assets/Projects/Social_Media_Dashboard.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A modern and fully responsive personal portfolio website built with React.js and Bootstrap. Showcases projects, technical skills, education, and experience through an intuitive interface, interactive project cards, and a mobile-first design optimized for all devices."
              ghLink="https://github.com/martinmounir/my-portfolio"
              demoLink="https://martin-mounir.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Social_Media_Dashboard}
              isBlog={false}
              title="Social Media Dashboard"
              description="Developed a responsive social media dashboard using HTML, SCSS, and JavaScript. Implemented dark/light mode functionality, social media analytics cards, and a clean, modern UI while following responsive design principles for desktop and mobile devices."
              ghLink="https://github.com/martinmounir/Social_Media_Dashboard"
              demoLink="https://social-media-dashboard-12.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
