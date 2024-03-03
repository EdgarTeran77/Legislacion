import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../styles/images/logo.png";
import min1 from "../../styles/images/min1.jpg";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "../../styles/Home.css";
import Menu from "../Components/Menu";
import Gallery from "../Components/Gallery";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current = L.map(mapContainerRef.current, {
      dragging: false,
      scrollWheelZoom: false,
    })
      .setView([-0.19791335497150978, -78.5054847776486], 15)
      .setMaxZoom(15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(mapRef.current);

    const customIcon = L.icon({
      iconUrl: "../../styles/images/marker.png", // Ruta a tu icono personalizado
      iconSize: [38, 38], // Tamaño del icono
      iconAnchor: [19, 38], // Punto de anclaje del icono
    });

    // Agregar marcador con el icono personalizado
    L.marker([-0.19787085957182324, -78.50550362576254], { icon: customIcon })
      .addTo(mapRef.current)
      .bindPopup("¡Aquí estoy!")
      .openPopup();
    // Limpiar el mapa al desmontar el componente
    return () => {
      mapRef.current.remove();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (option) => {
    console.log("Navegando a:", option);
    setIsMenuOpen(false);
  };

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot);
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
      <div className="section-container">
        <section>
          <h1 className="dosis-font">Museo Ciencias de la Tierra</h1>
          <img
            src={min1}
            alt="hola"
            style={{
              height: "30%",
              marginTop: "20px",
              borderRadius: "10px",
              width: "30%",
            }}
          />
        </section>
      </div>
      <div className="espacio"></div>
      <h1 className="dosis-font">Información</h1>
      <section className="content">
        <h2 className="dosis-font1">Quienes somos</h2>
        <div className="contenedor1">
          <p>
            El Museo de Ciencias de la Tierra de la Universidad Central del
            Ecuador (UCE) es un espacio dedicado a la promoción de la enseñanza
            y la comprensión de las ciencias de la tierra. Cuenta con una amplia
            colección de minerales, rocas, fósiles y otros materiales
            geológicos, así como con una serie de exposiciones interactivas que
            permiten a los visitantes aprender sobre la historia de la Tierra,
            los procesos geológicos y la importancia de los recursos naturales.
          </p>
        </div>
      </section>
      <div className="espacio"></div>
      <h1 className="dosis-font">Nuestros Minerales</h1>
      <div>
      <div className="espacio"></div>
        <Gallery />
      </div>
      <div className="espacio"></div>
      <h1 className="dosis-font">Horarios de Atención</h1>
      <div className="espacio"></div>
      <section className="horarios">
        <div
          className={`hora ${selectedSlot === 1 ? "selected" : ""}`}
          onClick={() => handleSlotClick(1)}
        >
          9:00 AM - 10:00 AM
        </div>
        <div
          className={`hora ${selectedSlot === 2 ? "selected" : ""}`}
          onClick={() => handleSlotClick(2)}
        >
          10:00 AM - 11:00 AM
        </div>
        <div
          className={`hora ${selectedSlot === 3 ? "selected" : ""}`}
          onClick={() => handleSlotClick(3)}
        >
          11:00 AM - 12:00 AM
        </div>
        <div
          className={`hora ${selectedSlot === 4 ? "selected" : ""}`}
          onClick={() => handleSlotClick(4)}
        >
          12:00 AM - 13:00 AM
        </div>
        <div
          className={`hora ${selectedSlot === 5 ? "selected" : ""}`}
          onClick={() => handleSlotClick(5)}
        >
          14:00 AM - 15:00 AM
        </div>
        <div
          className={`hora ${selectedSlot === 6 ? "selected" : ""}`}
          onClick={() => handleSlotClick(6)}
        >
          15:00 AM - 16:00 AM
        </div>
      </section>
      {selectedSlot && (
        <div className="message">
          {`Verificar en la sección de Reservas del menú, si la visita seleccionada de ${selectedSlot}:00 AM - ${
            selectedSlot + 1
          }:00 PM está disponible`}
        </div>
      )}
      <div className="espacio"></div>
      {/* Contenedor para el mapa */}
      <h1 className="dosis-font">Mapa</h1>
      <div ref={mapContainerRef} className="map-container"></div>
      <h1 className="dosis-font">Ubicación</h1>
      <div className="espacio"></div>
      <div className="contenedor2">
        <p>
          El Museo de Ciencias de la Tierra se encuentra ubicado en el tercer
          piso del edificio de la Facultad de Ingeniería en Geología, Minas,
          Petróleos y Ambiental de la Universidad Central del Ecuador, en Quito.
        </p>
      </div>
      <div className="espacio"></div>

      {/* Menú */}
      <Menu
        isMenuOpen={isMenuOpen}
        handleMenuClick={handleMenuClick}
        toggleMenu={toggleMenu}
      />

      <footer className="footer">
        <div className="contacto">
          <h2>Contacto</h2>
          <div className="redes-sociales">
            <a href="www.facebook.com">
              <AiFillFacebook />
            </a>
            {/* Resto de enlaces... */}
          </div>
          <div className="informacion">
            <p>Correo electrónico: info@museociencias.com</p>
            <p>Teléfono: +1234567890</p>
            <p>Dirección: Av. Principal #123, Ciudad, País</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
