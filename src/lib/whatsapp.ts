const WHATSAPP_NUMBER = "50379699364";

const mensajeCita =
  "Hola Marylizz Bella Estilo, me gustaría agendar una cita para uno de sus servicios.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  mensajeCita
)}`;

export function abrirWhatsApp() {
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

export function crearEnlaceProducto(nombre: string, precio: number) {
  const mensajeProducto =
    `Hola Marylizz Bella Estilo, me gustaría consultar por el producto ${nombre} de $${precio}.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    mensajeProducto
  )}`;
}