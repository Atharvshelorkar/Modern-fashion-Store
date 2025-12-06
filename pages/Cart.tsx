import React from 'react';
import { CartItem, ViewState } from '../types';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, size: string, delta: number) => void;
  onRemove: (id: string, size: string) => void;
  onNavigate: (view: ViewState) => void;
}

export const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, onNavigate }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.99;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold uppercase tracking-widest mb-4">Your Bag is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added anything to your bag yet.</p>
        <button 
          onClick={() => onNavigate({ type: 'CATALOG' })}
          className="bg-black text-white px-8 py-3 uppercase font-bold text-sm tracking-widest hover:bg-gray-800"
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-12">Shopping Bag ({items.length})</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Cart Items List */}
        <div className="flex-grow">
          <div className="space-y-8">
            {items.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 border-b border-gray-100 pb-8">
                <div className="w-24 h-32 bg-gray-100 shrink-0 overflow-hidden cursor-pointer" onClick={() => onNavigate({ type: 'PRODUCT', productId: item.id })}>
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold uppercase tracking-wide text-sm mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-1">Size: {item.selectedSize}</p>
                      <p className="text-sm text-gray-500">Ref: {item.id.toUpperCase()}</p>
                    </div>
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-gray-200">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                        className="p-1 hover:bg-gray-50 text-gray-600"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-4 text-sm font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                        className="p-1 hover:bg-gray-50 text-gray-600"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => onRemove(item.id, item.selectedSize)}
                      className="text-gray-400 hover:text-red-500 transition-colors text-sm underline decoration-1 underline-offset-4"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96 shrink-0">
          <div className="bg-gray-50 p-8 sticky top-24">
            <h2 className="text-lg font-bold uppercase tracking-widest mb-6">Summary</h2>
            
            <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-lg uppercase">Total</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>

            <button 
              onClick={() => onNavigate({ type: 'CHECKOUT' })}
              className="w-full bg-black text-white py-4 uppercase font-bold text-sm tracking-widest hover:bg-gray-800 transition-colors flex justify-center items-center group"
            >
              Checkout <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
