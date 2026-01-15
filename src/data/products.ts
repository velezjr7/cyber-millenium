import { Product } from "../../types";

/* 
  ----------------------------------------------------------------------------------
  SISTEMA DE IMÁGENES DINÁMICAS (VITE)
  ----------------------------------------------------------------------------------
  1. Esta función carga automáticamente todas las imágenes dentro de `src/assets/productos/`
     y sus subcarpetas.
  2. No necesitas hacer imports manuales arriba.
*/
const localImages = (import.meta as any).glob(
  "../assets/productos/**/*.{png,jpg,jpeg,webp,svg}",
  {
    eager: true,
    import: "default",
  }
);

/*
  Helper para obtener la URL de la imagen local.
  @param folder: Nombre de la carpeta del producto (ej: "laptop_gamer")
  @param filename: Nombre del archivo (ej: "1.jpg")
  @param fallback: URL de respaldo (opcional, por si no existe la imagen local aún)
*/
const getLocalImg = (
  folder: string,
  filename: string,
  fallback?: string
): string => {
  // Construimos la ruta relativa tal como la espera Vite
  const path = `../assets/productos/${folder}/${filename}`;

  // Verificamos si Vite encontró esa imagen
  const imageModule = localImages[path] as string;

  if (imageModule) {
    return imageModule;
  }

  // Si no encuentra la imagen local, usa el fallback o un placeholder genérico
  return fallback || "https://placehold.co/800x600?text=Imagen+No+Encontrada";
};

