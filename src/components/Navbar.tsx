import React from 'react';
import { ShoppingCart, Menu, X, Server } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Server className="h-8 w-8 text-emerald-500" />
            <span className="ml-2 text-2xl font-bold text-gray-900">Ficksa</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-700 hover:text-emerald-500">Solutions</a>
            <a href="#features" className="text-gray-700 hover:text-emerald-500">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-500">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-500">Contact</a>
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#solutions" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Solutions</a>
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Pricing</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-500">Contact</a>
            <button className="w-full text-left bg-emerald-500 text-white px-3 py-2 rounded-md hover:bg-emerald-600">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;