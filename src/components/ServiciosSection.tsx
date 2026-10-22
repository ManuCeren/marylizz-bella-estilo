import { servicios } from "@/data/servicios";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";

export default function ServiciosSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          titulo="Nuestros Servicios"
          subtitulo="Realza tu belleza con nuestros servicios profesionales."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <ServiceCard
              key={servicio.id}
              nombre={servicio.nombre}
              categoria={servicio.categoria}
              descripcion={servicio.descripcion}
              precio={servicio.precio}
              duracion={servicio.duracion}
              imagen={servicio.imagen}
            />
          ))}
        </div>
      </div>
    </section>
  );
}