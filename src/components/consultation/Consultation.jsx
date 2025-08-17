import "./Consultation.css";
import profile from "../../assets/profile.jpg";
import { FaWhatsapp, FaArrowRight, FaComments, FaBolt, FaBullseye } from "react-icons/fa";
import { useState, useEffect } from "react";

const WHATSAPP_CONFIG = {
  phoneNumber: "557781075231",
  message: "Olá! Tenho interesse nos serviços de consultoria e contabilidade oferecidos pela DS Consultoria e Contabilidade. Poderia fornecer mais informações?"
};

function Consultation() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.message)}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('consulta');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="consulta" className="consultation" aria-labelledby="consultation-title">
      <div className="consultation-background">
        <div className="consultation-particles"></div>
        <div className="consultation-glow"></div>
      </div>
      
      <div className="consultation-container">
        <div className={`consultation-content ${isVisible ? 'animate-in' : ''}`}>
          <div className="consultation-image-wrapper">
            <div className="consultation-image-backdrop"></div>
            <img 
              src={profile} 
              alt="Profissional de contabilidade atendendo cliente" 
              className="consultation-image"
              loading="lazy"
            />
          </div>
          
          <div className="consultation-text">
            <header className="consultation-header">
              <div className="consultation-title-wrapper">
                <h2 id="consultation-title" className="consultation-title">
                  <span className="title-accent">Faça Sua</span>
                  <span className="title-highlight">Consulta Contábil</span>
                </h2>
                <div className="consultation-subtitle">
                  Transforme seu negócio com nossa expertise
                </div>
              </div>
            </header>
            
            <div className="consultation-description">
              <div className="consultation-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaComments />
                  </div>
                  <span>Atendimento personalizado via WhatsApp</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaBolt />
                  </div>
                  <span>Resposta rápida e especializada</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <FaBullseye />
                  </div>
                  <span>Soluções sob medida para seu negócio</span>
                </div>
              </div>
              
              <p className="consultation-main-text">
                Descubra como nossos serviços contábeis podem revolucionar sua empresa. 
                Nossa equipe especializada está pronta para guiá-lo em cada etapa do seu crescimento.
              </p>
            </div>
            
            <div className="consultation-cta">
              <a 
                href={whatsappUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="consultation-button"
                aria-label="Entrar em contato via WhatsApp"
              >
                <span className="button-content">
                  <FaWhatsapp className="consultation-button-icon" aria-hidden="true" />
                  <span className="button-text">Iniciar Conversa</span> 
                </span>
                <div className="button-shimmer"></div>
              </a>
              
              <div className="consultation-trust">
                <div className="trust-indicators">
                  <div className="trust-item">
                    <span className="trust-number">200+</span>
                    <span className="trust-label">Clientes Atendidos</span>
                  </div>
                  <div className="trust-item">
                    <span className="trust-number">24h</span>
                    <span className="trust-label">Resposta Garantida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
