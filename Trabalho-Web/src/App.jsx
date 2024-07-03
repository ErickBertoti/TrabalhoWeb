import './index.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Páginas
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Produtos from './pages/Produtos/Produtos';
import Contato from './pages/Contato/Contato';

// Componentes
import NavBar from './componentes/NavBar/NavBar';
import Footer from './componentes/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
      </BrowserRouter>
      
      <Footer />
    </div>
  );
}

export default App;
