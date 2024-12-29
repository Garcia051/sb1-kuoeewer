import React from 'react';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <button className="sm:hidden p-2">
            <Menu className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold ml-2 sm:ml-0">ELEGANCE</h1>
        </div>
        
        <div className="hidden sm:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-black">Home</a>
          <a href="#" className="text-gray-700 hover:text-black">Men</a>
          <a href="#" className="text-gray-700 hover:text-black">Women</a>
          <a href="#" className="text-gray-700 hover:text-black">Collections</a>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2">
            <User className="h-5 w-5" />
          </button>
          <button className="p-2 relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}