"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { enlaceWhatsAppCita } from "@/lib/whatsapp";

const opciones = [
  { nombre: "Inicio", href: "#inicio" },
  { nombre: "Servicios", href: "#servicios" },
  { nombre: "Productos", href: "#productos" },
  { nombre: "Galería", href: "#galeria" },
  { nombre: "Promociones", href: "#promociones" },
  { nombre: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <nav
      aria-label="Navegación principal"
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-3">

        {/* Logo */}
        <a
          href="#inicio"
          onClick={cerrarMenu}
          className="flex items-center gap-3"
        >
          <img
            src="/images/logo.png"
            alt="Logo Marylizz"
            className="h-12 w-12 object-contain"
          />

          <span className="text-2xl font-bold text-pink-600">
            Marylizz
          </span>
        </a>

        {/* Menú escritorio */}
        <ul className="hidden xl:flex gap-8 font-semibold text-gray-800">
          {opciones.map((opcion) => (
            <li key={opcion.nombre}>
              <a
                href={opcion.href}
                className="hover:text-pink-600 transition-colors"
              >
                {opcion.nombre}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">

          {/* Agendar */}
          <a
            href={enlaceWhatsAppCita}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-7 py-3 rounded-xl font-semibold"
          >
            Agendar
          </a>

          {/* Botón menú móvil */}
          <button
            type="button"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
            aria-controls="menu-movil"
            onClick={() => setMenuAbierto((estado) => !estado)}
            className="xl:hidden rounded-xl p-3 text-pink-600 hover:bg-pink-50 text-xl"
          >
            {menuAbierto ? (
              <FaTimes aria-hidden="true" />
            ) : (
              <FaBars aria-hidden="true" />
            )}
          </button>

        </div>
      </div>

      {/* Menú móvil */}
      {menuAbierto && (
        <div
          id="menu-movil"
          className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-pink-100 shadow-lg"
        >
          <ul className="px-6 py-4 font-semibold text-gray-800">
            {opciones.map((opcion) => (
              <li key={opcion.nombre}>
                <a
                  href={opcion.href}
                  onClick={cerrarMenu}
                  className="block rounded-xl px-4 py-3 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                >
                  {opcion.nombre}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}