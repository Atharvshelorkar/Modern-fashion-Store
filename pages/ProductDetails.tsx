import React, { useState } from 'react';
import { Product, CartItem, ViewState } from '../types';
import { ArrowLeft, Check, AlertCircle } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onNavigate: (view: ViewState) => void;
  onAddToCart: (item: CartItem) => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onNavigate, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [error, setError] = useState('');

  const handleAdd = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    setError('');
    onAddToCart({ ...product, selectedSize, quantity: 1 });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <button 
        onClick={() => onNavigate({ type: 'CATALOG', category: product.category })}
        className="flex items-center text-sm text-gray-500 mb-8 hover:text-black transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" />
        Back to {product.category}
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Image Gallery (Simplified to single image for demo) */}
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-4">{product.name}</h1>
          <p className="text-2xl font-medium mb-8">₹{product.price.toLocaleString('en-IN')}</p>

          <p className="text-gray-600 mb-8 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Size Selector */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-widest">Size</span>
              <span className="text-xs underline text-gray-500 cursor-pointer">Size Guide</span>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => { setSelectedSize(size); setError(''); }}
                  className={`
                    py-3 text-sm font-medium border transition-all duration-200
                    ${selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-black text-black'}
                  `}
                >
                  {size}
                </button>
              ))}
            </div>
            {error && (
              <div className="flex items-center text-red-500 text-sm mt-2">
                <AlertCircle size={14} className="mr-1" />
                {error}
              </div>
            )}
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-black text-white py-4 uppercase font-bold tracking-widest hover:bg-gray-800 transition-colors"
          >
            Add to Bag
          </button>

          <div className="mt-8 border-t border-gray-100 pt-6 text-xs text-gray-500 space-y-2">
            <p>REF: {product.id.toUpperCase()}-2024</p>
            <p className="flex items-center"><Check size={12} className="mr-1"/> Free Standard Shipping on orders over ₹2,500</p>
            <p className="flex items-center"><Check size={12} className="mr-1"/> 30-Day Returns Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};