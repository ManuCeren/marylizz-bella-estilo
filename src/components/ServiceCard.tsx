type ServiceCardProps = {
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  duracion: number;
  imagen: string;
};

export default function ServiceCard({
  nombre,
  categoria,
  descripcion,
  precio,
  duracion,
  imagen,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      {/* Imagen */}
      <div className="h-80 flex items-center justify-center bg-white">
        <img
          src={imagen}
          alt={nombre}
          className="max-h-full max-w-full object-contain rounded-3xl object-cover shadow-xl"
        />
      </div>

      {/* Información */}
      <div className="p-6">
        <p className="text-sm text-pink-600 font-semibold mb-2">
          {categoria}
        </p>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {nombre}
        </h3>

        <p className="text-gray-600 text-sm mb-5">
          {descripcion}
        </p>

        <div className="flex justify-between items-center text-gray-600">
          <span>{duracion} min</span>
          <span className="font-bold text-pink-600 text-lg">
            ${precio}
          </span>
        </div>
      </div>

    </div>
  );
}