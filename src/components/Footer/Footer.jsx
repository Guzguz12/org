import "./Footer.css"

const Footer = () =>{
    return <footer className="footer" style={{backgroundImage: "url(/img/footer.png)"}}>
        <div className="redes">
            <a href="#">
                <img src="/img/facebook.png" alt="Facebook"></img>
            </a>
            <a href="#">
                <img src="/img/instagram.png" alt="Facebook"></img>
            </a>
            <a href="#">
                <img src="/img/linkedin.png" alt="Facebook"></img>
            </a>

        </div>
        <img src="/img/Logo.png" alt="org"></img>
        <strong>Desarrollado por Axel Guzmán</strong>
    </footer>
}
export default Footer