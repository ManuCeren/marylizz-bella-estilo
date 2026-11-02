"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { promociones } from "@/data/promociones";
import PromocionCard from "./PromocionCard";
import SectionTitle from "./SectionTitle";

export default function PromocionesSection() {
  // Mostrar únicamente las promociones que tengan activa: true
  const promocionesActivas = promociones.filter(
    (promocion) => promocion.activa
  );

  const [promocionSeleccionada, setPromocionSeleccionada] = useState<
    number | null
  >(null);

  return (
    <>
      <section
        id="promociones"
        className="py-20 bg-white scroll-mt-24"
      >
        <div className="container mx-auto px-6">
          <SectionTitle
            titulo="Promociones Especiales"
            subtitulo="Aprovecha nuestras promociones y consiente tu belleza con Marylizz Bella Estilo."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promocionesActivas.map((promocion, index) => (
              <PromocionCard
                key={promocion.id}
                titulo={promocion.titulo}
                imagen={promocion.imagen}
                onVerImagen={() => setPromocionSeleccionada(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {promocionSeleccionada !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8"
          onClick={() => setPromocionSeleccionada(null)}
        >
          {/* Cerrar */}
          <button
            type="button"
            onClick={() => setPromocionSeleccionada(null)}
            className="absolute top-5 right-5 z-10 text-white text-3xl hover:text-pink-400 transition"
            aria-label="Cerrar promoción"
          >
            <FaTimes />
          </button>

          {/* Promoción ampliada */}
          <div
            className="max-w-5xl w-full flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={promocionesActivas[promocionSeleccionada].imagen}
              alt={promocionesActivas[promocionSeleccionada].titulo}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />

            <h3 className="text-white text-xl md:text-2xl font-bold text-center mt-4">
              {promocionesActivas[promocionSeleccionada].titulo}
            </h3>
          </div>
        </div>
      )}
    </>
  );
}