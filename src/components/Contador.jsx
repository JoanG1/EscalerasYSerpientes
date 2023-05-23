import { useState } from "react";
import "./Contador.css"

const Contador = ({puntajeJugador1, puntajeJugador2, nombreJugador1, nombreJugador2}) => {

    return(
        <div className="Puntajes">
            <div style={{margin: "0px 20px 0px 0px"}}><h3>{nombreJugador1}</h3></div>
            <div className="puntaje1">
                <div><h3>{puntajeJugador1}</h3></div>
            </div>
            <div className="puntaje2">
                <div><h3>{puntajeJugador2}</h3></div>
            </div>
            <div style={{margin: "0px 0px 0px 20px"}}><h3>{nombreJugador2}</h3></div>
            
        </div>
    )
}

export default Contador