import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorMatrix from './components/ColorMatrix';

const App = () => {
  const [playerPosition, setPlayerPosition] = useState(0)
  const [diceResult , setDiceResult] = useState(0)

  // Función para lanzar el dado y actualizar la posición del jugador
  const rollDice = () => {
    const diceResult = Math.floor(Math.random() * 6) + 1; // Lanzamiento de un dado de 6 caras
    setDiceResult(diceResult)
    const newPosition = playerPosition + diceResult
    setPlayerPosition(newPosition)
  };

  const reset = () => {

    setDiceResult(0)
    setPlayerPosition(0)

  }

  return (
    <div className='PrincipalDiv'>

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

      <ColorMatrix />

      </div>
    
      
    </div>
  );
}

export default App
