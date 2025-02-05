import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="quiz">Quiz</span>
        <span className="tbpp">TBPP</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="enter-code">Enter Code</button>
        <button className="login">Login</button>
      </div>
    </header>
  );
}

export default Header;
