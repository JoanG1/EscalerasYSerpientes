import { useState,memo } from 'react'
import './App.css'
import ColorMatrix from './components/ColorMatrix';
import OverlayCard from './components/CartaPregunta';
import PanelRegistro from './components/PanelRegistro';
import Contador from './components/Contador';
//import bandera from "./components/SeleccionMultiple"


const App = () => {


  const [playerPosition, setPlayerPosition] = useState(0)
  const [diceResult , setDiceResult] = useState(0)
  const [Jugador1, setJugador1] = useState("")
  const [Jugador2, setJugador2] = useState("")
  const [flagRegistro, setFlagRegistro] = useState(false)
  const [Contador1 , setContador1] = useState(0)
  const [Contador2 , setContador2] = useState(0)
  const [turno , setTurno] = useState(false)
  

  // Función para lanzar el dado y actualizar la posición del jugador
  const rollDice = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Lanzamiento de un dado de 6 caras
    setDiceResult(diceResult)
    if(playerPosition + diceResult <= 99 ){
      const newPosition = playerPosition + diceResult
      setPlayerPosition(newPosition)
      if(turno)setTurno(false)
      if(!turno)setTurno(true)
      console.log(turno)
    }

    if(playerPosition == 99){

      setContador1(Contador1 +1)
      setPlayerPosition(0)
    }
    
  };

  const reset = () => {

    window.location.reload()

  }

  const handleNewPosition = (position) => {

    setPlayerPosition(position)
  }

  const handleNewNombres = (Jugador1,Jugador2) => {

    if (Jugador1 === "julieth"){
      setJugador1("MOCOSA")
      setJugador2(Jugador2)
    }else{

      setJugador1(Jugador1)
      setJugador2(Jugador2)

    }
  
  }

  const handleNewFlag = () => {
    setFlagRegistro(true)
  }

 
  return (
    <div className='PrincipalDiv'>

      <OverlayCard position= {playerPosition} handleNewPosition = {handleNewPosition} />    
      <Contador puntajeJugador1={Contador1} puntajeJugador2={Contador2} nombreJugador1 = {Jugador1} nombreJugador2 = {Jugador2} />

      <div className='DivRollDice'>

        <div>

          <h1>Escaleras y Serpientes</h1>
          <p>Posición del jugador: {playerPosition}</p>
          <p>Dado: {diceResult}</p>
          {flagRegistro ?<button onClick={rollDice}>Lanzar dado</button>: null }
          <button onClick={reset}>Reset</button>
          

        </div>

      </div>
      
      <div className='DivMatrix'>

      <ColorMatrix position = {playerPosition} turno = {turno}/>

      </div>

      {flagRegistro ? null : <PanelRegistro handleNewNombres={handleNewNombres} handleNewFlag ={handleNewFlag}/> }
    
      
    </div>
  );
}

export default App
