import './ColorMatrix.css'
import "./Escalera.css"
import './Serpiente.css'
import React, { useState } from 'react';
import Escalera from "./Escalera"
import Serpiente from './serpiente';


const ColorMatrix = React.memo((props) => {
    
    const rows = 10;
    const columns = 10;
  
    const matrix = []

    const TurnoColor = () => {

      if (props.turno == false){

        return "#C8D5B9"
      }else{

        return "#000000"
      }


    }

    console.log (TurnoColor())

  
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
              style={{ backgroundColor: TurnoColor(), border: "1px solid #000000"}}>
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
              style={{ backgroundColor: TurnoColor(), border: "1px solid #000000"}}>
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

    return (
    <div className="color-matrix" style={{ borderRadius:"5px"}}>
      {matrix}
      <Escalera className= "escalera1" escaleraTop = "escaleraTop1"/>
      <Escalera className= "escalera2" escaleraTop = "escaleraTop2"/>
      <Escalera className= "escalera6" escaleraTop = "escaleraTop6"/>
      <Escalera className= "escalera7" escaleraTop = "escaleraTop7"/>
      <Escalera className= "escalera8" escaleraTop = "escaleraTop8"/>
      <Escalera className= "escalera9" escaleraTop = "escaleraTop9"/>
      <Escalera className= "escalera10" escaleraTop = "escaleraTop10"/>

      <Serpiente className="serpiente1" serpienteTop = "serpienteTop1"/>
      <Serpiente className="serpiente2" serpienteTop = "serpienteTop2"/>
      <Escalera className= "escalera3" escaleraTop = "escaleraTop3"/>
      <Serpiente className="serpiente3" serpienteTop = "serpienteTop3"/>
      <Serpiente className="serpiente4" serpienteTop = "serpienteTop4"/>
      <Serpiente className="serpiente5" serpienteTop = "serpienteTop5"/>
      <Serpiente className="serpiente6" serpienteTop = "serpienteTop6"/>
      <Escalera className= "escalera4" escaleraTop = "escaleraTop4"/>
      <Serpiente className="serpiente7" serpienteTop = "serpienteTop7"/> 
      <Escalera className= "escalera5" escaleraTop = "escaleraTop5"/> 
      <Serpiente className="serpiente8" serpienteTop = "serpienteTop8"/> 
      <Serpiente className="serpiente8" serpienteTop = "serpienteTop8"/>
      <Serpiente className="serpiente9" serpienteTop = "serpienteTop9"/> 
      
      
      
    </div>
    )
});



export default ColorMatrix