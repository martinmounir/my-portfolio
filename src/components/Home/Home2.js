import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Front-End Developer and Computer Science undergraduate
              passionate about transforming ideas into modern, responsive, and
              user-friendly web applications. I enjoy building clean interfaces,
              solving problems, and creating digital experiences that combine
              performance with great design.
              <br />
              <br />
              Over time, I’ve explored different technologies and found my
              passion in developing scalable and interactive web applications
              using modern frontend tools and frameworks.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {' '}
                  C++, JavaScript, TypeScript, Next.js, React.js, Redux,
                  Bootstrap, Tailwind CSS, and Sass{' '}
                </b>
              </i>
              — and I enjoy continuously learning new technologies and improving
              my development skills.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {' '}
                  Web Applications, Front-End Development, UI/UX-focused web,
                  responsive design,{' '}
                </b>
              </i>
              and building real-world applications that deliver meaningful user
              experiences.
              <br />
              <br />
              Whenever possible, I love building projects that challenge me to
              write clean, maintainable code and create impactful digital
              products.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
