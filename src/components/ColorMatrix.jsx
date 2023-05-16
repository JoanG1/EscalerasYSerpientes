import './ColorMatrix.css'
import React, { useState } from 'react';



const ColorMatrix = React.memo((props) => {
    
    const rows = 10;
    const columns = 10;

    console.log(props.Dado)
  
    // Generar la matriz de colores
    const matrix = []

  
    for (let raw = rows-1; raw >= 0; raw--) {
      const row = [];

      if(raw % 2 === 0){

        for ( let column = columns - 1; column >= 0; column--) {


          if(props.position == (raw*10)+column){

            row.push(
              <div 
              position={(raw*10)+column}
              key={`${raw}-${column}`}
              className="color-cell"
              style={{ backgroundColor: "#C8D5B9", border: "1px solid #000000"}}>
              {(raw*10)+column}
              </div>
            );
  
  
          }
          else{
          row.push(
            <div 
            position={(raw*10)+column}
            key={`${raw}-${column}`}
            className="color-cell"
            style={{ backgroundColor: "#FAF3DD", border: "1px solid #000000", borderRadius:"5px"}}>
            {(raw*10)+column}
            </div>
          );
          }
          
        }
      }else{

        for (let column = 0; column < columns; column++) {


          if(props.position == (raw*10)+column){

            row.push(
              <div 
              position={(raw*10)+column}
              key={`${raw}-${column}`}
              className="color-cell"
              style={{ backgroundColor: "#C8D5B9", border: "1px solid #000000"}}>
              {(raw*10)+column}
              </div>
            );
  
  
          }else{
          row.push(
            <div 
            position={(raw*10)+column}
            key={`${raw}-${column}`}
            className="color-cell"
            style={{ backgroundColor: "#FAF3DD", border: "1px solid #000000", borderRadius:"5px"}}>
            {(raw*10)+column}
            </div>
          );
          }
          
        }
      }
  
      // Agregar la fila a la matriz
      matrix.push(
        <div key={raw} className="color-row">
          {row}
        </div>
      );
    }



    

    console.log(matrix)
    console.log(ColorMatrix)

    return <div className="color-matrix" style={{ borderRadius:"5px"}}>{matrix}</div>
});



export default ColorMatrix