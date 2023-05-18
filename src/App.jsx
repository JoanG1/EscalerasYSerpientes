import { useState,memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorMatrix from './components/ColorMatrix';
import OverlayCard from './components/CartaPregunta';
//import bandera from "./components/SeleccionMultiple"


const App = () => {


  const [playerPosition, setPlayerPosition] = useState(0)
  const [diceResult , setDiceResult] = useState(0)

  // Función para lanzar el dado y actualizar la posición del jugador
  const rollDice = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Lanzamiento de un dado de 6 caras
    setDiceResult(diceResult)
    if(playerPosition + diceResult <= 99 ){
      const newPosition = playerPosition + diceResult
      setPlayerPosition(newPosition)
    }
    
  };


  const reset = () => {

    window.location.reload()

  }

  const handleNewPosition = (position) => {

    setPlayerPosition(position)
  }

  return (
    <div className='PrincipalDiv'>

      <OverlayCard position= {playerPosition} handleNewPosition = {handleNewPosition} />

      <div className='DivRollDice'>

        <div>

          <h1>Escaleras y Serpientes</h1>
          <p>Posición del jugador: {playerPosition}</p>
          <p>Dado: {diceResult}</p>
          <button onClick={rollDice}>Lanzar dado</button>
          <button onClick={reset}>Reset</button>
          

        </div>

      </div>
      
      <div className='DivMatrix'>

      <ColorMatrix position = {playerPosition}/>

      </div>
    
      
    </div>
  );
}

export default App
