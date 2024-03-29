import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../styles/images/logo.png";
import Menu from "../Components/Menu";
import "../../styles/Unity.css";

const JuegosUnity = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Función para manejar la redirección al Museo de Ciencias de la Tierra
  const redirectToMuseum = () => {
    window.open("https://museo-ciencias.netlify.app/", "_blank");
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

      {/* Menú */}
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenuClick={() => {}}
        toggleMenu={toggleMenu}
      />

      {/* Simulación de Unity */}
      <div className="unity-simulation">
        <h2>Simulación del Museo de Ciencias de la Tierra</h2>
        <p>
          La simulación del Museo de Ciencias de la Tierra de la Universidad
          Central del Ecuador es una experiencia interactiva en línea que
          permite a los visitantes explorar y aprender sobre diversos aspectos
          relacionados con las ciencias de la Tierra.
        </p>
        <p>
          Cada sala está diseñada para brindar una experiencia educativa
          inmersiva, con exhibiciones interactivas, información detallada y
          recursos multimedia que ayudan a comprender mejor los conceptos
          científicos.
        </p>

      </div>

      <div className="redirect-button">
        <button onClick={redirectToMuseum}>
          Visitar el Museo de Ciencias de la Tierra
        </button>
      </div>

      <div className="containerunity">
        <div className="credits">
          <h2>Creado por:</h2>
          <div className="creators-gallery">
            <div className="creator">
              <p>Nombre: Steven Erraez</p>
              <p>Correo: seerraez@uce.edu.ec</p>
            </div>
          </div>
        </div>
        <div className="credits">
          
          <div className="creators-gallery">
            <div className="creator">
              <p>Nombre: Kevin Andrade</p>
              <p>Correo: kjandradec@uce.edu.ec</p>
            </div>
          </div>
        </div>
        <div className="credits">
          <div className="creators-gallery">
            <div className="creator">
              <p>Nombre: Edgar Teran</p>
              <p>Correo: ewteran@uce.edu.ec</p>
            </div>
          </div>
        </div>

      </div>
      <footer className="footer">
        <div className="contacto">
          <h2>Contacto</h2>
          <div className="redes-sociales">
            <a href="https://www.facebook.com">
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

export default JuegosUnity;
