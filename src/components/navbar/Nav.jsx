import React, { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import './Nav.css';
function Nav() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#sobre", label: "Sobre" },
        { href: "#servicos", label: "Serviços" },
        { href: "#consulta", label: "Consulta" },
        { href: "#consultoria", label: "Consultoria" },
        { href: "#duvidas", label: "Dúvidas" },
        { href: "#contato", label: "Contato" }
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={logo} alt="DS Consultoria e Contabilidade" />
                    <span className="logo-text">DS Consultoria</span>
                </div>
                
                <div className="nav-center">
                    <ul className={`nav-links ${menuAberto ? "nav-links-active" : ""}`}>
                        {navLinks.map((link, index) => (
                            <li key={index} className="nav-item">
                                <a 
                                    href={link.href} 
                                    className="nav-link"
                                    onClick={() => setMenuAberto(false)}
                                >
                                    {link.label}
                                    <span className="nav-link-underline"></span>
                                </a>
                            </li>
                        ))}
                        <div className="nav-icons-mobile">
                            <a href="https://www.instagram.com/dsconsultoriacontabilidade?igsh=enp2ZTk0cjZpNmNy" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="social-icon">
                                <FaInstagram />
                            </a>
                            <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="social-icon">
                                <FaWhatsapp />
                            </a>
                        </div>
                    </ul>
                </div>

                <div className="nav-right">
                    <div className="nav-icons">
                        <a href="https://www.instagram.com/dsconsultoriacontabilidade?igsh=enp2ZTk0cjZpNmNy" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="social-icon">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="social-icon">
                            <FaWhatsapp />
                        </a>
                    </div>
                    
                    <button 
                        className={`menu-toggle ${menuAberto ? 'menu-toggle-active' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
