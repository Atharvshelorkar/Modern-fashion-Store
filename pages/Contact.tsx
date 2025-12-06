import React from 'react';

export const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-bold uppercase tracking-widest mb-2 text-center">Contact Us</h1>
      <p className="text-gray-500 text-center mb-12">We are here to help. Send us a message.</p>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider">Name</label>
            <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider">Email</label>
            <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black transition-colors" />
          </div>
        </div>
        
        <div className="space-y-2">
           <label className="text-xs font-bold uppercase tracking-wider">Subject</label>
           <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black bg-transparent">
             <option>Order Inquiry</option>
             <option>Product Information</option>
             <option>Returns & Exchanges</option>
             <option>Other</option>
           </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider">Message</label>
          <textarea rows={5} className="w-full border border-gray-300 p-3 focus:outline-none focus:border-black transition-colors resize-none"></textarea>
        </div>

        <button className="bg-black text-white px-10 py-4 uppercase font-bold text-sm tracking-widest hover:bg-gray-800 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
};