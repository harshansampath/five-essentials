
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group relative flex flex-col">
      <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex flex-col flex-grow">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold text-brand-charcoal">
            {product.name}
          </h3>
          <p className="text-lg font-medium text-brand-charcoal">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
        <div className="mt-auto pt-4">
            <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-brand-charcoal text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
            Add to Cart
            </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
