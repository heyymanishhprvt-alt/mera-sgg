
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="group">
          <Logo showText={true} size="sm" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className={`text-sm font-bold transition-colors ${isActive('/about') ? 'text-sky-600' : 'text-zinc-600 hover:text-sky-600'}`}>About Us</Link>
          <Link to="/features" className={`text-sm font-bold transition-colors ${isActive('/features') ? 'text-sky-600' : 'text-zinc-600 hover:text-sky-600'}`}>Features</Link>
          <Link to="/pricing" className={`text-sm font-bold transition-colors ${isActive('/pricing') ? 'text-sky-600' : 'text-zinc-600 hover:text-sky-600'}`}>Pricing</Link>
          <Link to="/contact" className={`text-sm font-bold transition-colors ${isActive('/contact') ? 'text-sky-600' : 'text-zinc-600 hover:text-sky-600'}`}>Contact</Link>
          <Link to="/login" className="text-sm font-bold text-zinc-600 hover:text-sky-600 transition-colors">Portal Login</Link>
          <Link to="/register" className="bg-sky-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-sky-600/10 hover:bg-sky-700 transition-all flex items-center gap-2">
            Start Free Trial <Rocket className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-zinc-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-zinc-700">About SGG</Link>
          <Link to="/features" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-zinc-700">Features</Link>
          <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-zinc-700">Pricing</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-zinc-700">Contact</Link>
          <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="font-bold text-zinc-700">School Login</Link>
          <Link to="/register" onClick={() => setIsMobileMenuOpen(false)} className="bg-sky-600 text-white p-4 rounded-xl text-center font-bold shadow-lg shadow-sky-600/10">
            Start Free Trial
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
