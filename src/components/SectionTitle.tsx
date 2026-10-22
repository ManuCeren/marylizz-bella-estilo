type SectionTitleProps = {
  titulo: string;
  subtitulo: string;
};

export default function SectionTitle({ titulo, subtitulo }: SectionTitleProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        {titulo}
      </h2>

      <p className="text-gray-600">
        {subtitulo}
      </p>
    </div>
  );
}