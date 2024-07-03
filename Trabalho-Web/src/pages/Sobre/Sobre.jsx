import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Sobre.css'; // Estilo CSS para a página Sobre

const Sobre = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api/?results=5');
        const funcionariosData = response.data.results.map((result, index) => ({
          id: index + 1,
          nome: `${result.name.first} ${result.name.last}`,
          foto: result.picture.large,
        }));
        setFuncionarios(funcionariosData);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    };

    fetchFuncionarios();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="sobre-page">
      <section className="section">
        <div className="container">
        <h2>Sobre Nossa Empresa</h2>
        <p>
          Somos uma empresa inovadora no ramo de vendas, focada em oferecer aos nossos clientes a melhor experiência de compra. Utilizamos tecnologia de ponta para fornecer informações detalhadas e precisas sobre todos os produtos que comercializamos, diretamente integrados através de uma API especializada.
        </p>
        <p>
          Nosso compromisso com a excelência nos impulsiona a buscar constantemente novas maneiras de facilitar e melhorar o processo de compra online, garantindo que cada cliente encontre exatamente o que procura, com informações atualizadas em tempo real.
        </p>
        <p>
          Estamos aqui para transformar a maneira como você faz suas compras online, proporcionando transparência, confiabilidade e conveniência em cada interação.
        </p>
      </div>
    </section>

      <section className="section section-light">
        <div className="container">
          <h2>Nossa Equipe</h2>
          <Slider {...settings}>
            {funcionarios.map(funcionario => (
              <div key={funcionario.id} className="team-member">
                <img src={funcionario.foto} alt={`Foto de ${funcionario.nome}`} />
                <h3>{funcionario.nome}</h3>
                <p>{funcionario.email}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="section">
      <div className="container">
        <h2>Nossa Missão</h2>
        <p>
          Nossa missão é simplificar a experiência de compra online, oferecendo acesso fácil e direto a informações detalhadas sobre produtos através de nossa plataforma integrada. Queremos capacitar nossos clientes com o conhecimento necessário para tomarem decisões informadas, garantindo satisfação e confiança em cada compra realizada conosco.
        </p>
        <p>
          Além disso, buscamos continuamente melhorar nossa plataforma e serviços, mantendo altos padrões de qualidade e inovação tecnológica. Estamos comprometidos em ser um parceiro confiável para todos que buscam praticidade, eficiência e transparência no comércio eletrônico.
        </p>
      </div>
    </section>
  </div>
);
};

export default Sobre;
