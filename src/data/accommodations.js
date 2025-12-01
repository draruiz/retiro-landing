export const accommodations = [
  // ═══════════════════════════════════════════════════════════════════════════
  // CABAÑAS DOBLES - Cabañas 01, 02 y 04
  // Mismas amenities, capacidad para 2 personas
  // Cabaña 04 tiene jacuzzi grande, las demás jacuzzi de 2 puestos
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "cabana-doble",
    title: "Cabaña Doble",
    category: "Cabañas Compartidas",
    units: ["Cabaña 01", "Cabaña 02", "Cabaña 04 (Jacuzzi Grande)"],
    description:
      "Cabaña compartida ideal para parejas o viajeros individuales. Primer piso con cama doble de 1.60×1.90 m, segundo piso con cama sencilla de 1.20×1.90 m. Perfecta para disfrutar de la naturaleza con todas las comodidades. La Cabaña 04 cuenta con jacuzzi grande.",
    price: "$2,300 USD",
    priceSingle: "$2,000 USD",
    priceCouple: "$3,500 USD",
    priceLabel: "Cama doble / Cama sencilla / Parejas",
    amenities: [
      "🛏️ Cama doble 1.60 x 1.90 m",
      "♨️ Ducha agua caliente",
      "🔊 Bafle JBL",
      "🍳 Cocina totalmente equipada",
      "📺 TV (Netflix)",
      "🍖 Asador BBQ",
      "❄️ Aire acondicionado",
      "🚿 Baño privado",
      "📶 Wifi",
      "🛁 Jacuzzi (Grande en Cabaña 04)",
      "🌲 Vista al bosque",
      "🍷 Minibar",
      "🏕️ Malla catamarán",
      "🌀 Ventilador",
    ],
    images: [
      // Imágenes Cabaña 01
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/3c41f902-90c2-4467-3424-f606ba994c00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/28c0ac9f-3726-4c4d-5d20-288958c79e00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/15f56eee-7cbb-4232-ec89-dc46e8305200/public",
      // Imágenes Cabaña 02
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/77827f7f-f98b-426a-d343-f1b0aa70d700/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/aa55089d-aeec-45b8-2897-bef78759d000/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/6095cd71-3705-480a-bb00-0cef161b5500/public",
      // Imágenes Cabaña 04
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/15155a51-15c6-4c50-651c-5c25c3600500/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/25ef8b4f-5a87-431c-b96a-aef976f1dd00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/05e1f4ee-1196-4dc2-a2d0-2faef490e400/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/e9ceca7a-42f1-427a-e537-769756577700/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/c89db069-5df6-4e8a-8870-8161a5364500/public",
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CABAÑA FAMILIAR CON CAMAROTES - Cabaña 03
  // Cama king + camarotes (2 cupos)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "cabana-familiar-camarotes",
    title: "Cabaña Familiar con Camarotes",
    category: "Cabañas Compartidas",
    badge: "Familiar",
    units: ["Cabaña 03"],
    description:
      "Cabaña ideal para grupos. Cuenta con cama king y camarotes para mayor capacidad. Jacuzzi grande para disfrutar en grupo.",
    price: "$1,900 USD",
    priceBunk: "$1,700 USD",
    priceLabel: "Cama king / Cama sencilla / Camarote",
    inventoryNote: "2 cupos disponibles en camarotes",
    amenities: [
      "🛏️ Cama king",
      "🛏️ Cama sencilla",
      "🛏️ Camarotes (2 cupos)",
      "♨️ Ducha agua caliente",
      "🔊 Bafle JBL",
      "🍳 Cocina totalmente equipada",
      "📺 TV (Netflix)",
      "🍖 Asador BBQ",
      "❄️ Aire acondicionado",
      "🚿 Baño privado",
      "📶 Wifi",
      "🛁 Jacuzzi Grande",
      "🌲 Vista al bosque",
      "🍷 Minibar",
      "🏕️ Malla catamarán",
      "🌀 Ventilador",
    ],
    images: [
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/1e26f22d-100b-46f5-7ed0-2b7d644b0600/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/fbdbae5b-c89f-4c9e-0919-2ad160349d00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/7f8168a1-0b3f-445b-19b2-a9c416aef700/public",
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // CABAÑA FAMILIAR COMPLETA - Cabaña 05
  // Cama king + cama sencilla + camarotes (2 cupos)
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "cabana-familiar-completa",
    title: "Cabaña Familiar Completa",
    category: "Cabañas Compartidas",
    badge: "Más Capacidad",
    units: ["Cabaña 05"],
    description:
      "Nuestra cabaña con mayor capacidad. Cuenta con cama king, cama sencilla y camarotes adicionales. Perfecta para familias o grupos grandes. Jacuzzi grande incluido.",
    price: "$1,900 USD",
    priceSingle: "$1,500 USD",
    priceBunk: "$1,700 USD",
    priceLabel: "Cama king / Cama sencilla / Camarote",
    inventoryNote: "2 cupos disponibles en camarotes",
    amenities: [
      "🛏️ Cama king",
      "🛏️ Cama sencilla",
      "🛏️ Camarotes (2 cupos)",
      "♨️ Ducha agua caliente",
      "🔊 Bafle JBL",
      "🍳 Cocina totalmente equipada",
      "📺 TV (Netflix)",
      "🍖 Asador BBQ",
      "❄️ Aire acondicionado",
      "🚿 Baño privado",
      "📶 Wifi",
      "🛁 Jacuzzi Grande",
      "🌲 Vista al bosque",
      "🍷 Minibar",
      "🏕️ Malla catamarán",
      "🌀 Ventilador",
    ],
    images: [
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/df442dfb-5003-4cc7-4f03-fb25aa970200/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/710f3eb1-e6e8-4a5a-906a-50cc184cab00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/9813298a-10ca-4b19-3749-09cba37d4100/public",
    ],
  },
  {
    id: "suite-plaza",
    title: "Plaza Pan de Azúcar Suite",
    category: "Plazas Pan de Azúcar - Habitaciones Premium",
    badge: "La más exclusiva",
    description:
      "Suite exclusiva con sala de estar separada, minibar, cama king premium y baño de lujo. Incluye acceso a áreas VIP y servicio personalizado durante todo el retiro.",
    price: "$2,700 USD",
    priceCouple: "$3,700 USD",
    priceLabel: "1 persona / Pareja",
    amenities: [
      "🛏️ Cama doble 1.80 x 2.00 m",
      "📶 Wifi",
      "🏔️ Vista a la montaña",
      "🍷 Minibar",
      "🛁 Jacuzzi grande 4 plazas con agua caliente",
      "🚿 Baño privado",
      "📺 TV (Netflix)",
      "🔊 Bafle JBL",
      "❄️ Aire acondicionado",
      "♨️ Ducha con agua caliente",
    ],
    images: [
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/ad7b0dea-c15a-4f1d-772d-811bd07fbc00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/242c8a29-1dbe-4a4d-67cd-898009611000/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/fb615e59-b28a-41be-ea75-5e2e383ebb00/public",
    ],
  },
  {
    id: "deluxe-plaza",
    title: "Plaza Pan de Azúcar Deluxe",
    category: "Plazas Pan de Azúcar - Habitaciones Premium",
    badge: "Premium",
    description:
      "Habitación deluxe con balcón privado con vista a las montañas, cama king, bañera de hidromasaje y zona de meditación privada. Elegancia y confort supremo.",
    price: "$2,300 USD",
    priceCouple: "$3,500 USD",
    priceLabel: "1 persona / Pareja",
    amenities: [
      "🛏️ Cama doble 1.80 x 2.00 m",
      "📶 Wifi",
      "📺 TV (Netflix)",
      "🍷 Minibar",
      "❄️ Aire acondicionado",
      "🚿 Baño privado",
      "🏔️ Vista a la Montaña",
      "♨️ Ducha agua caliente",
      "🛁 Jacuzzi dos puestos",
    ],
    images: [
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/fb615e59-b28a-41be-ea75-5e2e383ebb00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/1690135b-3be5-4b68-c0f8-558211a2ae00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/d6ee0dc7-74ed-4262-be94-1db804284400/public",
    ],
  },
  {
    id: "king-plaza",
    title: "Plaza Pan de Azúcar King",
    category: "Plazas Pan de Azúcar - Habitaciones Premium",
    badge: "Premium",
    description:
      "Suite king con terraza panorámica privada, jacuzzi exterior, sala de estar y comedor privado. Lujo y privacidad absoluta.",
    price: "$2,300 USD",
    priceCouple: "$3,500 USD",
    priceLabel: "1 persona / Pareja",
    amenities: [
      "🛏️ Cama doble 1.80 x 2.00 m",
      "🌲 Vista al bosque",
      "📺 TV (Netflix)",
      "🍷 Minibar",
      "🚿 Baño privado",
      "♨️ Ducha agua caliente",
      "📶 Wifi",
      "❄️ Aire acondicionado",
    ],
    images: [
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/1f404887-c812-4366-0afe-26d681784e00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/16e074d4-65d3-4951-d92a-71222966f300/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/b23355fa-6f62-44d0-7501-98ac64d56200/public",
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // HABITACIONES COMPARTIDAS - 2 camas por habitación
  // 3 unidades disponibles: Habitación 01, 02 y 03
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "habitacion-compartida",
    title: "Habitación Compartida",
    category: "Habitaciones Compartidas",
    badge: "Opción económica",
    units: [
      "Habitación Compartida 01",
      "Habitación Compartida 02",
      "Habitación Compartida 03",
    ],
    description:
      "Habitación compartida ideal para quienes viajan solos o con un acompañante. Cada habitación cuenta con una cama de 1.60m y una cama de 1.20m. Perfecta para conectar con otros participantes del retiro.",
    price: "$1,800 USD",
    priceTwin: "$1,700 USD",
    priceLabel: "Cama 1.60m / Cama 1.20m",
    amenities: ["📶 Wifi", "🌿 Terraza privada"],
    images: [
      // Agregar imágenes cuando estén disponibles
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/14b4b15e-8af4-4d95-1e64-a64eb6d37a00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/14b4b15e-8af4-4d95-1e64-a64eb6d37a00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/e0efb77d-f26c-445a-9df5-73e4436f7b00/public",
    ],
  },
  // ═══════════════════════════════════════════════════════════════════════════
  // ARBOLEDA - Cabañas privadas en la naturaleza
  // Similar a Cabaña Doble pero más privado, a 4 minutos a pie
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: "arboleda",
    title: "Arboleda",
    category: "Cabañas Privadas",
    badge: "Más Privacidad",
    units: ["Arboleda 01", "Arboleda 02", "Arboleda 04 (Jacuzzi Grande)"],
    description:
      "Cabaña privada rodeada de naturaleza, ideal para quienes buscan mayor tranquilidad y conexión con el entorno. Ubicada a solo 4 minutos a pie del área principal. Primer piso con cama doble de 1.60×1.90 m, segundo piso con cama sencilla de 1.20×1.90 m. La Arboleda 04 cuenta con jacuzzi grande.",
    price: "$2,100 USD",
    priceSingle: "$1,800 USD",
    priceCouple: "$3,300 USD",
    priceLabel: "Cama doble / Cama sencilla / Parejas",
    amenities: [
      "🛏️ Cama doble 1.60 x 1.90 m",
      "♨️ Ducha agua caliente",
      "🔊 Bafle JBL",
      "🍳 Cocina totalmente equipada",
      "📺 TV (Netflix)",
      "🍖 Asador BBQ",
      "❄️ Aire acondicionado",
      "🚿 Baño privado",
      "📶 Wifi",
      "🛁 Jacuzzi (Grande en Arboleda 04)",
      "🌲 Vista al bosque",
      "🍷 Minibar",
      "🏕️ Malla catamarán",
      "🌀 Ventilador",
      "🚶 A 4 min a pie del área principal",
    ],
    images: [
      // Usar mismas imágenes que Cabaña Doble por ahora
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/3c41f902-90c2-4467-3424-f606ba994c00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/28c0ac9f-3726-4c4d-5d20-288958c79e00/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/15f56eee-7cbb-4232-ec89-dc46e8305200/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/77827f7f-f98b-426a-d343-f1b0aa70d700/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/aa55089d-aeec-45b8-2897-bef78759d000/public",
      "https://imagedelivery.net/B5r6pMfQRTYBHyjgaDFr8w/6095cd71-3705-480a-bb00-0cef161b5500/public",
    ],
  },
];
