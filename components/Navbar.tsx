
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Modelos', path: '/modelos' },
    { label: 'Agência', path: '/agencia' },
    { label: 'Boates', path: '/boates' },
    { label: 'Contatos', path: '/contatos' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border border-white/5 rounded-full shadow-2xl mx-4 md:mx-auto' : 'bg-transparent'}`}>
        {/* Logo as Text as requested */}
        <Link to="/" className="flex items-center group">
          <span className={`font-black uppercase tracking-[0.2em] transition-all duration-500 font-heading ${scrolled ? 'text-lg' : 'text-xl md:text-2xl'}`}>
            MORENA <span className="gold-gradient italic">BRUTA</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center text-[10px] font-bold uppercase tracking-widest">
          {navLinks.map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`hover:text-gold transition-colors relative group py-2 ${
                location.pathname === item.path ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full transition-all duration-300 ${location.pathname === item.path ? 'opacity-100' : 'opacity-0'}`}></span>
            </Link>
          ))}
          <Link to="/modelos" className="ml-4 gold-bg text-black px-8 py-3 rounded-full text-[10px] font-black uppercase shadow-lg hover:scale-105 transition-all">
            Agendar
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gold transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-brand-dark/98 backdrop-blur-3xl transition-all duration-500 flex flex-col items-center justify-center gap-12 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-white"><X size={32}/></button>
        
        <span className="text-3xl font-black uppercase tracking-[0.2em] font-heading mb-8">
          MORENA <span className="gold-gradient italic">BRUTA</span>
        </span>

        {navLinks.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            onClick={() => setIsOpen(false)} 
            className="text-3xl font-black uppercase tracking-tighter text-white hover:text-gold transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link 
          to="/modelos" 
          onClick={() => setIsOpen(false)} 
          className="gold-bg text-black px-12 py-4 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl mt-4"
        >
          Explorar Casting
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
