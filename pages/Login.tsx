import React, { useState } from 'react';
import { User } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const usersStr = localStorage.getItem('moda_users');
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];

    if (isLoginView) {
      // Login Logic
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        onLogin(user);
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup Logic
      if (!name) {
        setError('Please enter your name');
        return;
      }
      
      if (users.find(u => u.email === email)) {
        setError('An account with this email already exists');
        return;
      }

      const newUser: User = { email, password, name };
      users.push(newUser);
      localStorage.setItem('moda_users', JSON.stringify(users));
      onLogin(newUser);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-[0.2em] mb-2">MODA</h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Modern Fashion Store</p>
        </div>

        {/* Tabs */}
        <div className="flex mb-10 border-b border-gray-100">
          <button 
            className={`w-1/2 pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${isLoginView ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => { setIsLoginView(true); setError(''); }}
          >
            Log In
          </button>
          <button 
            className={`w-1/2 pb-4 text-sm font-bold uppercase tracking-widest transition-colors ${!isLoginView ? 'border-b-2 border-black text-black' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => { setIsLoginView(false); setError(''); }}
          >
            Register
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLoginView && (
            <div>
              <input 
                type="text" 
                placeholder="FULL NAME" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400"
              />
            </div>
          )}
          
          <div>
            <input 
              type="email" 
              placeholder="EMAIL" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400"
            />
          </div>

          <div>
            <input 
              type="password" 
              placeholder="PASSWORD" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-300 py-3 text-sm focus:outline-none focus:border-black transition-colors placeholder-gray-400"
            />
          </div>

          {error && (
            <div className="text-red-500 text-xs mt-2 uppercase tracking-wide font-medium">
              {error}
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-black text-white py-4 uppercase font-bold text-sm tracking-widest hover:bg-gray-800 transition-colors mt-8"
          >
            {isLoginView ? 'Log In' : 'Create Account'}
          </button>
        </form>

        {/* Helper Text */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            {isLoginView 
              ? "Don't have an account? Switch to Register to create one." 
              : "Already have an account? Switch to Log In."}
          </p>
        </div>
      </div>
    </div>
  );
};
