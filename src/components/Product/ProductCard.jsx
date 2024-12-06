import React from "react";

const ProductCard = ({ product }) => (
  <div
    data-aos="zoom-in"
    data-aos-duration="300"
    className="rounded-xl bg-white hover:bg-Tertiary hover:text-white shadow-lg duration-300 group p-4 sm:p-6 w-full" id="Product"
  >
    <div className="h-[150px] flex justify-center items-center">
      <img
        src={product.img}
        alt={product.name}
        className="max-w-[140px] sm:max-w-[160px] lg:max-w-[180px] max-h-[140px] block mx-auto transform translate-y-4 group-hover:scale-110 group-hover:rotate-6 duration-300 object-contain"
      />
    </div>

    <div className="p-4 text-left">
      <h1 className="text-lg sm:text-xl font-semibold text-dark">
        {product.name}
      </h1>
      <p className="text-sm sm:text-lg font-medium text-dark line-clamp-2">
        {product.description}
      </p>
    </div>
  </div>
);

export default ProductCard;
