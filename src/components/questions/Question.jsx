import "./Question.css";
import { useState } from "react";

function Question() {
    const [openIndex, setOpenIndex] = useState(null);

    const questions = [
        { question: "Quais são os serviços básicos oferecidos por um contador?", answer: "Um contador oferece serviços como abertura de empresas, elaboração de declarações fiscais, assessoria tributária, contabilidade gerencial, elaboração de balanços e demonstrações financeiras, além de orientações sobre planejamento financeiro e conformidade com as leis fiscais." },
        { question: "Como a contabilidade pode ajudar a reduzir impostos?", answer: "A contabilidade pode ajudar a reduzir impostos por meio de um planejamento tributário eficiente, que envolve a escolha do regime tributário mais adequado para a empresa, aproveitando incentivos fiscais e deduções permitidas por lei." },
        { question: "O que é o SPED e qual sua importância para as empresas?", answer: "O SPED (Sistema Público de Escrituração Digital) é uma plataforma digital que reúne e transmite informações fiscais e contábeis das empresas para a Receita Federal. Ele facilita a fiscalização, a apuração de impostos e a conformidade tributária, além de reduzir erros humanos." },
        { question: "Quais são as obrigações fiscais de uma empresa no Brasil?", answer: "As obrigações fiscais de uma empresa no Brasil incluem o pagamento de tributos como ICMS, IPI, ISS, PIS, COFINS e a entrega de declarações como a DCTF, SPED Fiscal e IRPJ. Cumprir essas obrigações é essencial para evitar multas e autuações." },
        { question: "Como posso saber se estou pagando os impostos corretamente?", answer: "Para saber se os impostos estão sendo pagos corretamente, é importante manter a contabilidade em dia e registrar todas as receitas e despesas. Um contador qualificado pode apurar os impostos, verificar o enquadramento tributário e garantir a conformidade com a legislação." }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="question">
            <div className="question-header">
                <span id="duvidas" className="subtitle">FAQs</span>
                <h2>Dúvidas Frequentes</h2>
            </div>
            <div className="question-container">
                {questions.map((item, index) => (
                    <div key={index} className={`question-item ${openIndex === index ? "active" : ""}`}>
                        <div className="question-title" onClick={() => toggleQuestion(index)}>
                            <h3>{item.question}</h3>
                            <span className="toggle-icon">{openIndex === index ? "−" : "+"}</span>
                        </div>
                        <div className="question-answer" style={{ 
                            maxHeight: openIndex === index ? "500px" : "0px", /* Aumentando o tamanho do card quando aberto */
                            opacity: openIndex === index ? "1" : "0" 
                        }}>
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Question;
