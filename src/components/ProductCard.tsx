type ProductCardProps = {
  nombre: string;
  precio: number;
};

export default function ProductCard({ nombre, precio }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {nombre}
      </h3>

      <p className="text-2xl font-bold text-pink-600">
        ${precio}
      </p>
    </div>
  );
}