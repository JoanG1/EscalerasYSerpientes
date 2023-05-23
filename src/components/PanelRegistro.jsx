import { useState,memo } from "react";
import "./PanelRegistro.css"

const PanelRegistro = (props) => {

    const [Jugador1, setJugador1] = useState("")
    const [Jugador2, setJugador2] = useState("")

    const handlename = () => {

        props.handleNewNombres(Jugador1, Jugador2)

        if(Jugador1 !== "" && Jugador2 !== ""){

            props.handleNewFlag(true)
        }else{

            console.log("Ponga Nombres asquerosa")
        }
    }



    return (

        <div className="PanelRegistro">
            <input className="Input1" type="text" placeholder="Nombre #1" value={Jugador1} onChange={(e) => setJugador1(e.target.value)} required></input>
            <br/>
            <input className="Input2" type="text" placeholder="Nombre #2" value={Jugador2} onChange={(e) => setJugador2(e.target.value)} required></input>
            <br/>
            <button onClick={handlename} style={{backgroundColor: "lightgray"}} >Registrar</button>
        </div>
    )


}

export default PanelRegistro