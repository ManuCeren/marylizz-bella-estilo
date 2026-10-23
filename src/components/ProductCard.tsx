import { crearEnlaceProducto } from "@/lib/whatsapp";

type ProductCardProps = {
  nombre: string;
  precio: number;
  imagen: string;
};

export default function ProductCard({
  nombre,
  precio,
  imagen,
}: ProductCardProps) {

  const enlaceWhatsApp = crearEnlaceProducto(nombre, precio);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col">

      <img
        src={imagen}
        alt={nombre}
        className="w-full h-52 md:h-64 object-contain rounded-xl"
      />

      <div className="text-center mt-4">

        <h3 className="text-xl font-bold text-gray-800">
          {nombre}
        </h3>

        <p className="text-2xl font-bold text-pink-600 mt-2">
          ${precio}
        </p>

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