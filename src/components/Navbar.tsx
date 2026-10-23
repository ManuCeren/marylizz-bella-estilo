"use client";

import { useState, type MouseEvent } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { abrirWhatsApp } from "@/lib/whatsapp";

const opciones = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Servicios", href: "#servicios" },
  { nombre: "Productos", href: "#productos" },
  { nombre: "Galería", href: "#galeria" },
  { nombre: "Promociones", href: null },
  { nombre: "Contacto", href: null },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  function navegar(event: MouseEvent<HTMLAnchorElement>, href: string) {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const seccion = document.getElementById(href.slice(1));
    if (!seccion) return;
    event.preventDefault();
    setMenuAbierto(false);
    if (window.location.hash !== href) window.history.pushState(null, "", href);
    seccion.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  }

  function renderOpciones(movil = false) {
    return opciones.map(({ nombre, href }) => (
      <li key={nombre}>
        {href ? (
          <a
            href={href}
            onClick={(event) => navegar(event, href)}
            className={`${movil ? "block rounded-xl px-4 py-3 hover:bg-pink-50" : ""} hover:text-pink-600 transition-colors`}
          >
            {nombre}
          </a>
        ) : (
          <span aria-disabled="true" title="Próximamente" className={`${movil ? "block px-4 py-3" : ""} text-gray-400 cursor-default`}>
            {nombre}
          </span>
        )}
      </li>
    ));
  }

  return (
    <nav aria-label="Navegación principal" className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo Marylizz" className="h-12 w-12 object-contain" />
          <h1 className="text-2xl font-bold text-pink-600">Marylizz</h1>
        </div>
        <ul className="hidden xl:flex gap-8 font-semibold text-gray-800">
          {renderOpciones()}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => { setMenuAbierto(false); abrirWhatsApp(); }}
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-7 py-3 rounded-xl font-semibold"
          >
            Agendar
          </button>
          <button
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="xl:hidden rounded-xl p-3 text-pink-600 hover:bg-pink-50 text-xl"
          >
            {menuAbierto ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>
        </div>
      </div>
      <ul
        id="menu-movil"
        hidden={!menuAbierto}
        className="xl:hidden absolute top-full inset-x-0 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white border-t border-pink-100 shadow-md px-6 py-3 font-semibold text-gray-800"
      >
        {renderOpciones(true)}
      </ul>
    </nav>
  );
}
