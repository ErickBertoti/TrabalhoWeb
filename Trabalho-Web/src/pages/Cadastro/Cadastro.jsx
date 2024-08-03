import React, { useState } from 'react';
import './Cadastro.css';

const Cadastro = ({ onAddAluno }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim() === '' || email.trim() === '' || idade.trim() === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    setError('');
    setConfirm(true);
  };

  const handleConfirm = () => {
    const alunoData = { nome, email, idade };
    onAddAluno(alunoData); // Adiciona o aluno ao estado do componente pai

    setNome('');
    setEmail('');
    setIdade('');
    setSuccess('Dados enviados com sucesso!');
    setConfirm(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="contact-form">
      <h2>Cadastro de Aluno</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="idade">Idade:</label>
          <input
            type="number"
            id="idade"
            value={idade}
            onChange={(e) => setIdade(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {confirm && (
          <div className="confirmation">
            <p>Tem certeza de que os dados estão corretos?</p>
            <button type="button" onClick={handleConfirm}>Confirmar</button>
          </div>
        )}
        {success && <p className="success-message">{success}</p>}
        {!confirm && (
          <button type="submit">Enviar</button>
        )}
      </form>
    </div>
  );
};

export default Cadastro;
