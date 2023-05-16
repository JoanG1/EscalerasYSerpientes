import './ColorMatrix.css'
import React, { useState } from 'react';



const ColorMatrix = React.memo((props) => {
    
    const rows = 10;
    const columns = 10;
    let contador = 0;

    console.log(props.Dado)
  
    // Generar la matriz de colores
    const matrix = []

  
    for (let i = 0; i < rows; i++) {
      const row = [];
  
      for (let j = 0; j < columns; j++) {
        // Generar un color aleatorio (puedes ajustar esto según tus necesidades)
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)})`;
  
        // Agregar el color a la fila
        contador++

        if(props.position == contador){

          row.push(
            <div 
            position={contador}
            key={`${i}-${j}`}
            className="color-cell"
            style={{ backgroundColor: "red", border: "1px solid #000000"}}>
            {contador}
            </div>
          );


        }else{
        row.push(
          <div 
          position={contador}
          key={`${i}-${j}`}
          className="color-cell"
          style={{ backgroundColor: "white", border: "1px solid #000000"}}>
          {contador}
          </div>
        );
        }

        
      }
  
      // Agregar la fila a la matriz
      matrix.push(
        <div key={i} className="color-row">
          {row}
        </div>
      );
    }

    

    console.log(matrix)
    console.log(ColorMatrix)

    return <div className="color-matrix">{matrix}</div>
});



export default ColorMatrix