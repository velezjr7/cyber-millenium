import React, { useState, useMemo } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { productos } from "../data/products";
import { Product } from "../../types";

const ProductList: React.FC = () => {
  const [filter, setFilter] = useState("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = useMemo(() => {
    const cats = productos.map((p) => p.categoria);
    return ["Todos", ...new Set(cats)];
  }, []);

  const filteredProducts = useMemo(() => {
    if (filter === "Todos") return productos;
    return productos.filter((p) => p.categoria === filter);
  }, [filter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Nuestros Productos
        </h2>
        <p className="mt-2 text-slate-600">
          Explora nuestro catálogo de equipos y accesorios de alta gama.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat
                ? "bg-cyber-600 text-white shadow-md"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={setSelectedProduct}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-slate-500">
          No se encontraron productos en esta categoría.
        </div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
