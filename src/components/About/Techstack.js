import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { SiNextdotjs, SiSolidity } from 'react-icons/si'
import { FaRust } from 'react-icons/fa'

import Cpp from '../../Assets/TechIcons/C++.svg'
import Javascript from '../../Assets/TechIcons/Javascript.svg'
import Typescript from '../../Assets/TechIcons/Typescript.svg'

import HTML from '../../Assets/TechIcons/HTML.svg'
import CSS from '../../Assets/TechIcons/CSS.svg'
import SASS from '../../Assets/TechIcons/SASS.svg'

import Bootstrap from '../../Assets/TechIcons/Bootstrap.svg'
import Tailwind from '../../Assets/TechIcons/Tailwind.svg'

import Next from '../../Assets/TechIcons/Next.svg'
import ReactIcon from '../../Assets/TechIcons/ReactIcon.svg'
import Redux from '../../Assets/TechIcons/Redux.svg'
import Vite from '../../Assets/TechIcons/Vite.svg'

import Git from '../../Assets/TechIcons/Git.svg'
import MySQL from '../../Assets/TechIcons/MySQL.svg'

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" className="tech-icon-images" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" className="tech-icon-images" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" className="tech-icon-images" />
        <div className="tech-icons-text">Typescript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="html" className="tech-icon-images" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="css" className="tech-icon-images" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SASS} alt="sass" className="tech-icon-images" />
        <div className="tech-icons-text">SASS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="bootstrap" className="tech-icon-images" />
        <div className="tech-icons-text">Bootstrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" className="tech-icon-images" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Next} alt="Next" className="tech-icon-images" />
        <div className="tech-icons-text">Next.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="ReactIcon" className="tech-icon-images" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" className="tech-icon-images" />
        <div className="tech-icons-text">Redux</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Vite} alt="Vite" className="tech-icon-images" />
        <div className="tech-icons-text">Vite</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" className="tech-icon-images" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
    </Row>
  )
}

export default Techstack
