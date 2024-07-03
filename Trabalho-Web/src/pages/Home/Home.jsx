import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bem-vindo à nossa empresa</h1>
          <p>Seja bem-vindo e conheça nossos produtos.</p>
          <Link to="/produtos" className="btn-primary">Ver Produtos</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h2>O que oferecemos?</h2>
          <p>Todos produtos oferecidos pelo nosso site tem uma alta garantia de qualidade, alem dá segurança para a compra dos nossos clientes.</p>
        </div>
        <div className="feature">
          <h2>Por que escolher-nos?</h2>
          <p>Cuidamos da sua segurança e da sua privacidade, utilizamos tecnologia de ponta para fornecer informações precisas e confiabilidade ao cliente.</p>
        </div>
        <div className="feature">
          <h2>Nossos Clientes</h2>
          <p>Nossos clientes confiam no que fazemos, e fazemos tudo para dar o melhor possível para eles em tudo que for necessário.</p>
        </div>
      </section>

      <section className="cta">
        <h2>Entre em Contato</h2>
        <p>Estamos aqui para ajudar. Entre em contato com nosso E-mail ou WhatsApp abaixo para mais informações.</p>
      </section>
    </div>
  );
};

export default Home;
