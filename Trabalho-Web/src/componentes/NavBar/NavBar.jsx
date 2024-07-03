import { NavLink } from "react-router-dom"

import './NavBar.css'

const NavBar = () => {
  return (
   <nav className="navbar">

<NavLink to="/" className="brand">

Trabalho  <span>React</span>

</NavLink>

<ul>

<li>
    <NavLink to="/">
        Home
    </NavLink>
    
</li>

<li>
    <NavLink to="/produtos">
        Produtos
    </NavLink>
</li>

<li>
    <NavLink to="/sobre">
        Sobre
    </NavLink>
</li>

<li>
    <NavLink to="/contato">
        Contato
    </NavLink>
</li>

</ul>


   </nav>
  )
}

export default NavBar
