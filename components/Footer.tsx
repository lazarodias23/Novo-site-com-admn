
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554891305799&text=Olá%2C%20vim%20pelo%20site%20da%20Morena%20Bruta%20e%20gostaria%20de%20informaçōes.";
  const facebookLink = "https://www.facebook.com/profile.php?id=61584044873387";

  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="inline-block mb-8 group">
                {/* Minimalist footer logo: Even smaller as requested (-3px) */}
                <img 
                  src="https://morenabrutacanais.vercel.app/logo.png" 
                  alt="Morena Bruta Logo" 
                  className="max-w-[137px] md:max-w-[157px] h-auto opacity-80 group-hover:opacity-100 transition-all duration-500"
                />
              </Link>
              <p className="text-[10px] text-gray-600 leading-relaxed mb-8 max-w-xs uppercase font-medium tracking-widest">
                  Elite Casting & Concierge. A maior rede de acompanhantes de luxo do Sul do Brasil. 100% verificado, 100% discreto.
              </p>
              <div className="flex gap-4">
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-all border border-white/10 hover:border-gold/50 shadow-sm"><Facebook size={16} /></a>
                <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-all border border-white/10 hover:border-gold/50 shadow-sm"><Instagram size={16} /></a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-all border border-white/10 hover:border-gold/50 shadow-sm"><MessageCircle size={16} /></a>
                <a href="mailto:contato@morenabruta.com" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-gold transition-all border border-white/10 hover:border-gold/50 shadow-sm"><Mail size={16} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-6">Explorar</h4>
            <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest">
                <li><Link to="/" className="hover:text-gold transition-colors text-gray-500 hover:text-white">Início</Link></li>
                <li><Link to="/modelos" className="hover:text-gold transition-colors text-gray-500 hover:text-white">Casting Elite</Link></li>
                <li><Link to="/agencia" className="hover:text-gold transition-colors text-gray-500 hover:text-white">A Agência</Link></li>
                <li><Link to="/boates" className="hover:text-gold transition-colors text-gray-500 hover:text-white">Boates VIP</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-6">Suporte</h4>
            <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest">
                <li><Link to="/contatos" className="hover:text-gold transition-colors text-gray-500 hover:text-white">Reservas</Link></li>
                <li><Link to="/privacidade" className="hover:text-gold transition-colors text-gray-500 hover:text-white">Privacidade</Link></li>
                <li><Link to="/contatos" className="hover:text-gold transition-colors text-gray-500 hover:text-white">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase text-[10px] tracking-widest mb-6">Localização</h4>
            <p className="text-[10px] text-gray-600 leading-relaxed font-bold uppercase tracking-widest">
              R. Maj. Ouríques, 1577<br />
              Centro, Cachoeira do Sul - RS<br />
              <span className="text-gold font-black block mt-4 tracking-[0.2em] text-xs">(48) 99130-5799</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-10 text-center text-[8px] text-gray-700 font-bold uppercase tracking-[0.4em]">
            <p>&copy; {new Date().getFullYear()} Morena Bruta. Proibido para menores de 18 anos.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
