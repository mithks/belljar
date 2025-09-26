import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Contact() {
  return (
    <div className="App">
      {/* Main Content */}
      <main className="page-content">
        <div className="content-container">
          <h1 className="page-title">Contact Us</h1>
          
          <div className="contact-info">
            <div className="contact-section">
              <h2>Visit Us</h2>
              <div className="contact-details">
                <p><strong>Address:</strong></p>
                <p>123 Coffee Street<br />
                Downtown District<br />
                City, State 12345</p>
              </div>
            </div>

            <div className="contact-section">
              <h2>Hours</h2>
              <div className="contact-details">
                <p><strong>Monday - Friday:</strong> 6:00 AM - 8:00 PM</p>
                <p><strong>Saturday:</strong> 7:00 AM - 9:00 PM</p>
                <p><strong>Sunday:</strong> 8:00 AM - 6:00 PM</p>
              </div>
            </div>

            <div className="contact-section">
              <h2>Get in Touch</h2>
              <div className="contact-details">
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> hello@belljar.com</p>
                <p><strong>Instagram:</strong> @belljar_coffee</p>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact
