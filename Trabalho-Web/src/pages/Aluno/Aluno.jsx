import React from 'react';
import './Aluno.css';

const Aluno = ({ alunos }) => {
  return (
    <div className="aluno-list">
      <h2>Lista de Alunos Cadastrados</h2>
      {alunos.length > 0 ? (
        alunos.map((aluno, index) => (
          <div className="aluno-item" key={index}>
            <strong>Nome:</strong>
            <span className="data">{aluno.nome}</span>
            <strong>Email:</strong>
            <span className="data">{aluno.email}</span>
            <strong>Idade:</strong>
            <span className="data">{aluno.idade}</span>
          </div>
        ))
      ) : (
        <p>Nenhum aluno cadastrado.</p>
      )}
    </div>
  );
};

export default Aluno;
