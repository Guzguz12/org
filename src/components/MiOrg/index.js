
import "./MiOrg.css"
const MiOrg =(props)=>{
    //ESTADO - HOOKS
    //useState
    // const [nombreVairable,funcionActualizar] = useState(ValorInicial)
    //const[form,actualizarForm] = useState(false)

    //function de click en el icono
    //con los props llamamos a la funcion que esta en al app, o sea al state 

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="Icono agregar" onClick={props.funcionClick}></img>
    </section>
}
export default MiOrg 