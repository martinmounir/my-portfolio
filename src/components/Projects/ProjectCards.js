import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CgWebsite } from 'react-icons/cg'
import { BsGithub } from 'react-icons/bs'

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className="project-img"
      />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text style={{ textAlign: 'left' }}>
          {props.description}
        </Card.Text>

        <div className="project-buttons">
          <Button
            className="tech-icons"
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub />
            <span className="tech-icons-text">GitHub</span>
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              className="tech-icons"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite />
              <span className="tech-icons-text">Demo</span>
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default ProjectCards