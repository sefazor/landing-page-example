import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  const links = {
    Product: ['Features', 'Tools', 'Pricing', 'Documentation'],
    Company: ['About', 'Blog', 'Careers', 'Contact'],
    Resources: ['Community', 'Help Center', 'Status', 'Terms'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto w-[80%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">4Bro AI Tools</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering developers with intelligent AI tools for the modern era.
              Build faster, smarter, and more efficiently.
            </p>
          </div>
          
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} 4Bro AI Tools. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}