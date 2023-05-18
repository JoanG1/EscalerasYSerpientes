import React, { useState } from 'react';
import "./CartaPregunta.css"
import preguntasData from "./Preguntas.json"
import casillasPreguntas from "./CasillasPreguntas.json"
import SeleccionMultiple from "./SeleccionMultiple"

let contador = 0

const OverlayCard = React.memo((props) => {

  const resultado = casillasPreguntas.casillas.find((elemento)=>elemento === props.position)

  const handlePosition = (position) => {

    if (position == true){

      const positionRelative = casillasPreguntas.casillas.indexOf(props.position)

      const finalPosition = casillasPreguntas.casillasRespuesta[positionRelative]

      props.handleNewPosition(finalPosition)
    }

  }


  if (resultado){

    const pregunta = preguntasData.preguntas[contador]
    contador++
    const positionRelative = casillasPreguntas.casillas.indexOf(props.position)

    const finalPosition = casillasPreguntas.casillas[positionRelative]

    return (
      <div className='cartaPregunta'>
        <h5>{pregunta.texto}</h5>
        <SeleccionMultiple handlePosition = {handlePosition} respuestaC = {pregunta.respuestaCorrecta} respuestaI1 = {pregunta.respuestaF1} respuestaI2 = {pregunta.respuestaF2}  />
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