
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import { Model } from '../types';
import Modal from '../components/Modal';
import ModelDetail from '../components/ModelDetail';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  Briefcase, 
  Star, 
  Heart,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  MessageCircle
} from 'lucide-react';

const Home: React.FC = () => {
  const { models } = useData();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554891305799&text=Olá%2C%20estou%20vendo%20o%20site%20da%20Morena%20Bruta%20e%20gostaria%20de%20mais%20informaçōes.";
  
  const featuredModels = models.slice(0, 8);
  const categories = [
    { title: 'Acompanhantes', icon: Star, desc: 'Perfis exclusivos e selecionados.', path: '/modelos' },
    { title: 'Sobre a Agência', icon: ShieldCheck, desc: 'Segurança e discrição absoluta.', path: '/agencia' },
    { title: 'Boates VIP', icon: Heart, desc: 'Parceiros e eventos noturnos.', path: '/boates' },
    { title: 'Trabalhe Conosco', icon: Briefcase, desc: 'Seja uma Morena Bruta.', path: '/contatos' }
  ];

  return (
    <div className="w-full bg-brand-dark">
      {/* HERO SECTION - LUXURIOUS RED SILK VIDEO */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/4042851/4042851-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 blackout-overlay bg-black/40"></div>
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6 flex flex-col items-center pt-40">
          {/* Logo as Image in Hero */}
          <div className="mb-14 animate-logoEntry">
            <img 
              src="https://morenabrutacanais.vercel.app/logo.png" 
              alt="Morena Bruta Logo" 
              className="max-w-[180px] md:max-w-[280px] h-auto filter drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            />
          </div>
          
          {/* Search Bar */}
          <div className="w-full search-glass rounded-[2rem] p-2 flex flex-col md:flex-row items-center shadow-2xl animate-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-1 w-full items-center border-b md:border-b-0 md:border-r border-white/10 px-6 py-4">
              <MapPin className="text-gold mr-4" size={20} />
              <select className="bg-transparent border-none outline-none text-white text-sm font-medium w-full appearance-none cursor-pointer">
                <option value="" className="bg-brand-dark">Selecione sua cidade...</option>
                <option value="porto-alegre" className="bg-brand-dark">Porto Alegre - RS</option>
                <option value="florianopolis" className="bg-brand-dark">Florianópolis - SC</option>
                <option value="gramado" className="bg-brand-dark">Gramado - RS</option>
                <option value="cachoeira-do-sul" className="bg-brand-dark">Cachoeira do Sul - RS</option>
              </select>
            </div>
            
            <div className="flex flex-[2] w-full items-center px-6 py-4">
              <Search className="text-gray-500 mr-4" size={20} />
              <input 
                type="text" 
                placeholder="Ex: Morena, Loiras, Tatuadas..." 
                className="flex-grow bg-transparent border-none outline-none text-white text-sm placeholder:text-gray-500 font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Link 
              to={`/modelos?search=${searchTerm}`}
              className="w-full md:w-auto gold-bg text-black px-12 py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Buscar
            </Link>
          </div>
          
          {/* Seals */}
          <div className="mt-12 flex flex-wrap justify-center gap-5 text-[10px] font-bold uppercase tracking-widest text-gray-400 animate-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 group hover:border-gold/30 transition-colors">
              <CheckCircle size={14} className="text-gold"/> 
              <span>Modelos Elite</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 group hover:border-gold/30 transition-colors">
              <CheckCircle size={14} className="text-gold"/> 
              <span>100% Verificado</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 group hover:border-gold/30 transition-colors">
              <CheckCircle size={14} className="text-gold"/> 
              <span>Sigilo Total</span>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link 
              key={i} 
              to={cat.path} 
              className="bg-brand-card p-10 rounded-[2.5rem] border border-white/5 hover:border-gold/30 transition-all group animate-reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                <cat.icon className="text-gold group-hover:text-black" size={20} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cat.title}</h3>
              <p className="text-gray-500 text-[11px] leading-relaxed uppercase tracking-wider font-medium">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED MODELS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tighter">Destaques <span className="gold-gradient italic">Morena Bruta</span></h2>
            <p className="text-gray-500 mt-2 text-sm font-bold uppercase tracking-widest">A seleção mais exclusiva do Sul do Brasil.</p>
          </div>
          <Link to="/modelos" className="flex items-center gap-2 text-gold font-bold uppercase tracking-widest text-[10px] hover:gap-4 transition-all bg-white/5 px-6 py-3 rounded-full border border-white/10">
            Casting Completo <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredModels.map((model, idx) => (
            <div 
              key={model.id} 
              onClick={() => setSelectedModel(model)}
              className="model-card group cursor-pointer bg-brand-card rounded-[2.5rem] overflow-hidden border border-white/5"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={model.coverImage} 
                  alt={model.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="glass px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest border border-white/20">Verificado</span>
                  <span className="bg-gold text-black px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest">VIP</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-xl font-bold uppercase text-white tracking-tighter">{model.name}</h3>
                  <span className="text-gold font-black text-sm">{model.price}</span>
                </div>
                <p className="text-gray-500 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                  <MapPin size={12} className="text-gold" /> {model.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RECRUITMENT SECTION */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="relative glass p-12 md:p-20 rounded-[4rem] border border-white/5 overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative z-10 text-center lg:text-left">
            <p className="gold-gradient text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Trabalhe Conosco</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none mb-8">
              Venha ser uma <span className="gold-gradient">Bruta.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10 font-medium">
              Oferecemos a melhor assessoria para modelos no RS e SC. Segurança total, fotos profissionais e os melhores ganhos do mercado.
            </p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gold-bg text-black px-12 py-5 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl hover:scale-105 transition-transform inline-flex items-center gap-3">
              <MessageCircle size={16} /> Candidatar-se agora
            </a>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10 w-full">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 mt-10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Join us" />
            </div>
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542343633-ce3256f2183e?auto=format&fit=crop&w=600&q=80" className="w-full h-full object-cover" alt="Agency life" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 border-t border-white/5 text-center px-6">
        <h2 className="text-2xl md:text-4xl font-black uppercase text-white tracking-tighter mb-8 italic">O ápice do prazer e da <span className="gold-gradient">sofisticação.</span></h2>
        <Link to="/modelos" className="inline-flex items-center gap-3 bg-white/5 text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] border border-white/10 hover:bg-gold hover:text-black hover:border-gold transition-all">
          Iniciar Experiência <ExternalLink size={16} />
        </Link>
      </section>

      <Modal isOpen={!!selectedModel} onClose={() => setSelectedModel(null)}>
        {selectedModel && <ModelDetail model={selectedModel} />}
      </Modal>
    </div>
  );
};

export default Home;
