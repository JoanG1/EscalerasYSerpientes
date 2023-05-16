import React, { useState } from 'react';
import "./CartaPregunta.css"
import preguntasData from "./Preguntas.json"
import casillasPreguntas from "./CasillasPreguntas.json"

let contador = 0

const OverlayCard = React.memo((props) => {

  const resultado = casillasPreguntas.casillas.find((elemento)=>elemento === props.position)
  
  if (resultado){

    const pregunta = preguntasData.preguntas[contador]
    contador++

    return (
      <div className='cartaPregunta'>
        {pregunta.texto}  
      </div>
    );


  }else{

    return (
      <div className='cartaPregunta'>
          no hay pregunta, continue!!!
      </div>
    );

  }
})

export default OverlayCard;