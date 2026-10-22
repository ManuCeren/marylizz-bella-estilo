type Props = {
  titulo: string;
  antes: string;
  despues: string;
};

export default function AntesDespuesCard({
  titulo,
  antes,
  despues,
}: Props) {
  return (
    <div className="group bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2">
      <div className="grid grid-cols-2 overflow-hidden">
        <div className="relative overflow-hidden">
          <img
            src={antes}
            alt="Antes"
            className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 font-semibold">
            Antes
          </div>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={despues}
            alt="Después"
            className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute bottom-0 left-0 right-0 bg-pink-600/90 text-white text-center py-2 font-semibold">
            Después
          </div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-center text-gray-900 group-hover:text-pink-600 transition">
          {titulo}
        </h3>
      </div>
    </div>
  );
}