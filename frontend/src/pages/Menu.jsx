import React from 'react';
import '../App.css';
import useIntersectionObserver from '../useIntersectionObserver'; // Import the hook

function Menu() {
  // Setup the observer. It will return the ref and a boolean for visibility.
  const [containerRef, isVisible] = useIntersectionObserver({
    threshold: 0.3 // Trigger when 30% of the element is visible
  });

  return (
    <div className="App menu-page-app-container">
      <main className="page-content menu-page-content">
        <div className="menu-text-section">
          <p>
            We believe that a good cup of coffee and a
            well-made plate of food can be a quiet
            companion to a moment of pause. Here, time
            slows down. Each item on our menu is
            prepared with care and intention, designed to
            nourish your body and comfort your mind. We
            invite you to settle in, savour this chapter of
            your day, and enjoy your time under glass.
          </p>
        </div>

        {/* Attach the ref here. 
          Conditionally add the 'is-visible' class based on the hook's return value.
        */}
        <div 
          className={`menu-graphic-section ${isVisible ? 'is-visible' : ''}`} 
          ref={containerRef}
        >
          <img src="/assets/cloth.svg" alt="Napkin" className="animated-svg menu-cloth" />
          <img src="/assets/spoon.svg" alt="Spoon" className="animated-svg menu-spoon" />
          <img src="/assets/fork.svg" alt="Fork" className="animated-svg menu-fork" />
          <img src="/assets/menu.svg" alt="Menu book" className="animated-svg menu-book" />
        </div>
      </main>
    </div>
  );
}

export default Menu;