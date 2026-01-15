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
    id: 2,
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
    id: 3,
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
    id: 4,
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
