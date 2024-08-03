import React, { useState } from 'react';
import './index.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/Home/Home';
import Aluno from './pages/Aluno/Aluno';
import Cadastro from './pages/Cadastro/Cadastro';
// Componentes
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';

function App() {
  // Estado para gerenciar a lista de alunos
  const [alunos, setAlunos] = useState([]);

  // Função para adicionar um novo aluno à lista
  const handleAddAluno = (novoAluno) => {
    setAlunos([...alunos, novoAluno]);
  };

  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/aluno" 
              element={<Aluno alunos={alunos} />} 
            />
            <Route 
              path="/cadastro" 
              element={<Cadastro onAddAluno={handleAddAluno} />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
