//import HOOKS
import { useState } from "react";
//importar el css
import "./formulario.css"
//importar los inputs
import CampoTexto from "../CampoTexto_component/CampoTexto";
//importar las opciones
import ListaOpciones from "../ListaOpciones/ListaOpciones";
//Importar el boton
import Boton from "../Boton";
//usar el uuid -> identificador unico
import {v4 as uuid} from "uuid"



const Formulario = (props) =>{
   //crear los estados
   //los estados se envian por medio de props del componente
   const [nombre,actualizarNombre]=useState("")
   const [puesto,actualizarPuesto]=useState("")
   const [foto,actualizarFoto]=useState("")
   //estado equipo
   const [equipo,actualizarEquipo]=useState("")
   //state para crear un equipo
   const [titulo,actualizarTitulo] = useState ("")
   const [color, actualizarColor] = useState("")

   //funciona que evitar la recarga de la pagina
   //evento guarda lo que recibe el onSubmit del form
   const manejoEnvio =(event)=>{
      //con prevent Default logro SPA single page aplication
      event.preventDefault();
      //crear objeto cuando se haga el submit del form
      let datosForm = {
         Nombre:nombre,
         Puesto: puesto,
         Foto :foto,
         Equipo:equipo,
         identificador: uuid(),
         fav: true
      }
      //decirle que al props registrarColaborador se le envien el objeto con los datos del form
      props.registrarColaborador(datosForm)
   }
   //funcion que se ejecuta cuando se hace el submit del form
   const manejarNuevoEquipo = (e) =>{
      e.preventDefault()
      props.crearEquipo({titulo,colorPrimario:color})
   }

return (
     <section className="formulario">
      <form onSubmit={manejoEnvio}>
         <h2>Rellena el formulario para crear el colaborador</h2>
         <CampoTexto titulo="Nombre" 
         placeHolder="Ingresa el nombre" 
         required
         valor = {nombre}
         actualizarValor={actualizarNombre}
         />
         <CampoTexto titulo="Puesto" 
         placeHolder="Ingresa el puesto" 
         required
         valor = {puesto}
         actualizarValor={actualizarPuesto}
         />
         <CampoTexto titulo="Foto" 
         placeHolder="Ingresa la ruta de la foto" 
         required
         valor = {foto}
         actualizarValor={actualizarFoto}
         />

         <ListaOpciones 
         required
         valor={equipo}
         actualizarEquipo={actualizarEquipo}
         equipos={props.equipos}
         />
         <Boton texto="Crear Colaborador"/>
      </form>

      <form onSubmit={manejarNuevoEquipo}>
         <h2>Rellena el formulario para crear el equipo</h2>
         <CampoTexto titulo="Titulo" 
         placeHolder="Ingresa el titulo del equipo" 
         required
         valor = {titulo}
         actualizarValor={actualizarTitulo}
         />
         <CampoTexto titulo="Color" 
         placeHolder="Ingresa el color primario" 
         required
         valor = {color}
         actualizarValor={actualizarColor}
         type="color"
         />
         <Boton texto="Registrar Equipo"></Boton>
      </form>
     </section>
);
};
//exportatr la arrow function
export default Formulario