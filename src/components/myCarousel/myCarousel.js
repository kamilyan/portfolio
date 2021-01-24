import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './myCarousel.css'

import ScrollDown from './scrollDown'

const MyCarousel = () => {
  return (
    <div id='home'>
      <Carousel controls={false} interval={2000} pause={false}>
        <Carousel.Item>
          <img
            className='d-block custom-img'
            src='https://images.unsplash.com/photo-1483356256511-b48749959172?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block custom-img'
            src='https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
            alt='Third slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block custom-img'
            src='https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80'
            alt='Third slide'
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  )
}

export default MyCarousel
