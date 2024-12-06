import React, { useState } from "react";
import { ProductData, categories } from "./Data.jsx";
import ProductCard from "./ProductCard.jsx";

const Modal = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            {product.name}
          </h2>
        </div>
        {/* Content */}
        <div className="space-y-2">
          <img
            src={product.img}
            alt={product.name}
            className="w-36 h-36 object-contain mx-auto"
          />
          <p className="text-sm">
            <strong>Kemasan:</strong> {product.Kemasan}
          </p>
          <p className="text-sm">
            <strong>Komposisi:</strong> {product.Komposisi}
          </p>
          <p className="text-sm">
            <strong>Indikasi:</strong> {product.Indikasi}
          </p>
          <p className="text-sm">
            <strong>NIE:</strong> {product.NIE}
          </p>
          <p className="text-sm">
            <strong>Sertifikasi Halal:</strong> {product.Sertf_halal}
          </p>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-primary text-white px-3 py-1 text-sm rounded-md hover:bg-primary-dark transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Product = () => {
  const [selectedCategory, setSelectedCategory] = useState("FARMA");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = ProductData.filter(
    (product) => product.category === selectedCategory
  );

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="py-10 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Menu */}
        <div className="text-left mt-10">
          <div className="flex flex-wrap gap-4 mt-8">
            {categories.map((category) => (
              <div key={category} className="flex">
                <h3
                  onClick={() => setSelectedCategory(category)}
                  className={`font-semibold text-lg sm:text-xl cursor-pointer rounded-md px-3 py-1 transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-secondary text-dark shadow-md"
                      : "hover:bg-secondary hover:text-dark"
                  }`}
                >
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {filteredProducts.map((product) => (
            <div key={product.id} onClick={() => openModal(product)}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <Modal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
};

export default Product;
