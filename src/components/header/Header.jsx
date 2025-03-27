import "./Header.css";
import equipe from "../../assets/equipe.jpg"; // Caminho correto da imagem da equipe
import cont from "../../assets/cont.webp"; // Caminho correto da logo

function Header() {
    return (
        <section id="sobre" className="header">
            <div className="header-content">
                <img src={equipe} alt="Equipe DS Consultoria" className="team-image" />
                <div className="header-text">
                    <h2>Nossa História</h2>
                    <img src={cont} alt="Logo DS Contabilidade" className="company-logo" />
                    <p>
                    Desde 2017, a DS Consultoria Contábil tem ajudado empresas a transformar desafios financeiros em soluções inteligentes. Localizada em Presidente Jânio Quadros, Bahia, nossa equipe é especializada em contabilidade estratégica, oferecendo suporte personalizado para impulsionar o crescimento do seu negócio. Conte com a nossa experiência e comprometimento para simplificar sua gestão financeira.
                    </p>
                    
                </div>
            </div>
        </section>
    );
}

export default Header;
