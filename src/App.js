import './App.css';
//importar el header
import Header from './components/header_component/Header';
//importar el formulario
import Formulario from './components/formulario_component/formulario';
//importar mi organizacion
import MiOrg from './components/MiOrg';
//importar componente equipo
import Equipo from './components/Equipo';
//importar footer
import Footer from './components/Footer/Footer';
//IMPORTAR HOOK, SIEMPRE SE USA DENTRO DE UN COMPONENTE Y ANTES DEL RETORNO
import { useState } from "react"
//usar el uuid -> identificador unico
import {v4 as uuid} from "uuid"

function App() {
  //state de ver o no el form
  const[mostrarForm,actualizarMostrar] = useState(false)
  //state de los datos del colaborador
  const [colaboradores,actualizarColaboradores] = useState([])
   //ARREGLO DE OBJETOS de equipos
   const [equipos,actualizarEquipo] = useState([
    {
      titulo:"Programación",
      colorPrimario :"#57C278",
      colorSecundario: "#D9F7E9",
      identificador : uuid()
    },
    {
      titulo:"Front End",
      colorPrimario :"#82CFFA",
      colorSecundario: "#E8F8FF",
      identificador : uuid()
    },
    {
      titulo:"Data Science",
      colorPrimario :"#A6D157",
      colorSecundario: "#F0F8E2",
      identificador : uuid()
    },
    {
      titulo:"Devops",
      colorPrimario :"#E06B69",
      colorSecundario: "#FDE7E8",
      identificador : uuid()

    },
    {
      titulo:"UX y Diseño",
      colorPrimario :"#DB6EBF",
      colorSecundario: "#FAE9F5",
      identificador : uuid()

    },
    {
      titulo:"Móvil",
      colorPrimario :"#FFBA05",
      colorSecundario: "#FFF5D9",
      identificador : uuid()

    },
    {
      titulo:"Innovación y Gestión",
      colorPrimario :"#FF8A29",
      colorSecundario: "#FFEEDF",
      identificador : uuid()
    }
    ])


   //funcion para cambiar el valor del state del form
  const cambiarMostrar = () =>{
    //cambiar el valor cada vez que se llama
    actualizarMostrar(!mostrarForm)
   }
  
    //Registrar  colaborador - enviar datos al state Colaboradores
    const registrarColaborador = (colaborador)=>{
      //actualizar el state con spread operatos
      //los 3 puntos asignan al array actual y con coma agrego el nuevo, como un PUSH
      actualizarColaboradores([...colaboradores,colaborador])
    }
    //cambiamos el array de equipos
    const actualizarColorEquipo = (color,id)=>{
      const equiposActualizados = equipos.map((equipo) =>{
        if(equipo.identificador===id)
        {
          equipo.colorPrimario= color;
        }
        return equipo
      })
      //insertamos en el state el mapeo del equipo nuevo
      actualizarEquipo(equiposActualizados)
    }
    //Eliminar colaborador que se la enviaremos al componente equipo
    const eliminarColaborador = (id) =>{
      const nuevosColab= colaboradores.filter((colab) => colab.identificador != id)
      actualizarColaboradores(nuevosColab)
    }

    const crearEquipo = (nuevoEquipo) =>
    {
      //crea un copia de equipo y le agrego el objeto para unirlo al array
      actualizarEquipo([...equipos,{...nuevoEquipo, id : uuid()}])
    }

    //funcion que recibe el id y mapea los colaboradores actuales y cambia el estado por true o false
    const like =(id)=>{
      const colabActualizados = colaboradores.map((colaborador)=>{
        if (colaborador.identificador===id){colaborador.fav =!colaborador.fav}
        return colaborador
      })
      
      actualizarColaboradores(colabActualizados)
    }

  //llamar funcion header con {Header()}
  //llamar al componente <Header> <Header/>
  //if llamado cortocircuito
  //condicion && seMuestra no existe el else
  return (
    <div>
      <Header/>
      {/*ternario --> condicion ? siSeCumple: sinoSeCumple*/}
      {mostrarForm===true ? <Formulario 
      equipos={equipos.map((equipo)=>equipo.titulo)}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> : <div></div>}

      <MiOrg funcionClick={cambiarMostrar}/>

      {/*RECORRER EL ARRAY CON MAP para equipos */}
      {
        equipos.map((equipoResult,index)=>{return <Equipo 
            key={index} 
            datos={equipoResult} 
            //filtar los colaboradores, mientras ese colaborador sea igual al resultado del equipo lo posiciona en cada lugar 
            nuevoColab= {colaboradores.filter(colaborador => colaborador.Equipo=== equipoResult.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor ={actualizarColorEquipo}
            like={like}
          />}
        )
      }
      <Footer/>


    </div>
  );
}

export default App;
