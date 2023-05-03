import "./equipo.css"
import hexToRgba from 'hex-to-rgba';
/*componente colaborador */
import Colaborador from "../Colaborador/colaborador"
const Equipo = (props) =>{
    //destructurar el props
    const {nuevoColab,eliminarColaborador,actualizarColor,like} = props
    const {colorSecundario,colorPrimario,titulo, identificador }= props.datos
  
    //en el style se abren  dos llaves y se pone el atributo {{}}

     //validar que contenga colaboradores para mostrar el section
     //condicion && seMuestra 
    return <> {  nuevoColab.length > 0 && <section className="equipo" style={{ backgroundColor: hexToRgba(colorPrimario,0.6)}}>
        <input
            type='color'
            className="input-color"
            value={colorPrimario}
            //cuando cambie haga la function el evento guardo el valor del objeto
            onChange={(evento)=>{
                //llamamos la funcion cambiar color y le enviamos el valor que tiene el input y su titulo
                actualizarColor(evento.target.value,identificador)
            }}
        ></input>
        <h3 style={{ borderColor: colorPrimario}}>{titulo}</h3>
        <div className="colaboradores">
            
            {
                nuevoColab.map((colaboradorResult,index)=><Colaborador 
                key ={index}
                datosColab={colaboradorResult}
                color={colorPrimario}
                identificador={identificador}
                eliminarColaborador={eliminarColaborador}
                like={like}
                />)
            }
        </div>
    </section>}</>
}
export default Equipo