// src/Home.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css'; // Assuming you have the central styles file

function Home() {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/tablero');
  };

  return (
    <div className="home-container">
      <h2>Home</h2>
      <button className="button" onClick={handlePlayClick}>Jugar</button>
    </div>
  );
}

export default Home;
