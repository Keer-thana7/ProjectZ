import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtext">We'd love to hear from you. Drop us a message below!</p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Type your message here..." />
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;