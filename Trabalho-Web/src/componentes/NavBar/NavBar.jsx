import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
   <nav className="navbar">

<NavLink to="/" className="brand">

<span>Atividade Diagnóstica</span>

</NavLink>

<ul>

<li>
    <NavLink to="/">
        Home
    </NavLink>
    
</li>

<li>
    <NavLink to="/cadastro">
        Cadastro
    </NavLink>
</li>

<li>
    <NavLink to="/aluno">
        Alunos
    </NavLink>
</li>

</ul>


   </nav>
  )
}

export default NavBar
