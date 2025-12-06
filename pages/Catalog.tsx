import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Category, Product, ViewState } from '../types';
import { SlidersHorizontal } from 'lucide-react';

interface CatalogProps {
  initialCategory?: Category;
  searchQuery?: string;
  onNavigate: (view: ViewState) => void;
}

export const Catalog: React.FC<CatalogProps> = ({ initialCategory, searchQuery, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(initialCategory || 'All');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'new'>('new');
  
  // React to prop changes (basic implementation)
  React.useEffect(() => {
    if (initialCategory) setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const filteredProducts = useMemo(() => {
    let items = PRODUCTS;

    if (selectedCategory !== 'All') {
      items = items.filter(p => p.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      items = items.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }

    // Sort
    if (sortOrder === 'asc') {
      items = [...items].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      items = [...items].sort((a, b) => b.price - a.price);
    }
    
    return items;
  }, [selectedCategory, searchQuery, sortOrder]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-6 border-b border-gray-100">
        <div>
           <h2 className="text-3xl font-bold uppercase tracking-widest mb-2">
             {searchQuery ? `Results for "${searchQuery}"` : (selectedCategory === 'All' ? 'All Products' : selectedCategory)}
           </h2>
           <p className="text-sm text-gray-500">{filteredProducts.length} items</p>
        </div>

        <div className="flex gap-4 mt-4 md:mt-0 items-center">
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={16} />
            <span className="uppercase text-xs font-bold tracking-wider">Filter:</span>
          </div>
          
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
            className="text-sm bg-transparent focus:outline-none border-b border-gray-200 pb-1"
          >
            <option value="All">All Categories</option>
            <option value={Category.WOMEN}>{Category.WOMEN}</option>
            <option value={Category.MEN}>{Category.MEN}</option>
            <option value={Category.KIDS}>{Category.KIDS}</option>
          </select>

          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value as any)}
            className="text-sm bg-transparent focus:outline-none border-b border-gray-200 pb-1 ml-4"
          >
            <option value="new">Newest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-gray-500">No products found.</p>
          <button 
            onClick={() => { setSelectedCategory('All'); onNavigate({ type: 'CATALOG' }); }}
            className="mt-4 text-black underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {filteredProducts.map((product) => (
             <div key={product.id} className="group cursor-pointer" onClick={() => onNavigate({ type: 'PRODUCT', productId: product.id })}>
                <div className="aspect-[3/4] overflow-hidden bg-gray-100 mb-4 relative">
                   <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                   />
                </div>
                <div className="flex justify-between items-start">
                   <div className="pr-4">
                     <h4 className="text-sm font-medium uppercase text-gray-900 leading-tight">{product.name}</h4>
                   </div>
                   <p className="text-sm font-bold text-gray-900 shrink-0">${product.price.toFixed(2)}</p>
                </div>
             </div>
          ))}
        </div>
      )}
    </div>
  );
};
