import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <h3 className="uppercase tracking-widest font-bold text-sm mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer">Shop at MODA.com</li>
              <li className="hover:text-black cursor-pointer">Product Check</li>
              <li className="hover:text-black cursor-pointer">Payment</li>
              <li className="hover:text-black cursor-pointer">Shipping</li>
              <li className="hover:text-black cursor-pointer">Returns</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="uppercase tracking-widest font-bold text-sm mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer">Newsletter</li>
              <li className="hover:text-black cursor-pointer">Instagram</li>
              <li className="hover:text-black cursor-pointer">Facebook</li>
              <li className="hover:text-black cursor-pointer">Twitter</li>
              <li className="hover:text-black cursor-pointer">Pinterest</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="uppercase tracking-widest font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-black cursor-pointer">About Us</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Sustainability</li>
              <li className="hover:text-black cursor-pointer">Press</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="uppercase tracking-widest font-bold text-sm mb-4">Join The Club</h3>
            <p className="text-sm text-gray-500 mb-4">Subscribe to receive news about our latest collections and exclusive offers.</p>
            <div className="flex border-b border-black pb-2">
              <input type="email" placeholder="ENTER YOUR EMAIL" className="w-full focus:outline-none placeholder-gray-400 text-sm" />
              <button className="text-sm font-bold uppercase tracking-widest">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
           <p className="mb-4 md:mb-0">© 2024 MODA. All rights reserved.</p>
           <div className="flex space-x-6">
             <span>Privacy Policy</span>
             <span>Terms of Use</span>
             <span>Cookies Settings</span>
           </div>
        </div>
      </div>
    </footer>
  );
};