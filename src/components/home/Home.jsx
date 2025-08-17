import "./Home.css";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa"; 

function Home() {
    return (
        <section id="home" className="home">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="./assets/finance-work.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
            </video>

            <div className="floating-elements">
                <div className="floating-circle circle-1"></div>
                <div className="floating-circle circle-2"></div>
                <div className="floating-circle circle-3"></div>
            </div>

            <div className="home-content">
                <div className="hero-badge">
                    ✨ Mais de 7 anos de experiência
                </div>

                <h1>DS Consultoria e Contabilidade</h1>
                
                <p className="subtitle">
                    Transformamos a contabilidade em soluções simples e eficientes para o seu negócio. 
                    Expertise, confiança e resultados que impulsionam o crescimento da sua empresa.
                </p>

                <div className="cta-container">
                    <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" 
                       className="cta-primary" 
                       target="_blank" 
                       rel="noopener noreferrer">
                        <FaWhatsapp />
                        Fale Conosco Agora
                    </a>
                    
                    <a href="#sobre" className="cta-secondary">
                        <span>Conheça nossa história</span>
                        <FaArrowRight />
                    </a>
                </div>

                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">7+</span>
                        <span className="stat-label">Anos</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">200+</span>
                        <span className="stat-label">Clientes</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">100%</span>
                        <span className="stat-label">Confiança</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">24/7</span>
                        <span className="stat-label">Suporte</span>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Role para baixo</span>
                <div className="scroll-arrow"></div>
            </div>
        </section>
    );
}

export default Home;
