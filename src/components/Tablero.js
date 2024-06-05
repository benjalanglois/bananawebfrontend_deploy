import React, { useState } from 'react';
import '../styles/App.css';

const Matrix = () => {
  const createInitialMatrix = () => {
    const matrix = Array(10).fill(null).map(() => Array(10).fill(false));
    matrix[9][0] = true;
    return matrix;
  };

  const [matrix, setMatrix] = useState(createInitialMatrix);
  const [position, setPosition] = useState({ row: 9, col: 0 });

  const moveImage = () => {
    let { row, col } = position;
    col += 1;

    if (col > 9) {
      col = 0;
      row -= 1;
    }

    if (row < 0) {
      row = 9;
    }

    if (row === 0 && col === 9) {
      alert('SIUUUUUU! Eres la banana ganadora!');
    }

    const newMatrix = Array(10).fill(null).map(() => Array(10).fill(false));
    newMatrix[row][col] = true;

    setMatrix(newMatrix);
    setPosition({ row, col });
  };

  return (
    <div>
      <div className="matrix">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((cell, colIndex) => (
              <div key={colIndex} className="matrix-cell">
                {cell && <img src="../banana.png" alt="moving" />}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={moveImage}>Move</button>
      </div>
    </div>
  );
};

export default Matrix;
