import React, { useState } from "react";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onViewDetails,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % product.imagenes.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.imagenes.length) % product.imagenes.length
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full group">
      {/* Image Carousel */}
      <div
        className="relative h-64 w-full bg-gray-100 overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}>
        {product.imagenes.length > 0 ? (
          <img
            src={product.imagenes[currentImageIndex]}
            alt={`${product.nombre} vista ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Sin imagen
          </div>
        )}

        {/* Navigation Arrows */}
        {product.imagenes.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
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
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
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
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}

        {/* Indicators */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {product.imagenes.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="absolute top-2 right-2 bg-cyber-600 text-white text-xs font-bold px-2 py-1 rounded shadow-sm uppercase tracking-wide">
          {product.categoria}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3
          className="text-lg font-bold text-slate-800 mb-2 cursor-pointer hover:text-cyber-600 transition-colors"
          onClick={() => onViewDetails(product)}>
          {product.nombre}
        </h3>
        <p className="text-sm text-slate-600 mb-4 flex-grow line-clamp-3">
          {product.descripcion}
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
          <span className="text-2xl font-bold text-cyber-700">
            ${product.precio.toLocaleString("es-MX")}
          </span>
          <button
            onClick={() => onViewDetails(product)}
            className="bg-cyber-50 text-cyber-700 px-3 py-1.5 rounded-lg text-sm font-semibold hover:bg-cyber-100 transition-colors">
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
