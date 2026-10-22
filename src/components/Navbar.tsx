export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo Marylizz"
            className="h-12 w-12 object-contain"
          />

          <h1 className="text-2xl font-bold text-pink-600">
            Marylizz
          </h1>
        </div>

        <ul className="hidden md:flex gap-8 font-semibold text-gray-800">
          <li className="text-pink-600 border-b-2 border-pink-600">Inicio</li>
          <li>Servicios</li>
          <li>Productos</li>
          <li>Galería</li>
          <li>Promociones</li>
          <li>Contacto</li>
        </ul>

        <button className="bg-pink-600 hover:bg-pink-700 text-white px-7 py-3 rounded-xl font-semibold">
          Agendar
        </button>
      </div>
    </nav>
  );
}