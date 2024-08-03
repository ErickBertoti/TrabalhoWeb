import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo ao Sistema de Gestão de Alunos</h1>
          <p>Gerencie e visualize informações de alunos de forma fácil e eficiente.</p>
          <Link to="/cadastro" className="btn-primary">Cadastrar Alunos</Link>
          <Link to="/aluno" className="btn-primary">Ver Alunos</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>O que oferecemos?</h2>
          <p>Nosso sistema permite a visualização e a gestão de informações de alunos, incluindo nomes, e-mails e idades. É fácil adicionar, remover e editar os dados dos alunos.</p>
        </div>
        <div className="feature">
          <h2>Por que escolher-nos?</h2>
          <p>Oferecemos uma interface intuitiva e segura para gerenciar dados dos alunos. Utilizamos as melhores práticas de segurança para garantir que suas informações estejam protegidas.</p>
        </div>
        <div className="feature">
          <h2>Como funciona?</h2>
          <p>Após acessar a seção de alunos, você poderá ver uma lista completa de todos os alunos cadastrados. É possível visualizar detalhes de cada aluno e realizar operações básicas de gerenciamento.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Entre em Contato</h2>
        <p>Tem alguma dúvida ou precisa de suporte? Entre em contato conosco através do E-mail ou WhatsApp para assistência adicional.</p>
      </section>
    </div>
  );
};

export default Home;
