import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../styles/images/logo.png";
import Menu from "../Components/Menu";
import "../../styles/Reservas.css";

const Reservas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="page">
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo del museo" className="logo" />
          <h1 className="dosis-font4">Universidad Central del Ecuador</h1>
        </div>
        <div className="menu-button" onClick={toggleMenu}>
          <FaBars />
        </div>
      </header>

      <Menu
        isMenuOpen={isMenuOpen}
        handleMenuClick={() => {}}
        toggleMenu={toggleMenu}
      />
      <iframe
        src="https://forms.office.com/pages/responsepage.aspx?id=Ky6ljCAddEKaE7127MuB0d9MAdIJyGNLozG4vkCk3VRUMldHR1lUOFJRT1ZFWjY5WktQNzQ5S1lFMS4u"
        width="100%"
        height="1000px"
        title="Reservas Form"
      />

      <footer className="footer">
        <div className="contacto">
          <h2>Contacto</h2>
          <div className="redes-sociales">
            <a href="www.facebook.com">
              <AiFillFacebook />
            </a>
          </div>
          <div className="informacion">
            <p>Correo electrónico: museo.figempa@uce.edu.ec</p>
            <p>Empresa: INGENIERIA EN GEOLOGIA MINAS PETROLEOS Y AMBIENTAL</p>
            <p>Departamento: Museo</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Reservas;
