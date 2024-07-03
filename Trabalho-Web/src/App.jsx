import './index.css'
import {BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produtos from './pages/Produtos'
import Contato from './pages/Contato'


//components
import NavBar from './componentes/NavBar';

function App() {
  

  return (
    <>

    <BrowserRouter>

    <NavBar />
    
    <Routes>

    <Route path='/' element={<Home />} />
    <Route path='/sobre' element={<Sobre />} />
    <Route path='/produtos' element={<Produtos />} />
    <Route path='/contato' element={<Contato />} />

    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
