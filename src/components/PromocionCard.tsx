import { crearEnlacePromocion } from "@/lib/whatsapp";

type PromocionCardProps = {
  titulo: string;
  imagen: string;
  onVerImagen?: () => void;
};

export default function PromocionCard({
  titulo,
  imagen,
  onVerImagen,
}: PromocionCardProps) {
    const enlaceWhatsApp = crearEnlacePromocion(titulo);
  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      {/* Imagen de la promoción */}
      <button
        type="button"
        onClick={onVerImagen}
        className="w-full bg-pink-50 overflow-hidden cursor-pointer"
        aria-label={`Ver promoción ${titulo}`}
      >
        <img
          src={imagen}
          alt={titulo}
          className="w-full h-72 object-contain hover:scale-105 transition duration-300"
        />
      </button>

      {/* Información */}
      <div className="p-5 text-center flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800">
          {titulo}
        </h3>

        <a
          href={enlaceWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  );
}