export const productos: Product[] = [
  {
    id: 1,
    nombre: "Laptop Gamer Xtreme",
    categoria: "Laptops",
    precio: 25999,
    descripcion:
      "Potencia bruta para gaming y renderizado. Diseñada para los usuarios más exigentes que buscan rendimiento sin compromisos en un formato portátil.",
    /* 
       EJEMPLO DE USO:
       Asegúrate de crear la carpeta: src/assets/productos/laptop_gamer/
       Y poner las fotos: 1.jpg, 2.jpg, 3.jpg, 4.jpg
    */
    imagenes: [
      getLocalImg(
        "laptop_gamer",
        "1.jpg",
        "https://images.unsplash.com/photo-1603302576837-6378864aaccd?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "laptop_gamer",
        "2.jpg",
        "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "laptop_gamer",
        "3.jpg",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "laptop_gamer",
        "4.jpg",
        "https://images.unsplash.com/photo-1593642632823-8f78536709c6?auto=format&fit=crop&q=80&w=800"
      ),
    ],
    specs: [
      "Procesador: Intel Core i7-13700H (14 núcleos)",
      "Tarjeta Gráfica: NVIDIA GeForce RTX 4060 8GB GDDR6",
      "Memoria RAM: 32GB DDR5 4800MHz",
      "Almacenamiento: 1TB SSD NVMe PCIe Gen4",
      'Pantalla: 15.6" FHD 144Hz IPS',
      "Sistema Operativo: Windows 11 Pro",
    ],
  },
  {
    id: 2,
    nombre: "PC Escritorio Pro Office",
    categoria: "Escritorio",
    precio: 12500,
    descripcion:
      "La solución ideal para tu oficina. Rápida, eficiente y silenciosa. Optimizada para multitarea y software de productividad.",
    imagenes: [
      getLocalImg(
        "pc_office",
        "1.jpg",
        "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "pc_office",
        "2.jpg",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "pc_office",
        "3.jpg",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "pc_office",
        "4.jpg",
        "https://images.unsplash.com/photo-1493723843684-a43684fd7615?auto=format&fit=crop&q=80&w=800"
      ),
    ],
    specs: [
      "Procesador: Intel Core i5-13400 (10 núcleos)",
      "Gráficos: Intel UHD Graphics 730",
      "Memoria RAM: 16GB DDR4 3200MHz",
      "Almacenamiento: 512GB SSD M.2 NVMe",
      "Conectividad: Wi-Fi 6 + Bluetooth 5.1",
      'Incluye: Monitor 24" FHD, Teclado y Mouse',
    ],
  },
  {
    id: 3,
    nombre: 'Monitor UltraWide 34"',
    categoria: "Monitores",
    precio: 8900,
    descripcion:
      "Expande tu visión con este monitor curvo. Ideal para programación, edición de video y experiencias inmersivas.",
    imagenes: [
      getLocalImg(
        "monitor_34",
        "1.jpg",
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "monitor_34",
        "2.jpg",
        "https://images.unsplash.com/photo-1551645120-d70bfe84c826?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "monitor_34",
        "3.jpg",
        "https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "monitor_34",
        "4.jpg",
        "https://images.unsplash.com/photo-1461151304267-38535e780c79?auto=format&fit=crop&q=80&w=800"
      ),
    ],
    specs: [
      "Panel: IPS Curvo 34 pulgadas",
      "Resolución: UWQHD (3440 x 1440)",
      "Tasa de refresco: 144Hz",
      "Tiempo de respuesta: 1ms (MPRT)",
      "Espacio de color: sRGB 99%",
      "Puertos: 2x HDMI 2.0, 2x DisplayPort 1.4",
    ],
  },
  {
    id: 4,
    nombre: "Kit Periféricos RGB",
    categoria: "Accesorios",
    precio: 2100,
    descripcion:
      "Lleva tu setup al siguiente nivel. Teclado mecánico, mouse de alta precisión y audífonos con cancelación de ruido. Todo con iluminación personalizable.",
    imagenes: [
      getLocalImg(
        "kit_rgb",
        "1.jpg",
        "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "kit_rgb",
        "2.jpg",
        "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "kit_rgb",
        "3.jpg",
        "https://images.unsplash.com/photo-1587829745563-14b96f6765b5?auto=format&fit=crop&q=80&w=800"
      ),
      getLocalImg(
        "kit_rgb",
        "4.jpg",
        "https://images.unsplash.com/photo-1589241062272-c0a000072dfa?auto=format&fit=crop&q=80&w=800"
      ),
    ],
    specs: [
      "Teclado: Mecánico Switch Blue, RGB configurable",
      "Mouse: Sensor óptico 16000 DPI, 6 botones programables",
      "Audífonos: Sonido 7.1 Virtual, Micrófono cardioide",
      "Alfombrilla: XL con bordes cosidos",
      "Conexión: USB Chapado en oro de alta durabilidad",
    ],
  },
  {
    id: 5,
    nombre: "Tinta Epson 664 Cyan",
    categoria: "Consumibles",
    precio: 190,
    descripcion:
      "Botella de tinta original Epson T664120 color cyan. Ideal para impresiones de alto rendimiento y calidad superior. Diseñada para proteger tu impresora y garantizar documentos nítidos.",
    imagenes: [getLocalImg("tinta_664", "cyan.webp")],
    specs: [
      "Color: Cyan",
      "Contenido: 70ml",
      "Rendimiento: Aprox. 4000 páginas",
      "Tipo: Tinta Dye",
      "Original: Sí",
    ],
    compatible: [
      "L110",
      "L120",
      "L200",
      "L210",
      "L220",
      "L300",
      "L310",
      "L350",
      "L355",
      "L365",
      "L375",
      "L380",
      "L395",
      "L396",
      "L455",
      "L475",
      "L495",
      "L555",
      "L565",
      "L575",
      "L1300",
    ],
  },
  {
    id: 6,
    nombre: "Tinta Epson 664 Negro",
    categoria: "Consumibles",
    precio: 190,
    descripcion:
      "Botella de tinta original Epson T664120 color negro. Ideal para impresiones de alto rendimiento y calidad superior. Diseñada para proteger tu impresora y garantizar documentos nítidos.",
    imagenes: [getLocalImg("tinta_664", "negra.webp")],
    specs: [
      "Color: Cyan",
      "Contenido: 70ml",
      "Rendimiento: Aprox. 4000 páginas",
      "Tipo: Tinta Dye",
      "Original: Sí",
    ],
    compatible: [
      "L110",
      "L120",
      "L200",
      "L210",
      "L220",
      "L300",
      "L310",
      "L350",
      "L355",
      "L365",
      "L375",
      "L380",
      "L395",
      "L396",
      "L455",
      "L475",
      "L495",
      "L555",
      "L565",
      "L575",
      "L1300",
    ],
  },
  {
    id: 8,
    nombre: "Tinta Epson 664 Amarilla",
    categoria: "Consumibles",
    precio: 190,
    descripcion:
      "Botella de tinta original Epson T664120 color amarilla. Ideal para impresiones de alto rendimiento y calidad superior. Diseñada para proteger tu impresora y garantizar documentos nítidos.",
    imagenes: [getLocalImg("tinta_664", "amarilla.webp")],
    specs: [
      "Color: Cyan",
      "Contenido: 70ml",
      "Rendimiento: Aprox. 4000 páginas",
      "Tipo: Tinta Dye",
      "Original: Sí",
    ],
    compatible: [
      "L110",
      "L120",
      "L200",
      "L210",
      "L220",
      "L300",
      "L310",
      "L350",
      "L355",
      "L365",
      "L375",
      "L380",
      "L395",
      "L396",
      "L455",
      "L475",
      "L495",
      "L555",
      "L565",
      "L575",
      "L1300",
    ],
  },
  {
    id: 7,
    nombre: "Tinta Epson 664 Magenta",
    categoria: "Consumibles",
    precio: 190,
    descripcion:
      "Botella de tinta original Epson T664120 color magenta. Ideal para impresiones de alto rendimiento y calidad superior. Diseñada para proteger tu impresora y garantizar documentos nítidos.",
    imagenes: [getLocalImg("tinta_664", "magenta.webp")],
    specs: [
      "Color: Cyan",
      "Contenido: 70ml",
      "Rendimiento: Aprox. 4000 páginas",
      "Tipo: Tinta Dye",
      "Original: Sí",
    ],
    compatible: [
      "L110",
      "L120",
      "L200",
      "L210",
      "L220",
      "L300",
      "L310",
      "L350",
      "L355",
      "L365",
      "L375",
      "L380",
      "L395",
      "L396",
      "L455",
      "L475",
      "L495",
      "L555",
      "L565",
      "L575",
      "L1300",
    ],
  },
];
