import React from 'react';
import './style.css';

function MadeWithLove({ by }) {
  return (
    <p className="madewithlove">Made with ❤️ by <span className="blue-text">{by}</span></p>
  );
}

export default MadeWithLove;