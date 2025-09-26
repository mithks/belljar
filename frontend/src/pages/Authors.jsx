import React from 'react';
import '../App.css';

const authors = [
  { name: 'Virginia Woolf', normalImage: '/assets/virginia.png', hoverImage: '/assets/virginia_h.png' },
  { name: 'Albert Camus', normalImage: '/assets/camus.png', hoverImage: '/assets/camus_h.png' },
  { name: 'Fyodor Dostoevsky', normalImage: '/assets/dostoevsky.png', hoverImage: '/assets/dostoevsky_h.png' },
  { name: 'Sylvia Plath', normalImage: '/assets/sylvia.png', hoverImage: '/assets/sylvia_h.png' },
  { name: 'Oscar Wilde', normalImage: '/assets/wilde.png', hoverImage: '/assets/wilde_h.png' },
];

function Authors() {
  return (
    <div className="App authors-page-container">
      <main className="page-content authors-page-content">
        <div className="bookshelf-section">
          <img src="/assets/bookshelf.png" alt="Bookshelf" className="bookshelf-svg" />
          <h2 className="authors-title">From our bookshelf.</h2>
        </div>

        <div className="authors-list">
          {authors.map((author, index) => (
            <div className="author-item" key={index}>
              {/* --- Add this line back in --- */}
              <span className="author-name">{author.name}</span>

              {/* Normal image */}
              <img src={author.normalImage} alt={author.name} className="author-image normal" />
              {/* Hover image */}
              <img src={author.hoverImage} alt={`${author.name} hover`} className="author-image hover" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Authors;