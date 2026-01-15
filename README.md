# Cyber Millenium - Catálogo Web

Aplicación web informativa y catálogo de productos para el negocio de computación "Cyber Millenium". Desarrollada con tecnologías modernas para garantizar velocidad, diseño responsivo y facilidad de mantenimiento.

## 🚀 Tecnologías Utilizadas

- **React 18+**: Biblioteca de interfaz de usuario.
- **Vite**: Empaquetador y entorno de desarrollo ultra rápido.
- **TypeScript**: Tipado estático para mayor robustez en el código.
- **Tailwind CSS**: Framework de utilidades para el diseño y estilos (paleta de colores personalizada `cyber`).
- **Heroicons**: Iconografía SVG ligera.

## 📋 Requisitos Previos

Asegúrate de tener instalado **Node.js** (versión 16 o superior) en tu computadora.

## 🛠️ Instalación y Uso

1.  **Clonar el repositorio** (o descargar los archivos):

    ```bash
    git clone <tu-repositorio-url>
    cd cyber-millenium
    ```

2.  **Instalar dependencias**:

    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible generalmente en `http://localhost:5173`.

## 📦 Gestión de Productos

El catálogo funciona con una base de datos local (un archivo estático). No se requiere configuración de backend ni bases de datos externas.

### Agregar o Editar Productos

1.  Abre el archivo `src/data/products.ts`.
2.  Agrega un nuevo objeto al array `productos`.
3.  Sigue esta estructura:

```typescript
{
  id: 6, // ID único
  nombre: "Nombre del Producto",
  categoria: "Laptops", // Categoría para el filtro (Laptops, Escritorio, Accesorios, etc.)
  precio: 1500,
  descripcion: "Descripción detallada del producto.",
  imagenes: [
    // Rutas a imágenes o URLs externas
    "/assets/productos/mi_producto_1.jpg",
    "/assets/productos/mi_producto_2.jpg"
  ],
  specs: [
    "Procesador Intel i5",
    "8GB RAM",
    "256GB SSD"
  ],
  // Opcional: Lista de compatibilidad (útil para tintas o repuestos)
  compatible: ["Modelo Impresora A", "Modelo Impresora B"]
}
```

### Manejo de Imágenes Locales

Para usar tus propias fotos:

1.  Crea una carpeta en `public/assets/productos/` (recomendado para facilidad) o en `src/assets/productos/`.
2.  Si las pones en `public/`, la ruta en el código será simplemente: `"/assets/productos/foto.jpg"`.
3.  Asegúrate de que las imágenes tengan buena resolución pero estén optimizadas para web (formato WebP o JPG comprimido).

## 🎨 Personalización

- **Colores**: La paleta de colores azul ("Cyber") está definida en `index.html` dentro de la configuración de Tailwind (`tailwind.config`).
- **Contacto**: La información de dirección, teléfonos y correos se encuentra en `src/components/Contact.tsx` y en `src/components/ProductModal.tsx` (para el botón de WhatsApp).

## 🚢 Construcción para Producción

Para generar los archivos finales optimizados para subir a un hosting (como Vercel, Netlify o un hosting compartido):

```bash
npm run build
```

Esto creará una carpeta `dist/` con todo el código minificado listo para publicar.

## 📱 Funcionalidades Clave

- **Navegación SPA**: Navegación instantánea entre pestañas sin recargar la página.
- **Filtrado Dinámico**: Categorización automática basada en los datos ingresados.
- **Modales de Detalle**: Vista expandida de productos con carrusel de imágenes.
- **Integración WhatsApp**: Botones de contacto directo con mensaje predefinido.
- **Diseño Responsivo**: Adaptado perfectamente a móviles, tablets y escritorio.

---

Desarrollado para **Cyber Millenium** - Nochistlán, Zac.
