import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../styles/images/logo.png";
import Menu from "../Components/Menu";
import "../../styles/Gamificacion.css";
import min1 from "../../styles/images/flecha.png";
import juego1 from "../../styles/images/juego1.png";
import juego2 from "../../styles/images/juego2.png";
import juego3 from "../../styles/images/juego3.png";
import ilus1 from "../../styles/images/ilus1.png";

const Gamificacion = () => {
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
      <div className="espacio"></div>
      <h1 className="dosis-font">Museo Ciencias de la Tierra</h1>
      <div className="espacio"></div>
      {/* Menú */}
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenuClick={() => {}}
        toggleMenu={toggleMenu}
      />
      <h2 className="dosis-gami">¿Qué es la gamificación?</h2>
      <section className="gamificacion-section">
        <img src={min1} className="flecha" alt="flecha"></img>
        <div className="text">
          <p>
            La gamificación es el uso de elementos y técnicas propias de los
            juegos en contextos ajenos al juego, como la educación o el trabajo,
            con el fin de motivar, enseñar, promover el compromiso y resolver
            problemas.
          </p>
        </div>
        <div style={{width:"10%",height:"100%", marginBottom:"18%"}}>
          <img src={ilus1} alt="ilustra uno" style={{width:"35%", height:"35%", position:"absolute",left:"55%"}}></img>
          <p className="text1">
            Ahora que entendemos la gamificación puedes aprender de los minerales de una forma interactiva donde tenemos tres juegos 
            para ti así que aprende y diviértete empecemos.
          </p>
        </div>
        <h3 className="dosis-gami2">Tipos de juegos</h3>
        <div className="juegos-container">
          <div className="juego">
            <h4>Juego de Preguntas</h4>
            <p>
             Desarrolla tus habilidades y conoce más de los minerales que existen en el Museo
            </p>
            <img src={juego1} style={{width:"80%",height:"50%",marginLeft:"10%", borderRadius:"10px"}} alt="juego 1"></img>
            <div className="espacio1"></div>
            <a className="juego-button" href="https://view.genial.ly/65da02a76ea5b60014f5ffcf/interactive-content-museo-ciencias-de-la-tierra">Jugar</a>
          </div>
          <div className="juego">
            <h4>Juego completa la palabra</h4>
            <p>
              Pon a prueba tu habilidad y pensamiento con este juego clásico de completar la palabra.
            </p>
            <img src={juego2} style={{width:"80%",height:"50%",marginLeft:"10%", borderRadius:"10px"}} alt="juego 2"></img>
            <div className="espacio1"></div>
            <a className="juego-button" href="https://view.genial.ly/65da7140bbb01e00148f8bf0/interactive-content-juego-ahorcado">Jugar</a>
          </div>
          <div className="juego">
            <h4>Juego de Estrategia</h4>
            <p>
              Elige tus movimientos sabiamente y derrota a tus oponentes en este
              emocionante juego de estrategia en descubriendo pistas.
            </p>
            <img src={juego3} style={{width:"80%",height:"50%",marginLeft:"10%", borderRadius:"10px"}} alt="juego 3"></img>
            <div className="espacio1"></div>
            <a className="juego-button" href="https://view.genial.ly/65db59aa6ea5b60014866b67/interactive-content-descubre-al-personaje">Jugar</a>
          </div>
        </div>
      </section>

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

export default Gamificacion;
