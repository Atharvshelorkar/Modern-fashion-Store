import React, { useState } from 'react';
import { ViewState } from '../types';

interface CheckoutProps {
  onNavigate: (view: ViewState) => void;
  clearCart: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ onNavigate, clearCart }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center">
           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
             <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
             </svg>
           </div>
           <h2 className="text-3xl font-bold mb-2 uppercase tracking-wide">Order Confirmed</h2>
           <p className="text-gray-500 mb-8">Thank you for your purchase. We've sent a confirmation email.</p>
           <button 
             onClick={() => onNavigate({ type: 'HOME' })}
             className="bg-black text-white px-8 py-3 uppercase font-bold text-sm tracking-widest hover:bg-gray-800"
           >
             Continue Shopping
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 min-h-screen">
      <h1 className="text-2xl font-bold uppercase tracking-widest mb-8 text-center">Checkout</h1>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-200 pb-2">Shipping Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="First Name" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
            <input required placeholder="Last Name" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
          </div>
          <input required placeholder="Address" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
          <input required placeholder="City" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="Postal Code" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
            <input required placeholder="Country" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
          </div>
          <input required type="tel" placeholder="Phone" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black" />
        </div>

        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase border-b border-gray-200 pb-2">Payment</h2>
          <div className="bg-gray-50 p-6 rounded border border-gray-200">
             <div className="space-y-4">
               <input required placeholder="Card Number" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-white" />
               <div className="grid grid-cols-2 gap-4">
                 <input required placeholder="MM/YY" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-white" />
                 <input required placeholder="CVC" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-white" />
               </div>
               <input required placeholder="Cardholder Name" className="w-full border border-gray-300 p-3 text-sm focus:outline-none focus:border-black bg-white" />
             </div>
          </div>
          
          <button 
            type="submit" 
            disabled={isProcessing}
            className="w-full bg-black text-white py-4 uppercase font-bold tracking-widest hover:bg-gray-800 transition-colors disabled:bg-gray-400 mt-6"
          >
            {isProcessing ? 'Processing...' : 'Place Order'}
          </button>
        </div>
      </form>
    </div>
  );
};