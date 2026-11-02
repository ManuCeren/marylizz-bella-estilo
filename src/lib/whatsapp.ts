const WHATSAPP_NUMBER = "50369580876";

const mensajeCita =
  "Hola Marylizz Bella Estilo, me gustaría agendar una cita para uno de sus servicios.";

export const enlaceWhatsAppCita =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensajeCita)}`;

export function crearEnlaceProducto(nombre: string, precio: number) {
  const mensajeProducto =
    `Hola Marylizz Bella Estilo, me gustaría consultar por el producto ${nombre} de $${precio}.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    mensajeProducto
  )}`;
}

export function crearEnlacePromocion(titulo: string) {
  const mensaje =
    `Hola Marylizz Bella Estilo, me interesa la promoción de ${titulo}. ¿Podrían brindarme más información?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    mensaje
  )}`;
}