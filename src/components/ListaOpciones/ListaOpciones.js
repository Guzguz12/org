//css
import "./ListaOpciones.css"
const ListaOpciones = (props) =>{
    //metodo map para recorrar el array
  
    //actualizar el state con esta funcion
    const manejarCambio = (e) => {
        props.actualizarEquipo(e.target.value)
    }
    //mapear el array
    return <div className="lista-opciones">
            <label> Equipos </label>
            <select value={props.valor} onChange={manejarCambio} required={props.required}>
                <option value="" disabled defaultValue="" hidden>  Seleccionar Equipo</option>
                 {/* Mapear el array
                 Guardar valor y index */}
               {props.equipos.map(
                (equipo,index) =>{
                    /* retornar la opcion con una llave que recibe el valor unico
                osea el index y mostrar el valor que se asocia */
                    return <option key={index} value={equipo}  >{equipo} </option>
                }
                )}
            </select>
        </div>
   
}
export default ListaOpciones