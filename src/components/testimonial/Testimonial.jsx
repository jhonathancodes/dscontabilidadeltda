import "./Testimonial.css";
import { useState } from "react";
import { useTrail, animated } from "react-spring";

const testimonials = [
    { name: "- João Silva", feedback: "A DS Consultoria foi essencial para a organização das nossas finanças. Profissionais altamente qualificados!", rating: 5 },
    { name: "- Maria Oliveira", feedback: "A equipe da DS Consultoria nos ajudou a planejar nosso crescimento de forma sólida e segura. Excelente atendimento!", rating: 4 },
    { name: "- Carlos Souza", feedback: "Recomendo a DS Consultoria para todos os meus parceiros de negócios. Eles realmente se importam com o sucesso do cliente.", rating: 5 },
    { name: "- Ana Lima", feedback: "Os serviços prestados são excepcionais. A DS Consultoria realmente nos orientou da melhor forma possível.", rating: 5 },
    { name: "- Pedro Almeida", feedback: "Excelente suporte e equipe sempre disposta a ajudar! Eles transformaram nossos processos contábeis.", rating: 4 },
    { name: "- Lucas Ferreira", feedback: "A DS Consultoria nos proporcionou uma consultoria personalizada e de qualidade. Super recomendados!", rating: 5 },
    { name: "- Fernanda Costa", feedback: "Muito bom o trabalho da DS Consultoria, sempre atentos às nossas necessidades. Agradecemos pela parceria!", rating: 4 },
    { name: "- Gustavo Martins", feedback: "Com a ajuda da DS Consultoria, conseguimos otimizar nossa contabilidade e reduzir custos. Trabalho impecável.", rating: 5 },
    { name: "- Beatriz Silva", feedback: "Recomendo muito os serviços da DS Consultoria! Profissionais atenciosos e extremamente competentes.", rating: 4 },
    { name: "- Rafael Santos", feedback: "A DS Consultoria nos ajudou a melhorar a gestão financeira da nossa empresa. Uma parceria que vale a pena!", rating: 5 },
    { name: "- Camila Rocha", feedback: "Fiquei muito satisfeita com a consultoria contábil que recebi. A equipe é muito comprometida e qualificada.", rating: 4 },
    { name: "- Eduardo Costa", feedback: "Profissionais de excelência, sempre disponíveis e prontos para ajudar. A DS Consultoria fez toda a diferença para o nosso negócio.", rating: 5 },
    { name: "- Juliana Andrade", feedback: "A DS Consultoria é referência quando o assunto é contabilidade estratégica. Super recomendo para todos!", rating: 4 },
    { name: "- Renato Silva", feedback: "Excelente serviço de consultoria. A DS Consultoria tem um atendimento muito próximo e com alto nível de competência.", rating: 5 },
    { name: "- Isabela Almeida", feedback: "Uma excelente experiência. A DS Consultoria trouxe soluções inovadoras para a nossa empresa.", rating: 4 },
    { name: "- Júlio Pereira", feedback: "Profissionais altamente capacitados e muito atenciosos. A consultoria foi de grande valia para nosso crescimento.", rating: 5 },
    { name: "- Lúcia Martins", feedback: "O trabalho da DS Consultoria foi essencial para organizar nossas finanças. São muito atenciosos e competentes.", rating: 4 },
    { name: "- Ricardo Gomes", feedback: "Excelente trabalho! A consultoria contábil ajudou muito no planejamento e no crescimento da nossa empresa.", rating: 5 },
    { name: "- Tatiane Pereira", feedback: "A DS Consultoria nos orientou da melhor forma possível. A confiança foi rapidamente conquistada.", rating: 4 },
    { name: "- Guilherme Costa", feedback: "Recomendo a DS Consultoria a todos que buscam soluções eficientes e profissionais de alta qualidade.", rating: 5 }
];

function Testimonial() {
    const [index, setIndex] = useState(0);
    const trail = useTrail(testimonials.length, {
        to: {
            opacity: 1,
            x: 0
        },
        from: {
            opacity: 0,
            x: 30
        },
        reverse: index % 2 === 0,
    });

    return (
        <section className="testimonial">
            <div className="testimonial-cards">
                {trail.map((props, i) => (
                    <animated.div
                        key={i}
                        className="testimonial-card"
                        style={{
                            transform: props.x.to(x => `translate3d(0,${x}px,0)`),
                            opacity: props.opacity
                        }}
                    >
                        <div className="rating">
                            {[...Array(testimonials[i].rating)].map((_, idx) => (
                                <span key={idx} className="star">★</span>
                            ))}
                        </div>
                        <p className="client-feedback">{testimonials[i].feedback}</p>
                        <p className="client-name">{testimonials[i].name}</p>
                    </animated.div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial;
