import { productos } from "@/data/productos";
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

export default function ProductosSection() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">

        <SectionTitle
          titulo="Productos Disponibles"
          subtitulo="Productos recomendados para el cuidado de tu cabello."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productos.map((producto) => (
            <ProductCard
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
            />
          ))}
        </div>

      </div>
    </section>
  );
}