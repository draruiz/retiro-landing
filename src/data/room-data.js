export const rooms = [
  {
    id: "cabana-01",
    name: "Cabaña 01",
    description: "Espacio acogedor en medio de la naturaleza, con cama matrimonial, baño privado y vista al bosque. Perfecta para quienes buscan tranquilidad y conexión con la naturaleza.",
    price: "$1,500 USD",
    amenities: ["🛏️ Cama matrimonial", "🚿 Baño privado", "🌲 Vista al bosque", "📶 Wi-Fi"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  },
  {
    id: "cabana-02",
    name: "Cabaña 02",
    description: "Cabaña con ambiente cálido y rústico, ideal para desconectar del mundo exterior. Incluye cama queen size, baño completo y pequeña terraza privada.",
    price: "$1,550 USD",
    amenities: ["🛏️ Cama queen size", "🚿 Baño completo", "🪑 Terraza privada", "📶 Wi-Fi"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  },
  {
    id: "cabana-03",
    name: "Cabaña 03",
    description: "Refugio perfecto con excelente iluminación natural, cama king size y acabados en madera. Combina comodidad moderna con el encanto del entorno natural.",
    price: "$1,600 USD",
    amenities: ["🛏️ Cama king size", "🚿 Baño privado", "☀️ Excelente iluminación", "📶 Wi-Fi"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  },
  {
    id: "cabana-04",
    name: "Cabaña 04",
    description: "Espacio amplio y luminoso con decoración minimalista. Cuenta con zona de estar, cama king y baño con ducha de lluvia. Ideal para máxima relajación.",
    price: "$1,650 USD",
    amenities: ["🛏️ Cama king size", "🚿 Ducha de lluvia", "🪑 Zona de estar", "📶 Wi-Fi"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  },
  {
    id: "cabana-05",
    name: "Cabaña 05",
    description: "Cabaña premium con ventanales panorámicos, cama king y pequeño jacuzzi privado. La opción perfecta para quienes buscan confort y privacidad absoluta.",
    price: "$1,750 USD",
    amenities: ["🛏️ Cama king size", "🛁 Jacuzzi privado", "🪟 Ventanales panorámicos", "📶 Wi-Fi"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  }
];

export const premiumRooms = [
  {
    id: "plaza-suite",
    name: "Plaza Pan de Azúcar Suite",
    badge: "Premium",
    description: "Suite exclusiva con sala de estar separada, minibar, cama king premium y baño de lujo. Incluye acceso a áreas VIP y servicio personalizado durante todo el retiro.",
    price: "$1,850 USD",
    amenities: ["🛏️ Cama king premium", "🛁 Baño de lujo", "🍷 Minibar incluido", "🪑 Sala de estar privada", "⭐ Servicio VIP"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  },
  {
    id: "plaza-deluxe",
    name: "Plaza Pan de Azúcar Deluxe",
    badge: "Premium",
    description: "Habitación deluxe con balcón privado con vista a las montañas, cama king, bañera de hidromasaje y zona de meditación privada. Elegancia y confort supremo.",
    price: "$1,900 USD",
    amenities: ["🛏️ Cama king premium", "🛁 Hidromasaje", "🌄 Balcón con vista", "🧘 Zona de meditación", "⭐ Servicio VIP"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  },
  {
    id: "plaza-king",
    name: "Plaza Pan de Azúcar King",
    badge: "Premium Plus",
    description: "La experiencia más exclusiva. Suite king con terraza panorámica privada, jacuzzi exterior, sala de estar, comedor privado y mayordomo personal. Lujo y privacidad absoluta.",
    price: "$2,000 USD",
    amenities: ["🛏️ Suite king de lujo", "🛁 Jacuzzi exterior", "🌅 Terraza panorámica", "🍽️ Comedor privado", "👔 Mayordomo personal", "⭐ Servicio Premium Plus"],
    image: "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ff5f1858-bd96-4a10-c9f2-ef0a8409e700/public"
  }
];

export function getAllRooms() {
  return [...rooms, ...premiumRooms];
}
