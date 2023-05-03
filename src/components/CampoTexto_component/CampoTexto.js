import "./CampoTexto.css"
const CampoTexto =(props) => {


    //destructuracion
    //si type == undefine , lo definimos como text
    const{type="text"}= props

    //funcion que cambia el valor del state 
    //en los props viene el state valor y actualizarValor
    const Cambio = (e) =>{
        props.actualizarValor(e.target.value)
    }
    return(
        //siempre tendra la clase campo pero tambien la clase campo color, o la que tenga el type
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
            placeholder={props.placeHolder} 
            required={props.required}
            value={props.valor}
            onChange={Cambio}
            type={type}
            ></input>
        </div>
    );
};

export default CampoTexto