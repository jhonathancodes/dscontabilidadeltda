import "./Nav.css";
import logo from "../../assets/logo.jpg";
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Nav() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="Logo da Consultoria" />
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuAberto ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${menuAberto ? "active" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#consulta">Consulta</a></li>
                <li><a href="#consultoria">Consultoria</a></li>
                <li><a href="#duvidas">Dúvidas</a></li>
                <li><a href="#contato">Contato</a></li>
                <div className="nav-icons-mobile"> {/* Ícones para mobile */}
                    <a href="https://www.instagram.com/dsconsultoriacontabilidade?igsh=enp2ZTk0cjZpNmNy" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp />
                    </a>
                </div>
            </ul>
            <div className="nav-icons"> {/* Ícones para desktop */}
                <a href="https://www.instagram.com/dsconsultoriacontabilidade?igsh=enp2ZTk0cjZpNmNy" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp />
                </a>
            </div>
        </nav>
    );
}

export default Nav;