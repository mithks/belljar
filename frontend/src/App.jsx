import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Drinks from './pages/Drinks'
import Authors from './pages/Authors'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <section id="about"><About embedded /></section>
              <section id="menu"><Menu /></section>
              <section id="drinks"><Drinks /></section>
              <section id="authors"><Authors /></section>
              <section id="contact"><Contact /></section>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
