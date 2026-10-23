"use client";  

import { GiLipstick, GiEyelashes } from "react-icons/gi";
import { PiHairDryer } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { abrirWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section id="inicio" className="bg-pink-50 scroll-mt-24">
      <div className="container mx-auto px-6 pt-8 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/images/logo.png"
              alt="Logo Marylizz"
              className="mx-auto mb-5 h-44 w-44 object-contain"
            />

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
              <span className="text-pink-600">Marylizz</span>{" "}
              <span className="text-gray-900">Bella Estilo</span>
            </h1>

            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              La belleza a tu estilo
            </h2>

            <p className="text-gray-600 text-lg mb-8 max-w-xl">
              Consentir y cuidar tu cabello llenándolo de vida,
              haciéndolo único y especial.
            </p>

            <div className="flex flex-wrap gap-8 mb-8 text-gray-800">
              <div className="flex items-center gap-2">
                <PiHairDryer className="text-pink-600 text-2xl" />
                <span>Alisados</span>
              </div>

              <div className="flex items-center gap-2">
                <GiEyelashes className="text-pink-600 text-2xl" />
                <span>Pestañas</span>
              </div>

              <div className="flex items-center gap-2">
                <GiLipstick className="text-pink-600 text-2xl" />
                <span>Maquillaje</span>
              </div>

              <div className="flex items-center gap-1">
                <img
                  src="/images/icons/pedicura3.svg"
                  alt="Pedicura Spa"
                  className="h-8 w-8"
                />
                <span>Pedicura Spa</span>
              </div>
            </div>

            <div className="flex gap-5 flex-wrap">
              <button
                onClick={abrirWhatsApp}
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-xl text-lg"
                >
                Agendar Cita

              </button>

              <button onClick={abrirWhatsApp} className="flex items-center gap-2 border border-green-500 text-green-600 px-8 py-4 rounded-xl text-lg hover:bg-green-50">
                <FaWhatsapp />
                WhatsApp
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/galerias/43.jpeg"
              alt="Trabajo realizado"
              className="w-full max-w-sm rounded-3xl object-cover shadow-xl"
            />
          </div>
        </div>
      </div>
    </section >
  );
}
