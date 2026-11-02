import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Información del negocio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="Logo Marylizz Bella Estilo"
                className="w-14 h-14 rounded-full bg-white object-contain"
              />

              <div>
                <h3 className="text-xl font-bold">
                  Marylizz Bella Estilo
                </h3>

                <p className="text-pink-100 text-sm">
                  La belleza a tu estilo
                </p>
              </div>
            </div>

            <div className="space-y-3 text-pink-50">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt />
                <span>Izalco, Sonsonate</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>7020 3282</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt />
                <span>6958 0876</span>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Enlaces rápidos
            </h3>

            <nav className="grid grid-cols-2 gap-3 text-pink-50">
              <a href="#" className="hover:text-white hover:underline">
                Inicio
              </a>

              <a
                href="#servicios"
                className="hover:text-white hover:underline"
              >
                Servicios
              </a>

              <a
                href="#productos"
                className="hover:text-white hover:underline"
              >
                Productos
              </a>

              <a
                href="#galeria"
                className="hover:text-white hover:underline"
              >
                Galería
              </a>

              <a
                href="#promociones"
                className="hover:text-white hover:underline"
              >
                Promociones
              </a>

              <a
                href="#contacto"
                className="hover:text-white hover:underline"
              >
                Contacto
              </a>
            </nav>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-xl font-bold mb-5">
              Síguenos
            </h3>

            <p className="text-pink-100 mb-5">
              Conoce nuestros trabajos, promociones y novedades.
            </p>

            <div className="flex flex-wrap gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/50379699364"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-green-500 flex items-center justify-center transition"
              >
                <FaWhatsapp className="text-xl" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/marylizzestilo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-pink-500 flex items-center justify-center transition"
              >
                <FaInstagram className="text-xl" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@marylizz.bella"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-black flex items-center justify-center transition"
              >
                <FaTiktok className="text-xl" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Marylizzbellaizalco?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 rounded-full bg-white/15 hover:bg-blue-600 flex items-center justify-center transition"
              >
                <FaFacebookF className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 py-5 text-center text-sm text-pink-100">
          © 2026 Marylizz Bella Estilo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}