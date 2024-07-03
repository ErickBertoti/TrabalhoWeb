import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Produtos.css';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProdutos(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <div className="produtos">
      <h2>Nossos Produtos</h2>
      <div className="lista-produtos">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img src={produto.image} alt={produto.title} />
            <div className="produto-info">
              <h3>{produto.title}</h3>
              <p>{produto.description}</p>
              <p className="preco">R$ {produto.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;
