import "./Home.css";
import { FaWhatsapp } from "react-icons/fa"; 

function Home() {
    return (
        <section id="home" className="home">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="./assets/finance-work.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>
            <div className="home-content">
                <h1>DS Consultoria e Contabiliadade</h1>
                <p>Transformamos a contabilidade em soluções simples e eficientes para o seu negócio.</p>
                <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" className="cta-button">
                    <FaWhatsapp style={{ marginRight: '10px' }} /> Fale Conosco
                </a>
            </div>
        </section>
    );
}

export default Home;
