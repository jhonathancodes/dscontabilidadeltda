import { useState } from 'react';
import './Service.css';
import { 
  FaBook, 
  FaBalanceScale, 
  FaRegMoneyBillAlt, 
  FaClipboardList, 
  FaGavel, 
  FaSearch,
  FaCalculator,
  FaUsers,
  FaChartLine,
  FaFileInvoiceDollar,
  FaTimes,
  FaArrowRight,
  FaWhatsapp
} from 'react-icons/fa';

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState('todos');

  const services = [
    {
      id: 1,
      category: 'contabil',
      icon: FaBook,
      title: 'Escrituração Contábil e Fiscal',
      shortDescription: 'Escrituração completa com conformidade e transparência nos registros fiscais e financeiros.',
      fullDescription: 'Realizamos toda a escrituração contábil e fiscal de sua empresa seguindo as normas brasileiras de contabilidade. Nosso serviço inclui lançamentos contábeis, conciliações bancárias, controle de estoque e elaboração de livros fiscais obrigatórios.',
      benefits: ['Conformidade total com legislação', 'Organização financeira', 'Relatórios precisos']
    },
    {
      id: 2,
      category: 'contabil',
      icon: FaBalanceScale,
      title: 'Elaboração de Balanços e Demonstrações',
      shortDescription: 'Balanços e demonstrações financeiras precisas para visão clara da saúde financeira.',
      fullDescription: 'Elaboramos balanços patrimoniais, DRE, demonstração de fluxo de caixa e outras demonstrações contábeis essenciais para a tomada de decisões estratégicas em sua empresa.',
      benefits: ['Visão clara das finanças', 'Análise de performance', 'Suporte à decisões']
    },
    {
      id: 3,
      category: 'tributario',
      icon: FaRegMoneyBillAlt,
      title: 'Consultoria Tributária e Planejamento Fiscal',
      shortDescription: 'Otimização da carga tributária com planejamento fiscal estratégico.',
      fullDescription: 'Nossa consultoria tributária visa reduzir legalmente sua carga de impostos através de planejamento fiscal inteligente, escolha do regime tributário mais adequado e aproveitamento de incentivos fiscais disponíveis.',
      benefits: ['Redução de impostos', 'Planejamento estratégico', 'Compliance fiscal']
    },
    {
      id: 4,
      category: 'juridico',
      icon: FaClipboardList,
      title: 'Assessoria para Constituição e Legalização',
      shortDescription: 'Processo completo de constituição e legalização empresarial.',
      fullDescription: 'Acompanhamos todo o processo de abertura de empresas, desde a consulta de viabilidade até a obtenção de licenças necessárias, garantindo conformidade legal completa.',
      benefits: ['Processo simplificado', 'Conformidade legal', 'Suporte completo']
    },
    {
      id: 5,
      category: 'juridico',
      icon: FaGavel,
      title: 'Assessoria em Recuperação Judicial e Falência',
      shortDescription: 'Consultoria especializada em reestruturação empresarial e recuperação judicial.',
      fullDescription: 'Auxiliamos empresas em dificuldades financeiras com planos de recuperação judicial, negociação com credores e reestruturação financeira para viabilizar a continuidade dos negócios.',
      benefits: ['Reestruturação eficiente', 'Negociação com credores', 'Continuidade do negócio']
    },
    {
      id: 6,
      category: 'auditoria',
      icon: FaSearch,
      title: 'Auditoria Contábil',
      shortDescription: 'Auditorias para garantir conformidade e transparência das informações financeiras.',
      fullDescription: 'Realizamos auditorias internas e externas para verificar a adequação dos controles internos, conformidade com normas contábeis e a veracidade das demonstrações financeiras.',
      benefits: ['Conformidade assegurada', 'Transparência', 'Controles internos']
    },
    {
      id: 7,
      category: 'contabil',
      icon: FaCalculator,
      title: 'Departamento Pessoal',
      shortDescription: 'Gestão completa de folha de pagamento e obrigações trabalhistas.',
      fullDescription: 'Cuidamos de toda a gestão de pessoal da sua empresa, incluindo folha de pagamento, cálculos trabalhistas, admissões, demissões e cumprimento das obrigações acessórias.',
      benefits: ['Gestão completa RH', 'Conformidade trabalhista', 'Redução de riscos']
    },
    {
      id: 8,
      category: 'consultoria',
      icon: FaUsers,
      title: 'Consultoria Empresarial',
      shortDescription: 'Consultoria estratégica para crescimento e otimização empresarial.',
      fullDescription: 'Oferecemos consultoria empresarial focada em análise de viabilidade, reestruturação organizacional, análise de custos e implementação de controles gerenciais.',
      benefits: ['Crescimento estratégico', 'Otimização de processos', 'Análise de viabilidade']
    },
    {
      id: 9,
      category: 'consultoria',
      icon: FaChartLine,
      title: 'Análise Financeira e Gerencial',
      shortDescription: 'Relatórios gerenciais detalhados para tomada de decisões estratégicas.',
      fullDescription: 'Desenvolvemos relatórios gerenciais customizados, análises de indicadores financeiros e ferramentas de controle para apoiar a gestão estratégica do seu negócio.',
      benefits: ['Decisões baseadas em dados', 'Indicadores financeiros', 'Controle gerencial']
    },
    {
      id: 10,
      category: 'tributario',
      icon: FaFileInvoiceDollar,
      title: 'Gestão de Obrigações Acessórias',
      shortDescription: 'Cumprimento de todas as obrigações acessórias fiscais e tributárias.',
      fullDescription: 'Garantimos o cumprimento pontual de todas as obrigações acessórias como SPED, DCTF, DIRF, EFD-Contribuições e demais declarações obrigatórias.',
      benefits: ['Conformidade total', 'Prazos cumpridos', 'Evita multas']
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos os Serviços', count: services.length },
    { id: 'contabil', name: 'Contábil', count: services.filter(s => s.category === 'contabil').length },
    { id: 'tributario', name: 'Tributário', count: services.filter(s => s.category === 'tributario').length },
    { id: 'juridico', name: 'Jurídico', count: services.filter(s => s.category === 'juridico').length },
    { id: 'auditoria', name: 'Auditoria', count: services.filter(s => s.category === 'auditoria').length },
    { id: 'consultoria', name: 'Consultoria', count: services.filter(s => s.category === 'consultoria').length }
  ];

  const filteredServices = activeCategory === 'todos' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="servicos" className="services">
      <div className="services-header">
        <h2>Nossos Serviços Contábeis</h2>
        <p>
          Oferecemos soluções completas e especializadas para otimizar a gestão financeira do seu negócio. 
          Nossa expertise abrange desde serviços básicos até consultorias estratégicas avançadas.
        </p>
        
        {/* Filtros por categoria */}
        <div className="services-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
              <span className="count">({category.count})</span>
            </button>
          ))}
        </div>
      </div>

      <div className="services-cards">
        {filteredServices.map(service => {
          const IconComponent = service.icon;
          return (
            <div key={service.id} className="service-card" onClick={() => openModal(service)}>
              <div className="service-card-inner">
                <IconComponent className="service-icon" />
                <h3>{service.title}</h3>
                <p>{service.shortDescription}</p>
                <button className="learn-more-btn">
                  Saiba mais <FaArrowRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal para detalhes do serviço */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            
            <div className="modal-content">
              <div className="modal-header">
                <selectedService.icon className="modal-icon" />
                <h2>{selectedService.title}</h2>
              </div>
              
              <div className="modal-body">
                <div className="modal-description">
                  <h3>Descrição do Serviço</h3>
                  <p>{selectedService.fullDescription}</p>
                </div>
                
                <div className="modal-benefits">
                  <h3>Principais Benefícios</h3>
                  <ul>
                    {selectedService.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-price">
                  <h3>Solicite seu Orçamento</h3>
                  <p>Entre em contato conosco para receber uma proposta personalizada para suas necessidades.</p>
                </div>
              </div>
              
              <div className="modal-footer">
                <button className="contact-btn">
                  Solicitar Orçamento
                </button>
                <a 
                  href="https://wa.me/5577981075231?text=Olá! Tenho interesse em saber mais sobre os serviços de consultoria e contabilidade da DS Consultoria. Poderia me fornecer mais informações?" 
                  className="whatsapp-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Services;
