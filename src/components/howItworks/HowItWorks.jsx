import { FaRegHandshake, FaCogs, FaChartLine, FaUsers, FaTasks, FaRegCheckCircle } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp
import "./HowItWorks.css";

function HowItWorks() {
    return (
        <section className="how-it-works">
            <div className="services-header">
                <h2>Como Funciona</h2>
                <p>Nosso processo é simples e eficiente. Veja como podemos ajudar o seu negócio a crescer com nossa consultoria contábil.</p>
            </div>
            <div className="services-cards">
                <div className="service-card">
                    <div className="service-icon">
                        <FaRegHandshake />
                    </div>
                    <h3>1. Entendimento do Cliente</h3>
                    <p>Iniciamos com uma análise detalhada das necessidades do seu negócio para oferecer soluções personalizadas.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <FaCogs />
                    </div>
                    <h3>2. Implementação de Soluções</h3>
                    <p>Colocamos em prática as estratégias mais adequadas, otimizando processos e melhorando a contabilidade da sua empresa.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <FaChartLine />
                    </div>
                    <h3>3. Acompanhamento e Crescimento</h3>
                    <p>Monitoramos os resultados e ajustamos as estratégias, garantindo o crescimento constante do seu negócio.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <FaUsers />
                    </div>
                    <h3>4. Treinamento e Capacitação</h3>
                    <p>Oferecemos treinamentos para a sua equipe, garantindo que todos possam aplicar as melhores práticas contábeis.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <FaTasks />
                    </div>
                    <h3>5. Planejamento Estratégico</h3>
                    <p>Desenvolvemos um planejamento contábil estratégico para que sua empresa esteja sempre um passo à frente.</p>
                </div>
                <div className="service-card">
                    <div className="service-icon">
                        <FaRegCheckCircle />
                    </div>
                    <h3>6. Resultados Concretos</h3>
                    <p>Após a implementação, medimos os resultados e fornecemos relatórios para garantir o sucesso contínuo.</p>
                </div>
            </div>
            <div className="cta-button-container">
                <a
                    href="https://wa.me/557781075231?text=Olá!%20Tenho%20interesse%20nos%20serviços%20de%20consultoria%20e%20contabilidade.%20Poderia%20fornecer%20mais%20informações?"
                    target="_blank"
                    className="cta-button"
                >
                    <FaWhatsapp /> Fale Conosco
                </a>
            </div>
        </section>
    );
}

export default HowItWorks;
