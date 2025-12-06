import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { Category, ViewState } from '../types';

interface NavbarProps {
  cartCount: number;
  onNavigate: (view: ViewState) => void;
  onSearch: (query: string) => void;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onNavigate, onSearch, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchValue);
    setIsSearchOpen(false);
    onNavigate({ type: 'CATALOG', searchQuery: searchValue });
  };

  const navLinkClass = "text-sm uppercase tracking-widest hover:text-gray-500 transition-colors cursor-pointer font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Links (Left) */}
          <div className="hidden md:flex space-x-8">
             <button onClick={() => onNavigate({ type: 'CATALOG', category: Category.WOMEN })} className={navLinkClass}>Women</button>
             <button onClick={() => onNavigate({ type: 'CATALOG', category: Category.MEN })} className={navLinkClass}>Men</button>
             <button onClick={() => onNavigate({ type: 'CATALOG', category: Category.KIDS })} className={navLinkClass}>Kids</button>
          </div>

          {/* Logo (Center) */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={() => onNavigate({ type: 'HOME' })}>
            <h1 className="text-2xl font-bold tracking-[0.2em]">MODA</h1>
          </div>

          {/* Icons (Right) */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 w-64">
                   <input 
                    autoFocus
                    type="text" 
                    placeholder="SEARCH" 
                    className="w-full border-b border-black py-1 px-2 text-sm focus:outline-none bg-transparent placeholder-gray-400"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onBlur={() => !searchValue && setIsSearchOpen(false)}
                   />
                </form>
              ) : (
                 <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:text-gray-500 transition-colors">
                  <Search size={20} />
                </button>
              )}
            </div>

            {/* User Menu */}
            <div className="relative hidden sm:block">
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                className="p-2 hover:text-gray-500 transition-colors"
              >
                <UserIcon size={20} />
              </button>
              
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 shadow-lg py-1 z-50">
                  <button 
                    onClick={() => { setIsUserMenuOpen(false); onNavigate({ type: 'CONTACT' }); }}
                    className="block w-full text-left px-4 py-3 text-xs uppercase tracking-wider hover:bg-gray-50"
                  >
                    My Account
                  </button>
                  <button 
                    onClick={() => { setIsUserMenuOpen(false); onLogout(); }}
                    className="block w-full text-left px-4 py-3 text-xs uppercase tracking-wider hover:bg-gray-50 text-red-500"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>

            <button onClick={() => onNavigate({ type: 'CART' })} className="p-2 hover:text-gray-500 transition-colors relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-black rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full h-screen left-0 top-16 px-4 py-6 flex flex-col space-y-6 z-40">
           <form onSubmit={handleSearchSubmit} className="relative">
              <input 
                type="text" 
                placeholder="SEARCH FOR ITEMS" 
                className="w-full bg-gray-100 p-3 text-sm focus:outline-none"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-3">
                <Search size={18} className="text-gray-400" />
              </button>
           </form>

           <div className="flex flex-col space-y-4">
             <button onClick={() => { setIsMenuOpen(false); onNavigate({ type: 'CATALOG', category: Category.WOMEN }); }} className="text-lg font-medium border-b border-gray-100 pb-2 text-left">WOMEN</button>
             <button onClick={() => { setIsMenuOpen(false); onNavigate({ type: 'CATALOG', category: Category.MEN }); }} className="text-lg font-medium border-b border-gray-100 pb-2 text-left">MEN</button>
             <button onClick={() => { setIsMenuOpen(false); onNavigate({ type: 'CATALOG', category: Category.KIDS }); }} className="text-lg font-medium border-b border-gray-100 pb-2 text-left">KIDS</button>
             <button onClick={() => { setIsMenuOpen(false); onNavigate({ type: 'CONTACT' }); }} className="text-lg font-medium border-b border-gray-100 pb-2 text-left">MY ACCOUNT</button>
             <button onClick={() => { setIsMenuOpen(false); onLogout(); }} className="text-lg font-medium border-b border-gray-100 pb-2 text-left text-red-500">LOG OUT</button>
           </div>
        </div>
      )}
    </nav>
  );
};
