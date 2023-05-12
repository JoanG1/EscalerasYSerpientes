import './ColorMatrix.css'
import React from 'react';


const ColorMatrix = React.memo((props) => {
    const rows = 10;
    const columns = 10;
  
    // Generar la matriz de colores
    const matrix = [];
  
    for (let i = 0; i < rows; i++) {
      const row = [];
  
      for (let j = 0; j < columns; j++) {
        // Generar un color aleatorio (puedes ajustar esto según tus necesidades)
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
  
        // Agregar el color a la fila
        row.push(
          <div
            key={`${i}-${j}`}
            className="color-cell"
            style={{ backgroundColor: color }}
          />
        );
      }
  
      // Agregar la fila a la matriz
      matrix.push(
        <div key={i} className="color-row">
          {row}
        </div>
      );
    }
  
    return <div className="color-matrix">{matrix}</div>
});

export default ColorMatrix