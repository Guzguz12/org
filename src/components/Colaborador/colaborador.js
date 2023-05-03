import "./colaborador.css"
//libreria que obtiene los iconos
import {AiFillCloseCircle,AiOutlineHeart,AiFillHeart} from "react-icons/ai"
const Colaborador = (props) =>{
    //desfracmentar el props
    const {Nombre,Puesto,Foto,identificador,fav} = props.datosColab
    const {eliminarColaborador,like} = props
    return <div className="colaborador">
        {/*Llamar a la funcion eliminar colaborador que viene de app.js */}
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(identificador)}/>
        <div className="encabezado" style={{backgroundColor:props.color}}>
            <img src={Foto} alt="foto"></img>
        </div>
        <div className="info">
            <h4>{Nombre}</h4>
            <h5>{Puesto}</h5>
            
            {fav?<AiFillHeart color="red" onClick={()=>like(identificador)} ></AiFillHeart>:<AiOutlineHeart onClick={()=>like(identificador)}></AiOutlineHeart> }
            
            

        </div>
    </div>
}
export default Colaborador