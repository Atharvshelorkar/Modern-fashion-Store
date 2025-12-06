import React, { useState, useEffect } from 'react';
import { ViewState, CartItem, Product, User } from './types';
import { PRODUCTS } from './constants';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { ProductDetails } from './pages/ProductDetails';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Contact } from './pages/Contact';
import { Login } from './pages/Login';

function App() {
  // Auth State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  
  // Navigation State
  const [view, setView] = useState<ViewState>({ type: 'HOME' });
  
  // Cart State with LocalStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('moda_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Check for session on mount
  useEffect(() => {
    const session = localStorage.getItem('moda_session');
    if (session) {
      setCurrentUser(JSON.parse(session));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('moda_cart', JSON.stringify(cart));
  }, [cart]);

  // Auth Handlers
  const handleLogin = (user: User) => {
    setCurrentUser(user);
    localStorage.setItem('moda_session', JSON.stringify(user));
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('moda_session');
    setView({ type: 'HOME' });
    setCart([]); // Optional: clear cart on logout
  };

  // Cart Handlers
  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id && i.selectedSize === item.selectedSize);
      if (existing) {
        return prev.map(i => 
          (i.id === item.id && i.selectedSize === item.selectedSize) 
            ? { ...i, quantity: i.quantity + item.quantity } 
            : i
        );
      }
      return [...prev, item];
    });
  };

  const updateQuantity = (id: string, size: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id && item.selectedSize === size) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string, size: string) => {
    setCart(prev => prev.filter(item => !(item.id === id && item.selectedSize === size)));
  };

  const clearCart = () => setCart([]);

  // Routing Handler
  const renderView = () => {
    switch (view.type) {
      case 'HOME':
        return <Home onNavigate={setView} />;
      case 'CATALOG':
        return (
          <Catalog 
            initialCategory={view.category} 
            searchQuery={view.searchQuery}
            onNavigate={setView} 
          />
        );
      case 'PRODUCT':
        const product = PRODUCTS.find(p => p.id === view.productId);
        return product ? (
          <ProductDetails 
            product={product} 
            onNavigate={setView} 
            onAddToCart={addToCart} 
          />
        ) : <div className="p-20 text-center">Product not found</div>;
      case 'CART':
        return (
          <Cart 
            items={cart} 
            onUpdateQuantity={updateQuantity} 
            onRemove={removeFromCart} 
            onNavigate={setView} 
          />
        );
      case 'CHECKOUT':
        return <Checkout onNavigate={setView} clearCart={clearCart} />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home onNavigate={setView} />;
    }
  };

  // If not logged in, show Login page
  if (!currentUser) {
    return <Login onLogin={handleLogin} />;
  }

  // Calculate total items for navbar badge
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex flex-col min-h-screen font-sans text-primary">
      <Navbar 
        cartCount={cartCount} 
        onNavigate={setView} 
        onSearch={(q) => setView({ type: 'CATALOG', searchQuery: q })}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow pt-0">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
}

export default App;
