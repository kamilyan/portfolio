import React from 'react'
import { scroller } from 'react-scroll'

import { Navbar, Nav } from 'react-bootstrap'
import Logo from '../../assets/icons/Logo.png'

import './myNavbar.css'

const MyNavbar = () => {
  return (
    <>
      <Navbar
        fixed='top'
        collapseOnSelect
        expand='md'
        bg='dark'
        variant='dark'
        className='animate-navbar nav-theme justify-content-between'>
        <Navbar.Brand href='#home'>
          <img className='logo' src={Logo} alt='Porfolio Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('about', {
                  smooth: true,
                  offset: -70,
                  duration: 200,
                })
              }>
              About
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('skills', {
                  smooth: true,
                  offset: -70,
                  duration: 200,
                })
              }>
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('projects', {
                  smooth: true,
                  offset: -70,
                  duration: 200,
                })
              }>
              Projects
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                scroller.scrollTo('contact', {
                  smooth: true,
                  offset: 100,
                  duration: 500,
                })
              }>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      )
    </>
  )
}

export default MyNavbar
