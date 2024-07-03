import React, { useState } from 'react';
import './Contato.css';

const Contato = () => {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || telefone.trim() === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um email válido.');
      return;
    }

    // Se chegou até aqui, não há erros
    setError('');
    setConfirm(true);
  };

  const handleConfirm = () => {
    // Salvando no Local Storage
    const contactData = { email, telefone };
    localStorage.setItem('contact', JSON.stringify(contactData));

    // Limpando os campos e mostrando sucesso
    setEmail('');
    setTelefone('');
    setSuccess('Dados enviados com sucesso!');
    setConfirm(false);
  };

  

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className="contact-form">
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
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
          <label htmlFor="telefone">Telefone:</label>
          <input
            type="text"
            id="telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
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

export default Contato;
