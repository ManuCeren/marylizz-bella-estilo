import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaTiktok,
} from "react-icons/fa";

import SectionTitle from "./SectionTitle";
import { enlaceWhatsAppCita } from "@/lib/whatsapp";

export default function ContactoSection() {
  return (
    <section id="contacto" className="py-20 bg-pink-50 scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          titulo="Contáctanos"
          subtitulo="Estamos listas para atenderte y ayudarte a lucir increíble."
        />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Información de contacto */}
          <div className="bg-white rounded-3xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Marylizz Bella Estilo
            </h3>

            <div className="space-y-5">
              {/* Teléfono 1 */}
              <a
                href="tel:+50370203282"
                className="flex items-center gap-4 text-gray-700 hover:text-pink-600 transition"
              >
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-semibold">7020 3282</p>
                </div>
              </a>

              {/* Teléfono 2 */}
              <a
                href="tel:+50369580876"
                className="flex items-center gap-4 text-gray-700 hover:text-pink-600 transition"
              >
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-semibold">6958 0876</p>
                </div>
              </a>

              {/* Ubicación */}
                <a
                href="https://maps.app.goo.gl/2Shjo51Nbx8Gc79c7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-700 hover:text-pink-600 transition"
                >
                <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                    <FaMapMarkerAlt />
                </div>

                <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold">Izalco, Sonsonate</p>
                    <p className="text-sm text-pink-600 font-medium mt-1">
                    Cómo llegar
                    </p>
                </div>
                </a>

                {/* Horario */}
                <div className="flex items-start gap-4 text-gray-700">
                    <div className="bg-pink-100 text-pink-600 p-3 rounded-full">
                        <FaClock />
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Horario de atención</p>

                        <p className="font-semibold">
                        Lunes a viernes
                        </p>
                        <p className="text-gray-600">
                        8:00 a. m. - 4:30 p. m.
                        </p>

                        <p className="font-semibold mt-2">
                        Sábado
                        </p>
                        <p className="text-gray-600">
                        8:00 a. m. - 4:00 p. m.
                        </p>

                        <p className="text-gray-500 text-sm mt-2">
                        Domingo: cerrado
                        </p>
                    </div>
                </div>
            </div>
          </div>

          

          {/* Redes sociales */}
          <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              Conecta con nosotras
            </h3>

            <p className="text-gray-600 mb-8">
              Escríbenos para consultar nuestros servicios, promociones o
              disponibilidad.
            </p>

            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={enlaceWhatsAppCita}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl transition"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/marylizzestilo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-4 rounded-xl transition"
              >
                <FaInstagram className="text-xl" />
                Instagram
              </a>
              {/* TikTok */}
            <a
                href="https://www.tiktok.com/@marylizz.bella"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-black hover:bg-gray-800 text-white font-semibold px-6 py-4 rounded-xl transition"
                >
                <FaTiktok className="text-xl" />
                    TikTok
            </a>

              {/* Facebook */}
                <a
                href="https://www.facebook.com/Marylizzbellaizalco?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-4 rounded-xl transition"
                >
                <FaFacebookF className="text-xl" />
                Facebook
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}