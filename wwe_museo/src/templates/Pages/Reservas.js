import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import logo from "../../styles/images/logo.png";
import Menu from "../Components/Menu";
import "../../styles/Reservas.css";

const Reservas = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    phone: "",
    selectedHour: null,
  });
  const [reservationMessage, setReservationMessage] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleReservation = () => {
    // Verifica si todos los campos están completos
    const { name, email, phone, selectedHour } = reservationData;
    if (name && email && phone && selectedHour) {
      // Realiza la reserva
      if (selectedHour >= 9 && selectedHour < 16) {
        setReservationMessage(
          `¡Reserva exitosa para las ${selectedHour}:00!`
        );
      } else {
        setReservationMessage(
          `Lo sentimos, el museo está cerrado a las ${selectedHour}:00. Intente otra hora.`
        );
      }
    } else {
      setReservationMessage("Por favor complete todos los campos.");
    }
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

      <div className="reservation-section">
        <h2>Reservas</h2>
        <div className="reservation-form">
          <input
            type="text"
            placeholder="Nombre"
            name="name"
            value={reservationData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={reservationData.email}
            onChange={handleInputChange}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            name="phone"
            value={reservationData.phone}
            onChange={handleInputChange}
          />
          <select
            name="selectedHour"
            value={reservationData.selectedHour}
            onChange={(e) =>
              setReservationData({
                ...reservationData,
                selectedHour: parseInt(e.target.value),
              })
            }
          >
            <option value="">Seleccione una hora</option>
            {[9, 10, 11, 12, 13, 14, 15].map((hour) => (
              <option key={hour} value={hour}>
                {hour}:00
              </option>
            ))}
          </select>
          <button onClick={handleReservation}>Reservar</button>
          {reservationMessage && (
            <p className="reservation-message">{reservationMessage}</p>
          )}
        </div>
      </div>

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

export default Reservas;
