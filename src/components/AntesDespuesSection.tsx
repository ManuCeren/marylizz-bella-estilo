import SectionTitle from "./SectionTitle";
import AntesDespuesCard from "./AntesDespuesCard";
import { antesDespues } from "@/data/antesDespues";

export default function AntesDespuesSection() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="container mx-auto px-6">

        <SectionTitle
          titulo="Antes y Después"
          subtitulo="Resultados reales de nuestros clientes."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {antesDespues.map((item) => (
            <AntesDespuesCard
              key={item.id}
              titulo={item.titulo}
              antes={item.antes}
              despues={item.despues}
            />
          ))}
        </div>

      </div>
    </section>
  );
}