import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Actualiza la importación
import Home from './templates/Pages/Home';
import Gamificacion from './templates/Pages/Gamificacion';
import JuegosUnity from './templates/Pages/JuegosenUnity';
import Reservas from './templates/Pages/Reservas';

const App = () => {
  return (
    <Router>
      <Routes> {/* Usa Routes en lugar de Switch */}
        <Route path="/" element={<Home />} />
        <Route path="/gamificacion" element={<Gamificacion />} />
        <Route path="/juegos-unity" element={<JuegosUnity />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </Router>
  );
};

export default App;
