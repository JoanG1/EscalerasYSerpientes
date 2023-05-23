import Image from "./serpiente.png"

const serpiente = (props) =>  {

    return (
        <div className={props.className}>
            <img className={props.serpienteTop} src={Image} alt="serpiente" />
        </div>
    )
}

export default serpiente