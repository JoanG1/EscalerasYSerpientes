import React, { useState } from 'react';
import "./SeleccionMultiple.css"


const CartaSeleccionMultiple = (props) => {

  const [respuesta, setRespuesta] = useState('');
  

  const handleRespuesta = (opcion) => {
    setRespuesta(opcion);
  };

  const CompararRespuesta = () =>{
    if (respuesta === props.respuestaC){

      props.handlePosition(true)
      console.log("correcta")
        
    }else{
      console.log("falsa")
    }
  }


  return (
    <div>
        <button style={{padding: "8px", marginTop: "20px"}} type="button" onClick={() => handleRespuesta(props.respuestaC)}>
        {props.respuestaC}
        </button>
        <br/>
        <button style={{padding: "8px", marginTop: "20px"}} type="button" onClick={() => handleRespuesta(props.respuestaI1)}>
        {props.respuestaI1}
        </button>
        <br/>
        <button style={{padding: "8px", marginTop: "20px"}} type="button" onClick={() => handleRespuesta(props.respuestaI2)}>
        {props.respuestaI2}
        </button>
        <br/>
        <button style={{padding: "8px", marginTop: "20px", backgroundColor: "gray", color: 'white'}} type="button" onClick={CompararRespuesta} >
        Vamos!!!
        </button>
    </div>
  );
};

export default CartaSeleccionMultiple;