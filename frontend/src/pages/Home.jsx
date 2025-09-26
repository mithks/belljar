import React, { useEffect, useRef } from 'react'
import '../App.css'

function Home() {
  const brandRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const aboutEl = document.getElementById('about')
      if (!brandRef.current || !aboutEl) return

      const aboutTopAbs = aboutEl.getBoundingClientRect().top + window.scrollY
      const end = Math.max(aboutTopAbs - 100, 1)
      const t = Math.min(Math.max(window.scrollY / end, 0), 1)

      const startTop = window.innerHeight - (3 * 16) - 96
      const endTop = 24
      const startLeft = 48
      const endLeft = 100
      const top = startTop + (endTop - startTop) * t
      const left = startLeft + (endLeft - startLeft) * t
      const scale = 1 + (0.3333 - 1) * t

      const el = brandRef.current
      el.style.position = 'fixed'
      el.style.top = `${top}px`
      el.style.left = `${left}px`
      el.style.transform = `scale(${scale})`
      el.style.transformOrigin = 'left top'

      // Logo follows (fixed) and eases slightly downward
      if (logoRef.current) {
        const logoStartTop = 24 // px
        const logoEndTop = 24 // px when reaching about section
        const logoTop = logoStartTop + (logoEndTop - logoStartTop) * t
        const sway = Math.sin(window.scrollY / 250) * 1.5 // tiny sway
        const logo = logoRef.current
        logo.style.position = 'fixed'
        logo.style.top = `${logoTop}px`
        logo.style.left = '48px'
        logo.style.transform = `translateY(${sway}px) rotate(${sway * 0.05}deg)`
        logo.style.transformOrigin = 'left top'
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="App" id="home">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-left">
          <img ref={logoRef} src="/assets/logo.svg" alt="Bell Jar Logo" className="logo" />
        </div>
        <div className="nav-right">
          <a href="#about" className="nav-link">about</a>
          <a href="#menu" className="nav-link">menu</a>
          <a href="#contact" className="nav-link">contact</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Coffee Animation */}
        <div className="coffee-container">
          <img 
            src="/assets/coffee.svg" 
            alt="Coffee Stream" 
            className="coffee-stream" 
          />
          <img 
            src="/assets/cup.svg" 
            alt="Coffee Cup" 
            className="coffee-cup" 
          />
        </div>

        {/* Brand Name */}
        <div className="brand-name" ref={brandRef}>
          <h1>bell jar.</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
