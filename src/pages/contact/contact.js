import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, Form } from 'react-bootstrap'
import './contact.css'
class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
  handleSubmit(e) {
    e.preventDefault()
    const { email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'maorkamilyan@gmail.com',
      subject: subject,
      message_html: message,
    }
    emailjs.send(
      'gmail',
      'template_j0h9wfw',
      templateParams,
      'user_tosK8p7cQptxXwvfVFCtN'
    )
    this.resetForm()
  }
  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  render() {
    return (
      <div id='contact' className='contactForm'>
        <h1 className='headding1'>Get in Touch</h1>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              value={this.state.email}
              className='text-primary'
              onChange={this.handleChange.bind(this, 'email')}
              placeholder='Enter email'
            />
          </Form.Group>
          <Form.Group controlId='formBasicName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={this.state.name}
              className='text-primary'
              onChange={this.handleChange.bind(this, 'name')}
              placeholder='Name'
            />
          </Form.Group>
          <Form.Group controlId='formBasicSubject'>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type='text'
              name='subject'
              className='text-primary'
              value={this.state.subject}
              onChange={this.handleChange.bind(this, 'subject')}
              placeholder='Subject'
            />
          </Form.Group>
          <Form.Group controlId='formBasicMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='message'
              className='text-primary'
              value={this.state.message}
              onChange={this.handleChange.bind(this, 'message')}
            />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}
export default Contact
