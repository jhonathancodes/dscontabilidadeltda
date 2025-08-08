import "./Consultation.css";
import profile from "../../assets/profile.jpg"; 
import { FaWhatsapp } from "react-icons/fa"; 

function Consultation() {
    return (
        <section id="consulta" className="consultation">
            <div className="consultation-content">
                <img src={profile} alt="Consulta Contábil" className="consultation-image" />
                <div className="consultation-text">
                    <h2>Faça Sua Consulta Contábil</h2>
                    <p>
                        Entre em contato conosco pelo WhatsApp para obter uma consulta personalizada 
                        e descubra como nossos serviços contábeis podem ajudá-lo. Estamos aqui para 
                        responder suas dúvidas, fornecer detalhes sobre nossas especialidades e guiar 
                        você em cada passo. Inicie uma conversa hoje mesmo e veja como podemos atender 
                        às suas necessidades específicas.
                    </p>
                    <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" target="_blank" className="consultation-button">
                        <FaWhatsapp /> Fale Conosco
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Consultation;
