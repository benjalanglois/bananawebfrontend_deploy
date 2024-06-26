// src/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to WizzardRush</h1>
      </header>
      <div className="content">
        <h2>WizzardRush: Un juego mágico de escaleras y toboganes</h2>
        <p>Embárcate en una aventura mágica con WizzardRush, donde los hechiceros se enfrentan a emocionantes desafíos en un reino lleno de enormes escaleras y toboganes encantados. Usa tus poderes mágicos para superar obstáculos, enfrentar criaturas mágicas y competir con otros magos en esta carrera llena de hechizos y sorpresas. ¡Sube por las escaleras y deslízate por los toboganes mientras desatas tu poder para convertirte en el maestro de WizzardRush!</p>
        <div className="buttons">
          <Link to="/login" className="button">Login</Link>
          <Link to="/register" className="button">Register</Link>
          <Link to="/about" className="button">About Us</Link>
          <Link to="/rules" className="button">Reglas del Juego</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
