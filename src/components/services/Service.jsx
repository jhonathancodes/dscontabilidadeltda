import "./Service.css";
import { FaBook, FaBalanceScale, FaRegMoneyBillAlt, FaClipboardList, FaGavel, FaSearch } from "react-icons/fa"; // Ícones

function Service() {
    return (
        <section id="servicos" className="services">
            <div className="services-header">
                <h2>Serviços Contábeis</h2>
                <p>
                    Explore nosso leque de serviços contábeis. Oferecemos soluções especializadas para otimizar a gestão financeira do seu negócio, com orientações personalizadas e estratégias para atender às suas necessidades.
                </p>
            </div>

            <div className="services-cards">
                <div className="service-card">
                    <FaBook className="service-icon" />
                    <h3>Escrituração Contábil e Fiscal</h3>
                    <p>Realizamos a escrituração contábil e fiscal de sua empresa, garantindo conformidade e transparência nos registros fiscais e financeiros.</p>
                </div>

                <div className="service-card">
                    <FaBalanceScale className="service-icon" />
                    <h3>Elaboração de Balanços e Demonstrações</h3>
                    <p>Elaboramos balanços e demonstrações financeiras precisas, oferecendo uma visão clara da saúde financeira da sua empresa.</p>
                </div>

                <div className="service-card">
                    <FaRegMoneyBillAlt className="service-icon" />
                    <h3>Consultoria Tributária e Planejamento Fiscal</h3>
                    <p>Oferecemos consultoria tributária para otimizar sua carga tributária e garantir o melhor planejamento fiscal para sua empresa.</p>
                </div>

                <div className="service-card">
                    <FaClipboardList className="service-icon" />
                    <h3>Assessoria para Constituição e Legalização</h3>
                    <p>Ajudamos no processo de constituição e legalização de empresas, assegurando que tudo esteja em conformidade com as normas legais e fiscais.</p>
                </div>

                {/* Novos serviços */}
                <div className="service-card">
                    <FaGavel className="service-icon" />
                    <h3>Assessoria em Recuperação Judicial e Falência</h3>
                    <p>Auxiliamos empresas em dificuldades financeiras com consultoria especializada na recuperação judicial e falência, ajudando a estruturar um plano de reestruturação eficiente.</p>
                </div>

                <div className="service-card">
                    <FaSearch className="service-icon" />
                    <h3>Auditoria Contábil</h3>
                    <p>Realizamos auditorias contábeis para garantir a conformidade e transparência das informações financeiras de sua empresa, oferecendo relatórios detalhados e seguros.</p>
                </div>
            </div>
        </section>
    );
}

export default Service;
