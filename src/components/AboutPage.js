import React from 'react';
import '../styles/App.css'; 
function AboutPage() {
  return (
    <div className="landing-page"> {/* Cambia la clase a "landing-page" si quieres usar esos estilos */}
      <header className="header">
        <h1>About Us</h1>
      </header>
      <div className="content"> {/* Cambia la clase a "content" para usar esos estilos */}
        <h2>Nuestro Equipo</h2>
        <p>
          Conoce a las personas detrás de WizzardRush, el emocionante juego de
          escaleras y toboganes mágicos.
        </p>
        <div className="user-info">
          <h3>Juan Pablo Gelmi</h3>
          <p>Email: jpgelmi@uc.cl</p>
          <h3>Sebastian Allende</h3>
          <p>Email: sallenda@uc.cl</p>
          <h3>Benjamin Langlois</h3>
          <p>Email: benjamin.langlois@uc.cl</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
