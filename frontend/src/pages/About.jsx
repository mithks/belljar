import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function About({ embedded = false }) {
  const Wrapper = embedded ? 'section' : 'div'
  return (
    <Wrapper className={embedded ? 'about-page embedded' : 'App about-page'} id={embedded ? 'about' : undefined}>
      {!embedded && (
        <nav className="navbar">
          <div className="nav-left">
            {/* logo/brand removed on non-home pages */}
          </div>
          <div className="nav-right">
            <Link to="/about" className="nav-link active">about</Link>
            <Link to="/menu" className="nav-link">menu</Link>
            <Link to="/contact" className="nav-link">contact</Link>
          </div>
        </nav>
      )}

      <main className="page-content">
        {/* Decorative svgs */}
        <img src="/assets/about_curve.svg" alt="Decorative curve" className="about-curve sway" />
        <img src="/assets/curtain.svg" alt="Curtain" className="about-curtain sway" />
        <div className="content-container">          
          <div className="content-section">
            <p className="content-text about-text">
            Our story began with a simple love for two things: the aroma of freshly brewed coffee and the quiet magic of a good book. Our founder wanted to create a space where those two joys could meet—a cozy corner for you to escape, relax, and reconnect. We meticulously source our beans for the best taste and curate our library for the best stories. More than just a shop, this is our passion, and we're so happy to share it with you.
            </p>
            
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default About
