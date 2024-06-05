// src/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/App.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to My App</h1>
      </header>
      <div className="content">
        <h2>Banana web</h2>
        <p>Nuestra página de bananas</p>
        <div className="buttons">
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
