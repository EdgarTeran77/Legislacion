import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import { FaBars } from "react-icons/fa";

const Menu = ({ isMenuOpen, handleMenuClick, toggleMenu }) => {

  const handleClick = (option) => {
    handleMenuClick(option);
  };

  return (
    <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
      <h2>Menú</h2>
      <ul className="menu-list"> {/* Agregar una clase para aplicar estilos */}
        <li>
          <Link to="/" onClick={() => handleClick("Home")} className="botton">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/gamificacion" onClick={() => handleClick("Gamificacion")} className="botton">
            Gamificación
          </Link>
        </li>
        <li>
          <Link to="/juegos-unity" onClick={() => handleClick("JuegosenUnity")} className="botton">
            Juegos en Unity
          </Link>
        </li>
        <li>
          <Link to="/reservas" onClick={() => handleClick("Reservas")} className="botton">Reservas</Link>
        </li>
      </ul>
      <div className="menu-button" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Menu;
