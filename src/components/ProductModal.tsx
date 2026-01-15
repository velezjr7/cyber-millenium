import React, { useState } from "react";
import { Product } from "../../types";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.imagenes.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.imagenes.length) % product.imagenes.length
    );
  };

  // Configuración de WhatsApp
  const mainNumber = "523467006636"; // Número principal de whatsapp
  const message = encodeURIComponent(
    `Hola, estoy interesado en obtener más información sobre el producto: ${product.nombre}`
  );
  const whatsappUrl = `https://wa.me/${mainNumber}?text=${message}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-scale-in">
        {/* Close Button Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Left Side: Image Gallery */}
        <div className="w-full md:w-1/2 bg-gray-100 relative h-64 md:h-auto group">
          <img
            src={product.imagenes[currentImageIndex]}
            alt={product.nombre}
            className="w-full h-full object-cover"
          />

          {/* Navigation */}
          {product.imagenes.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {product.imagenes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`h-2 rounded-full transition-all shadow-sm ${
                  idx === currentImageIndex
                    ? "w-6 bg-cyber-600"
                    : "w-2 bg-white"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="w-full md:w-1/2 p-6 md:p-8 lg:p-10 overflow-y-auto bg-white flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-cyber-100 text-cyber-700 mb-2">
                {product.categoria}
              </span>
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                {product.nombre}
              </h2>
            </div>
            {/* Close Button Desktop */}
            <button
              onClick={onClose}
              className="hidden md:block text-slate-400 hover:text-slate-600 transition-colors p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="text-3xl font-bold text-cyber-600 mb-6">
            ${product.precio.toLocaleString("es-MX")}
          </div>

          <div className="prose prose-slate mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Descripción
            </h3>
            <p className="text-slate-600 leading-relaxed">
              {product.descripcion}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Especificaciones Técnicas
            </h3>
            <ul className="space-y-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-start text-slate-600">
                  <svg
                    className="w-5 h-5 text-cyber-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Compatibility Section - Only shows if compatible array exists and is not empty */}
          {product.compatible && product.compatible.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                Compatibilidad
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.compatible.map((item, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium border border-slate-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-auto pt-6 border-t border-gray-100">
            <div className="flex gap-4 mb-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-cyber-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-cyber-200 hover:bg-cyber-700 hover:shadow-xl transition-all transform active:scale-95 text-center flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.884.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.982zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-8.68-2.03-.967-.272-.297-.471-.446-.918-.446-.446 0-.967.174-1.488.744-.52.57-1.981 1.933-1.981 4.721 0 2.787 2.031 5.483 2.304 5.88.272.396 3.984 6.111 9.78 8.441 3.834 1.541 4.613 1.237 5.405 1.162.793-.075 1.758-.718 2.006-1.413.248-.694.248-1.289.174-1.413z" />
                </svg>
                Contactar Ventas
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
                Cerrar
              </button>
            </div>
            <p className="text-xs text-center text-slate-400">
              O contáctanos a los números alternativos: 346 100 6459 / 346 112
              9280
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
