import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login";
import Listado from "./components/asddsa/Listado";
import Detalle from "./components/vistas/detalle";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Resultados from "./components/resultados/resultados";

import './css/App.css'
import './css/bootstrap.min.css'

function App() {
  const addOrRemoveFromFavs = movieData => e =>{
    console.log(movieData)
  }
  return (
    <>
    <Header/>
    <div className="container mt-3">
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/listado" element={ <Listado addOrRemoveFromFavs={addOrRemoveFromFavs}  />} />
      <Route path="/detalle" element={<Detalle/>} />
      <Route path="/resultados" element={<Resultados/>} />
    </Routes>
    </div>
    <Footer/>
    </>
  )

}

export default App;
