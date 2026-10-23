const mensaje =
  "Hola Marylizz Bella Estilo, me gustaría agendar una cita para uno de sus servicios.";

const whatsappUrl = `https://wa.me/50379699364?text=${encodeURIComponent(mensaje)}`;

export function abrirWhatsApp() {
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
