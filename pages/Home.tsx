import React from 'react';
import { PRODUCTS } from '../constants';
import { Product, ViewState, Category } from '../types';

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
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="New Collection" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-end pb-24 pl-8 md:pl-24">
          <h2 className="text-white text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 drop-shadow-xl">
            Autumn<br />Editorial
          </h2>
          <button 
            onClick={() => onNavigate({ type: 'CATALOG' })}
            className="w-fit bg-white text-black px-10 py-4 uppercase tracking-widest font-bold text-sm hover:bg-black hover:text-white transition-colors duration-300"
          >
            Shop Collection
          </button>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-4 md:py-8 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[700px]">
          {/* Women's Large Card */}
          <div 
            className="relative h-[500px] md:h-full group cursor-pointer overflow-hidden"
            onClick={() => onNavigate({ type: 'CATALOG', category: Category.WOMEN })}
          >
             <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              alt="Women" 
             />
             <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
               <span className="bg-white/90 backdrop-blur-md px-12 py-4 text-xl md:text-2xl font-bold uppercase tracking-widest hover:bg-white transition-colors">Women</span>
             </div>
          </div>

          <div className="flex flex-col gap-4 h-full">
            {/* Men's Card */}
            <div 
              className="relative h-[300px] md:h-1/2 group cursor-pointer overflow-hidden"
              onClick={() => onNavigate({ type: 'CATALOG', category: Category.MEN })}
            >
              <img 
                src="https://images.unsplash.com/photo-1488161628813-99425205adca?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 object-top" 
                alt="Men" 
              />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                 <span className="bg-white/90 backdrop-blur-md px-12 py-4 text-xl md:text-2xl font-bold uppercase tracking-widest hover:bg-white transition-colors">Men</span>
               </div>
            </div>

            {/* Kids' Card */}
            <div 
              className="relative h-[300px] md:h-1/2 group cursor-pointer overflow-hidden"
              onClick={() => onNavigate({ type: 'CATALOG', category: Category.KIDS })}
            >
              <img 
                src="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt="Kids" 
              />
               <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                 <span className="bg-white/90 backdrop-blur-md px-12 py-4 text-xl md:text-2xl font-bold uppercase tracking-widest hover:bg-white transition-colors">Kids</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-end mb-10 border-b border-gray-100 pb-4">
           <h3 className="text-2xl font-bold uppercase tracking-widest">Trending Now</h3>
           <button onClick={() => onNavigate({ type: 'CATALOG' })} className="text-sm font-medium hover:text-gray-500 uppercase tracking-widest transition-colors">View All</button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {trendingProducts.map((product) => (
             <div key={product.id} className="group cursor-pointer" onClick={() => onNavigate({ type: 'PRODUCT', productId: product.id })}>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-6 relative">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                     <button className="bg-white text-black py-3 px-8 uppercase text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors w-full shadow-lg">
                       View Details
                     </button>
                   </div>
                </div>
                <div className="flex justify-between items-start">
                   <div>
                     <h4 className="text-sm font-bold uppercase text-gray-900 group-hover:underline decoration-1 underline-offset-4">{product.name}</h4>
                     <p className="mt-1 text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
                   </div>
                   <p className="text-sm font-medium text-gray-900">₹{product.price.toLocaleString('en-IN')}</p>
                </div>
             </div>
          ))}
        </div>
      </section>
    </div>
  );
};