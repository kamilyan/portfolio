import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import Profile from '../../assets/img/profile/profile.webp'
import './about.css'

const About = () => {
  return (
    <div id='about'>
      <h1 className='pt-3 text-center pb-3'>About Me</h1>
      <Container>
        <Row className='jutify-content-center mb-2 mr-2'>
          <Col xs={12} md={6}>
            <Row>
              <Image
                className='profile justify-content-end'
                src={Profile}
                thumbnail
                fluid
              />
            </Row>
          </Col>
          <Col xs={12} md={6}>
            <Row className='align-items-start p-2 my-details'>
              <p>
                Hi there! I am <strong>&nbsp; Maor Kamilyan </strong>
              </p>
              <p>
                I'm a fast learner and strive for excellence.
                <br />
                In 2020, I successfully completed my Computer Science.
                <br />
                I'm highly motivated, always curious to solve problems, expand
                my knowledge, and would be proud to be part of a development
                team where I will take advantage of all my abilities to the
                fullest.
              </p>
            </Row>
            <Row>
              <Col className='d-flex justify-content-center flex-wrap'>
                <div>
                  <a href='#contact'>
                    <Button className='m-2' variant='outline-primary'>
                      Let's talk
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href='https://drive.google.com/file/d/1OspvXxgraoWnCBEC6o4dhrAt3mRCpdpI/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'>
                    <Button className='m-2' variant='outline-success'>
                      My Resume
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href='https://github.com/kamilyan'
                    target='_blank'
                    rel='noreferrer'>
                    <Button className='m-2' variant='outline-dark'>
                      GitHub
                    </Button>
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/in/maor-kamilyan/'
                    target='_blank'
                    rel='noreferrer'>
                    <Button className='m-2' variant='outline-info'>
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
  )
}

export default About
