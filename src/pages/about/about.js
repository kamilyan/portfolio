import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Profile from "../../assets/img/profile/profile.jpg";
import "./about.css";

const About = () => {
  return (
    <div id="about">
      <h1 className="pt-3 text-center pb-3">About Me</h1>
      <Container>
        <Row className="jutify-content-center mb-2 mr-2">
          <Col xs={12} md={6}>
            <Row>
              <Image
                className="profile justify-content-end"
                src={Profile}
                thumbnail
                fluid
              />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className="align-items-start p-2 my-details">
              Hi there! I am <strong>&nbsp; Maor Kamilyan </strong><br/>
              I'm a passionate self-taught full-stack web developer.
              <br/>
              In 2020, I successfully completed my Computer Science.
              <br/>
              I love learning about new technologies and how i can
              use them to build better and scalable applications.
            </Row>
            <Row>
              <Col className="d-flex justify-content-center flex-wrap">
                <div>
                  <a href="#contact">
                    <Button className="m-2" variant="outline-primary">
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://drive.google.com/file/d/1OspvXxgraoWnCBEC6o4dhrAt3mRCpdpI/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="m-2" variant="outline-success">
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://github.com/kamilyan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="m-2" variant="outline-dark">
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/maor-kamilyan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="m-2" variant="outline-info">
                      LinkedIn
                    </Button>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
