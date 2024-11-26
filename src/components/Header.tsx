import React, { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : ''
    }`}>
      <div className="mx-auto w-[80%] h-[120px]">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">4Bro AI Tools</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a>
            <a href="#tools" className="text-gray-600 hover:text-indigo-600">Tools</a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600">Testimonials</a>
            <a href="#download" className="text-gray-600 hover:text-indigo-600">Mobile App</a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[120px] left-0 w-full bg-white shadow-lg">
            <div className="flex flex-col p-4">
              <a href="#features" className="py-2 text-gray-600">Features</a>
              <a href="#tools" className="py-2 text-gray-600">Tools</a>
              <a href="#testimonials" className="py-2 text-gray-600">Testimonials</a>
              <a href="#download" className="py-2 text-gray-600">Mobile App</a>
              <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}