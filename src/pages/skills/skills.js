import React from "react";
import { Card, CardDeck, Row, Col, Image } from "react-bootstrap";
import "./skills.css";
import { sources } from "./sources";

const Skills = () => {
  return (
    <div id="skills" className="pt-3 pb-3">
      <h1 className="text-center font-details pb-4">TECH Skills</h1>
      <CardDeck className="myCards">
        <Row className="d-flex justify-content-around">
          {/* Frontend */}
          <Col md={4}>
            <Card className="focus">
              <Card.Body>
                {/* Frontend */}
                <Card.Title className="text-center">Frontend</Card.Title>
                <hr />
                <Card.Text className="d-flex flex-column">
                  {sources.frontend.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillName}${index}`}>
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style"
                      ></Image>{" "}
                      {skill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Backend */}
          <Col md={4}>
            <Card className="focus">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Backend
                </Card.Title>
                <hr />
                <Card.Text className="d-flex flex-column">
                  {sources.backend.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillName}${index}`}>
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style"
                      ></Image>{" "}
                      {skill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Hosting Platforms */}
            <Card className="focus m-2">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Hosting Platforms
                </Card.Title>
                <hr />
                <Card.Text className="d-flex flex-column">
                  {sources.hostingPlatforms.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillName}${index}`}>
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style"
                      ></Image>{" "}
                      {skill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus m-2">
              <Card.Body>
                <Card.Title className="text-center card-title">
                  Version Control
                </Card.Title>
                <hr />
                <Card.Text className="d-flex flex-column">
                  <span className="p-2">
                    <Image
                      src={sources.versionControl[0].imgSrc}
                      alt={sources.versionControl[0].imgAltText}
                      rounded
                      className="image-style"
                    ></Image>{" "}
                    {sources.versionControl[0].skillName}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus m-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Programming Languages
                </Card.Title>
                <hr />
                <Card.Text className="d-flex flex-column">
                  {sources.programmingLanguages.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillName}${index}`}>
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style"
                      ></Image>{" "}
                      {skill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus m-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">
                  Database
                </Card.Title>
                <hr />
                <Card.Text className="card-text d-flex flex-column">
                  {sources.databases.map((skill, index) => (
                    <span className="p-2" key={`${skill.skillName}${index}`}>
                      <Image
                        src={skill.imgSrc}
                        alt={skill.imgAltText}
                        rounded
                        className="image-style"
                      ></Image>{" "}
                      {skill.skillName}
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
};

export default Skills;
