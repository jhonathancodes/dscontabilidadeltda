import React, { useState, useEffect } from "react";
import "./Header.css";
import equipe from "../../assets/equipe.jpg";
import cont from "../../assets/cont.webp";
import { FaPlay, FaPause, FaUsers, FaAward, FaCalendarAlt, FaMapMarkerAlt, FaQuoteLeft, FaChartLine, FaBullseye, FaRocket } from "react-icons/fa";

function Header() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [timelineVisible, setTimelineVisible] = useState(false);

   
    const testimonials = [
        {
            text: "A DS Consultoria transformou nossa gestão financeira. Profissionais excepcionais!",
            author: "Maria Silva",
            company: "Comércio Silva LTDA"
        },
        {
            text: "Suporte 24/7 e expertise incomparável. Recomendo de olhos fechados.",
            author: "João Santos",
            company: "Tech Solutions BA"
        },
        {
            text: "Mais de 3 anos de parceria. Confiança e resultados garantidos.",
            author: "Ana Costa",
            company: "Restaurante Costa Verde"
        }
    ];

 
    const milestones = [
        { year: "2017", title: "Fundação", desc: "Início das atividades em Presidente Jânio Quadros" },
        { year: "2019", title: "Expansão", desc: "100+ clientes atendidos" },
        { year: "2021", title: "Digitalização", desc: "Implementação de soluções digitais" },
        { year: "2024", title: "Excelência", desc: "200+ empresas parceiras" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
                setIsAnimating(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimelineVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const timelineElement = document.querySelector('.timeline-container');
        if (timelineElement) {
            observer.observe(timelineElement);
        }

        return () => observer.disconnect();
    }, []);

    const handleTestimonialChange = (index) => {
        if (index !== currentTestimonial) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentTestimonial(index);
                setIsAnimating(false);
            }, 300);
        }
    };

    return (
        <section id="sobre" className="header">
            <div className="header-main">
                <div className="header-content">
                    <div className="image-container">
                        <img src={equipe} alt="Equipe DS Consultoria" className="team-image" />
                        <div className="image-overlay">
                            <div className="stats-overlay">
                                <div className="stat-overlay-item">
                                    <FaUsers />
                                    <span>200+ Clientes</span>
                                </div>
                                <div className="stat-overlay-item">
                                    <FaAward />
                                    <span>7+ Anos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="header-text">
                        <div className="header-badge">
                            <FaMapMarkerAlt />
                            <span>Presidente Jânio Quadros, BA</span>
                        </div>
                        
                        <h2>Nossa História</h2>
                        <img src={cont} alt="Logo DS Contabilidade" className="company-logo" />
                        
                        <p className="main-description">
                            Desde 2017, a <strong>DS Consultoria Contábil</strong> tem ajudado empresas a transformar 
                            desafios financeiros em soluções inteligentes. Nossa equipe é especializada em contabilidade 
                            estratégica, oferecendo suporte personalizado para impulsionar o crescimento do seu negócio.
                        </p>

                        <div className="value-propositions">
                            <div className="value-item">
                                <div className="value-icon">
                                    <FaChartLine />
                                </div>
                                <span>Gestão Estratégica</span>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">
                                    <FaBullseye />
                                </div>
                                <span>Soluções Personalizadas</span>
                            </div>
                            <div className="value-item">
                                <div className="value-icon">
                                    <FaRocket />
                                </div>
                                <span>Crescimento Sustentável</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="testimonials-section">
                <div className="testimonials-container">
                    <h3>O que nossos clientes dizem</h3>
                    
                    <div className="testimonial-card">
                        <FaQuoteLeft className="quote-icon" />
                        <div className={`testimonial-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                            <p>"{testimonials[currentTestimonial].text}"</p>
                            <div className="testimonial-author">
                                <strong>{testimonials[currentTestimonial].author}</strong>
                                <span>{testimonials[currentTestimonial].company}</span>
                            </div>
                        </div>
                        
                        <div className="testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                                    onClick={() => handleTestimonialChange(index)}
                                    aria-label={`Depoimento ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="timeline-section">
                <div className="timeline-container">
                    <h3>Nossa Trajetória</h3>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div 
                                key={index} 
                                className={`timeline-item ${timelineVisible ? 'visible' : ''}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="timeline-year">{milestone.year}</div>
                                <div className="timeline-content">
                                    <h4>{milestone.title}</h4>
                                    <p>{milestone.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="achievements-section">
                <div className="achievements-container">
                    <div className="achievement-item">
                        <div className="achievement-number">200+</div>
                        <div className="achievement-label">Empresas Parceiras</div>
                        <div className="achievement-desc">Confiança conquistada</div>
                    </div>
                    <div className="achievement-item">
                        <div className="achievement-number">7+</div>
                        <div className="achievement-label">Anos de Mercado</div>
                        <div className="achievement-desc">Experiência comprovada</div>
                    </div>
                    <div className="achievement-item">
                        <div className="achievement-number">24/7</div>
                        <div className="achievement-label">Suporte Disponível</div>
                        <div className="achievement-desc">Sempre ao seu lado</div>
                    </div>
                    <div className="achievement-item">
                        <div className="achievement-number">100%</div>
                        <div className="achievement-label">Satisfação Cliente</div>
                        <div className="achievement-desc">Compromisso total</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
