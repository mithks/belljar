import React from 'react';
import '../App.css';
import useIntersectionObserver from '../useIntersectionObserver'; // 1. Import the hook

function Drinks({ embedded = false }) {
  // 2. Setup the observer for the drinks grid
  const [gridRef, isVisible] = useIntersectionObserver({
    threshold: 0.3, // Trigger when 30% is visible
  });

  return (
    <main className="page-content drinks-page-content">
      <div className="coffee-machine-section">
        <img src="/assets/coffee_machine.svg" alt="Coffee Machine" className="coffee-machine-svg" />
      </div>

      {/* 3. Attach the ref and add the conditional 'is-visible' class */}
      <div 
        className={`drinks-menu-grid ${isVisible ? 'is-visible' : ''}`}
        ref={gridRef}
      >
        {/* SVG lines */}
        <img src="/assets/dline1.svg" alt="Line for Espresso" id="dline1" className="drink-line" />
        <img src="/assets/dline2.svg" alt="Line for Cappuccino" id="dline2" className="drink-line" />
        <img src="/assets/dline3.svg" alt="Line for Latte" id="dline3" className="drink-line" />
        <img src="/assets/dline4.svg" alt="Line for Mocha" id="dline4" className="drink-line" />

        {/* Drink Items */}
        <div className="drink-item drink-espresso">
          <img src="/assets/espresso.svg" alt="Espresso" className="drink-svg" />
          <span className="drink-name">espresso</span>
        </div>
        <div className="drink-item drink-cappuccino">
          <img src="/assets/cappuccino.svg" alt="Cappuccino" className="drink-svg" />
          <span className="drink-name">cappuccino</span>
        </div>
        <div className="drink-item drink-latte">
          <img src="/assets/latte.svg" alt="Latte" className="drink-svg" />
          <span className="drink-name">latte</span>
        </div>
        <div className="drink-item drink-mocha">
          <img src="/assets/mocha.svg" alt="Mocha" className="drink-svg" />
          <span className="drink-name">mocha</span>
        </div>
      </div>
    </main>
  );
}

export default Drinks;