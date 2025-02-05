import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <main className="hero">
      <div className="content">
        <h1>
          Revolutionize Learning with <span className="highlight">QuizzTBPP</span>
        </h1>
        <p>Your next-level quiz companion for brilliant learners and educators.</p>
        <div className="cta">
          <button className="signup">Sign Up For Free</button>
          <a href="#know-more" className="know-more">know more</a>
        </div>
      </div>
      <div className="image">
        <img
          src="https://img.freepik.com/free-vector/flat-illustration-people-asking-questions_23-2148919347.jpg"
          alt="Quiz illustration"
        />
      </div>
    </main>
  );
}

export default HeroSection;
