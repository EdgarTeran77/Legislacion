import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet'; // Importa Helmet
import Home from './templates/Pages/Home';
import Gamificacion from './templates/Pages/Gamificacion';
import JuegosUnity from './templates/Pages/JuegosenUnity';
import Reservas from './templates/Pages/Reservas';

const App = () => {
  return (
    <Router>
      <Helmet>
        <title>Ciencias de la Tierra</title>
        <link rel="icon" type="image/png" href="./styles/images/tarro-antiguo.png" /> 
      </Helmet>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gamificacion" element={<Gamificacion />} />
        <Route path="/juegos-unity" element={<JuegosUnity />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
    </Router>
  );
};

export default App;
