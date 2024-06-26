import React from 'react';
import '../styles/App.css'; 
function AboutPage() {
  return (
    <div className="landing-page"> {/* Cambia la clase a "landing-page" si quieres usar esos estilos */}
      <header className="header">
        <h1>Reglas</h1>
      </header>
      <div className="content"> {/* Cambia la clase a "content" para usar esos estilos */}
        <h2>¿Como se juega wizzard rush?</h2>
        <p>
        El juego consiste en cuatro magos representados por bananas, quienes deben llegar a la meta (casilla número 100) tirando el dado. Durante el juego, los magos encontrarán escaleras que los harán avanzar varias casillas, toboganes que los harán retroceder varias casillas, y poderes con los cuales podrán acelerar su avance, retrasar el de sus enemigos y tener duelos contra sus contrincantes.
        </p>
        
      </div>
    </div>
  );
}

export default AboutPage;
