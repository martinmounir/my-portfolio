import React from 'react'
import { Col, Row } from 'react-bootstrap'
import vsCode from '../../Assets/TechIcons/vscode.svg'
import NPM from '../../Assets/TechIcons/NPM.svg'
import Git from '../../Assets/TechIcons/Git.svg'
import GitHub from '../../Assets/TechIcons/GitHub.svg'
import Vercel from '../../Assets/TechIcons/Vercel.svg'
import Figma from '../../Assets/TechIcons/Figma.svg'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="VSC" className="tech-icon-images" />
        <div className="tech-icons-text">VSC</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={NPM} alt="NPM" className="tech-icon-images" />
        <div className="tech-icons-text">NPM</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={GitHub} alt="GitHub" className="tech-icon-images" />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Vercel} alt="Vercel" className="tech-icon-images" />
        <div className="tech-icons-text">Vercel</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={Figma} alt="Figma" className="tech-icon-images" />
        <div className="tech-icons-text">Figma</div>
      </Col>
    </Row>
  )
}

export default Toolstack
