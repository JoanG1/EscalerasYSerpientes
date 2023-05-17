
import Image from "./escalera2.png"

const escalera = (props) => {

    

    return (
        <div className={props.className}>
            <img className={props.escaleraTop} src={Image} alt="escalera" />
        </div>
    )
}

export default escalera