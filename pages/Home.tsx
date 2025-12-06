import React from 'react';
import { PRODUCTS } from '../constants';
import { Product, ViewState } from '../types';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const trendingProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full bg-gray-100 overflow-hidden">
        <img 
          src="https://picsum.photos/seed/fashion_hero_99/1920/1080" 
          alt="New Collection" 
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/10 flex flex-col justify-end pb-24 pl-8 md:pl-24">
          <h2 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tight mb-4 drop-shadow-lg">
            New Season<br />Arrivals
          </h2>
          <button 
            onClick={() => onNavigate({ type: 'CATALOG' })}
            className="w-fit bg-white text-black px-8 py-3 uppercase tracking-widest font-bold text-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
            Shop Collection
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
          <div 
            className="relative h-full group cursor-pointer overflow-hidden"
            onClick={() => onNavigate({ type: 'CATALOG', category: PRODUCTS[0].category })}
          >
             <img src="https://picsum.photos/seed/fashion_w1/800/1000" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Women" />
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="bg-white/80 backdrop-blur-sm px-10 py-4 text-2xl font-bold uppercase tracking-widest">Women</span>
             </div>
          </div>
          <div className="flex flex-col gap-4 h-full">
            <div 
              className="relative h-1/2 group cursor-pointer overflow-hidden"
              onClick={() => onNavigate({ type: 'CATALOG', category: PRODUCTS[4].category })}
            >
              <img src="https://picsum.photos/seed/fashion_m3/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Men" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white/80 backdrop-blur-sm px-10 py-4 text-2xl font-bold uppercase tracking-widest">Men</span>
               </div>
            </div>
            <div 
              className="relative h-1/2 group cursor-pointer overflow-hidden"
              onClick={() => onNavigate({ type: 'CATALOG', category: PRODUCTS[8].category })}
            >
              <img src="https://picsum.photos/seed/fashion_k1/800/600" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Kids" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="bg-white/80 backdrop-blur-sm px-10 py-4 text-2xl font-bold uppercase tracking-widest">Kids</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Slider (Simple Grid for now) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-8">
           <h3 className="text-2xl font-bold uppercase tracking-widest">Trending Now</h3>
           <button onClick={() => onNavigate({ type: 'CATALOG' })} className="text-sm underline hover:text-gray-500 uppercase tracking-wider">View All</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {trendingProducts.map((product) => (
             <div key={product.id} className="group cursor-pointer" onClick={() => onNavigate({ type: 'PRODUCT', productId: product.id })}>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                   />
                   <button className="absolute bottom-0 w-full bg-black text-white py-3 uppercase text-xs font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     View Details
                   </button>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                     <h4 className="text-sm font-medium uppercase text-gray-900 group-hover:underline decoration-1 underline-offset-4">{product.name}</h4>
                     <p className="mt-1 text-sm text-gray-500 capitalize">{product.category.toLowerCase()}</p>
                   </div>
                   <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
                </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};
