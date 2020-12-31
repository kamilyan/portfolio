import React from "react";
import { Accordion, Card, Image } from "react-bootstrap";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import "./projects.css";
import ExpressCinemaProject from "../../assets/img/projects/cinema-management-system.PNG";
import ReactCoronaTracker from "../../assets/img/projects/corona-tracker.PNG";
import ReactTodoList from "../../assets/img/projects/TodoList.PNG";

import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import REACT from "../../assets/img/skills/react.svg";
import NODE_JS from "../../assets/img/skills/nodejs.svg";
import EXPRESS from "../../assets/img/skills/express.svg";
import MATERIAL_UI from "../../assets/img/skills/material-ui.png";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
          <ImageEvent
            date="12/2020"
            className="text-center font-weight-bold cardProject"
            text="React Corona Tracker app"
            src={ReactCoronaTracker}
            alt="React Corona Tracker app"
          >
            <div className="d-flex flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-1 text-center accordian-header"
                    >
                      More Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="text-left font-weight-normal">
                        <strong>Description:</strong> Live statistics that
                        tracking the number of confirmed cases, recovered
                        patients, deaths due to the COVID-19.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>Amount of reconvers and deaths</li>
                          <li>Data visualization</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <Image
                              src={HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </li>
                          <li>
                            <Image
                              src={CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </li>
                          <li>
                            <Image
                              src={REACT}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React
                          </li>
                          <li>
                            <Image
                              src={MATERIAL_UI}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Material-UI
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between">
                <UrlButton
                  href="https://kamilyan.github.io/corona-tracker/"
                  target="_blank"
                >
                  Live Demo
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamilyan/corona-tracker"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="12/2020"
            className="text-center font-weight-bold cardProject"
            text="React ToDoList App"
            src={ReactTodoList}
            alt="React ToDoList App"
          >
            <div className="d-flex flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-1 text-center accordian-header"
                    >
                      More Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="text-left font-weight-normal">
                        <strong>Description:</strong> This is a Todo App created
                        with React that keeps a track of your Todos
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>ADD/DELETE/TOGGLE-COMPLETE/SHOW todos</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <Image
                              src={HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </li>
                          <li>
                            <Image
                              src={CSS3}
                              alt="CSS 3"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            CSS3
                          </li>
                          <li>
                            <Image
                              src={REACT}
                              alt="React"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            React
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between">
                <UrlButton
                  href="https://kamilyan.github.io/TodoList/"
                  target="_blank"
                >
                  Live Demo
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamilyan/TodoList/tree/master"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
          <ImageEvent
            date="10/2020"
            className="text-center font-weight-bold cardProject"
            text="Cinema Management System"
            src={ExpressCinemaProject}
            alt="Cinema Management System"
          >
            <div className="d-flex flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-1 text-center accordian-header"
                    >
                      More Details
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className="text-left font-weight-normal">
                        <strong>Description:</strong> Provides a management
                        system for movies and subscriptions.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>User permissions and authentication</li>
                          <li>CRUD operations for movies and subscriptions</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <Image
                              src={HTML5}
                              alt="HTML 5"
                              rounded
                              className="image-style m-1"
                            ></Image>{" "}
                            HTML5
                          </li>
                          <li>
                            <Image
                              src={BOOTSTRAP}
                              alt="BOOTSTRAP"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Bootstrap
                          </li>
                          <li>
                            <Image
                              src={EXPRESS}
                              alt="EXPRESS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Express
                          </li>
                          <li>
                            <Image
                              src={NODE_JS}
                              alt="NODE_JS"
                              rounded
                              className="image-style1 m-1"
                            ></Image>{" "}
                            Node.JS
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between">
                <UrlButton
                  href="https://cinema-management-sys.herokuapp.com/login"
                  target="_blank"
                >
                  Live Demo
                </UrlButton>
                <UrlButton
                  href="https://github.com/kamilyan/cinema-web-site"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default Projects;
