import React from "react";
import './Footer.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contato" className="footer">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Soluções</h4>
            <a href="https://clickup.com/pt-BR/blog/71465/software-de-gerenciamento-de-funcionarios" target="_blank" rel="noopener noreferrer">
              <p>Gestão de Pessoal</p>
            </a>
            <a href="https://blog.caju.com.br/beneficios/beneficios-corporativos/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <p>Benefícios</p>
            </a>
            <a href="https://www.fiscontab.com.br/contador-pessoas-fisicas?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <p>Pessoa Física</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Recursos</h4>
            <a href="https://www.dominiosistemas.com.br/biblioteca-de-conteudos/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <p>Biblioteca de Conteúdo</p>
            </a>
            <a href="https://www.consulesp.com.br/depoimentos/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <p>Depoimentos</p>
            </a>
            <a href="https://cfc.org.br/biblioteca/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <p>Vídeos informativos</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Links Úteis</h4>
            <a href="https://blbauditoreseconsultores.com.br/blog/sites-para-contadores/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">
              <p>Confira</p>
            </a>
          </div>
          <div className="sb__footer-links_group">
            <div className="sb__footer-links_div">
              <h4>Empresa</h4>
              <a href="https://www.google.com.br/maps/place/Av.+Ladisl%C3%A3o+Klener,+136,+Pres.+J%C3%A2nio+Quadros+-+BA,+46250-000/@-14.688467,-41.6856181,740m/data=!3m2!1e3!4b1!4m9!1m2!2m1!1sAvenida+Av.+Padre+Ladislau+Klenner+136+Centro+Presidente+J%C3%A2nio+Quadros+BA!3m5!1s0x745918781eb9cb3:0x503ae278b12e73ce!8m2!3d-14.6884722!4d-41.6810047!15sCkpBdmVuaWRhIEF2LiBQYWRyZSBMYWRpc2xhdSBLbGVubmVyIDEzNiBDZW50cm8gUHJlc2lkZW50ZSBKw6JuaW8gUXVhZHJvcyBCQZIBEGdlb2NvZGVkX2FkZHJlc3PgAQA?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <p>Localização</p>
              </a>
            </div>
            <div className="sb__footer-links_div">
              <h4>Contate-nos</h4>
              <div className="socialmedia">
                <a href="https://www.instagram.com/dsconsultoriacontabilidade?igsh=enp2ZTk0cjZpNmNy" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon instagram" />
                </a>
                <a href="https://wa.me/557781075231?text=Ol%C3%A1!%20Tenho%20interesse%20nos%20servi%C3%A7os%20de%20consultoria%20e%20contabilidade%20oferecidos%20pela%20DS%20Consultoria%20e%20Contabilidade.%20Poderia%20fornecer%20mais%20informa%C3%A7%C3%B5es%3F%0A" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="icon whatsapp" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} DS Consultoria e Contabilidade. | CNPJ: 27.341.798/0001-91</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
