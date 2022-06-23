import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar/NavBar";
import { Inicio } from "../components/inicio/Inicio";
import { AcercaDe } from "../components/acercaDe/AcercaDe";
import { Productos } from "../components/productos/Productos";
import { Contacto } from "../components/contacto/Contacto";
import { Footer } from "../components/Layout/footer/Footer";
import { ScrollToTop } from "../components/Layout/ScrollToTop";

export const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavBar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
