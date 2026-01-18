
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Star, 
  Shield, 
  Users, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Camera, 
  MessageCircle, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { MODELS_DATA } from '../data';
import Modal from '../components/Modal';

const Agency: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVenueModalOpen, setIsVenueModalOpen] = useState(false);
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554891305799&text=Olá%2C%20estou%20interessado%20em%20saber%20mais%20sobre%20a%20Morena%20Bruta.";

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cities = [
    { name: "Cachoeira do Sul", img: "https://images.unsplash.com/photo-1590001158193-79013018e2de?auto=format&fit=crop&w=800&q=80" },
    { name: "Cachoeirinha", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80" },
    { name: "Serra Gaúcha", img: "https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&w=800&q=80" },
    { name: "Florianópolis", img: "https://images.unsplash.com/photo-1596739943393-2713e793910c?auto=format&fit=crop&w=800&q=80" },
    { name: "Torres", img: "https://images.unsplash.com/photo-1543333309-87758238f830?auto=format&fit=crop&w=800&q=80" }
  ];

  const venueGallery = [
    "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574091678120-e22e920d0f5e?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <div className="pt-36 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
            <div className="animate-logoEntry">
                <p className="text-gold uppercase tracking-[0.6em] text-[10px] font-bold mb-6">A Agência de Elite</p>
                <h1 className="text-5xl md:text-8xl font-display font-bold text-white mb-10 leading-[0.9]">
                    Morena <br />
                    <span className="italic text-gold-gradient">Bruta.</span>
                </h1>
                <p className="text-gray-400 text-xl font-light leading-relaxed mb-12">
                    Somos o epicentro do luxo e da discrição no Sul. Unimos curadoria artística a um atendimento impecável para proporcionar momentos que transcendem o comum.
                </p>
                <div className="flex gap-4">
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex-1">
                    <Shield className="text-gold mb-4" size={24} />
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Sigilo Absoluto</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-[2rem] flex-1">
                    <Award className="text-gold mb-4" size={24} />
                    <p className="text-white font-bold text-xs uppercase tracking-widest">Excelência VIP</p>
                  </div>
                </div>
            </div>
            <div className="relative">
                <div className="rounded-[3.5rem] overflow-hidden aspect-square border border-white/10 shadow-2xl">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80" alt="Agency" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-gold text-black p-10 rounded-[2.5rem] shadow-2xl hidden md:block">
                  <Star size={32} className="mb-4" />
                  <p className="text-3xl font-display font-bold">Liderança</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest mt-1">Mercado de Luxo</p>
                </div>
            </div>
        </div>

        {/* Info Grid (Trust Seals) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { icon: Users, title: "Curadoria", desc: "Perfis selecionados sob rigorosos critérios de beleza e comportamento." },
            { icon: MapPin, title: "Presença", desc: "Cobertura estratégica nos principais eixos de luxo de SC e RS." },
            { icon: Phone, title: "Suporte 24h", desc: "Concierge exclusivo pronto para atender suas demandas a qualquer hora." }
          ].map((item, i) => (
            <div key={i} className="glass-card p-12 rounded-[3rem] text-center border border-white/5">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <item.icon className="text-gold" size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4 uppercase tracking-widest">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Model Carousel Section */}
        <section className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Acompanhantes</p>
              <h2 className="text-4xl font-display font-bold text-white">Nosso <span className="text-gold-gradient italic">Casting</span></h2>
            </div>
            <div className="flex gap-2">
              <button onClick={() => scrollCarousel('left')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scrollCarousel('right')} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x pb-8"
          >
            {MODELS_DATA.map((model) => (
              <Link 
                to="/modelos" 
                key={model.id}
                className="min-w-[280px] md:min-w-[320px] snap-start group"
              >
                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-4 border border-white/5 relative">
                  <img src={model.coverImage} alt={model.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <h4 className="text-2xl font-display font-bold text-white uppercase tracking-wider">{model.name}</h4>
                    <p className="text-gold text-[10px] font-bold uppercase tracking-widest">{model.region}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Maps & Venue Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Info Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <p className="text-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Onde a Magia Acontece</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 uppercase leading-tight">
                Espaço <br />
                <span className="text-gold-gradient italic">Privilegiado</span>
              </h2>
              <div className="space-y-6 mb-10 text-gray-400">
                <p className="text-lg font-light leading-relaxed">
                  Contamos com uma estrutura de alto padrão em Cachoeira do Sul, desenhada para proporcionar total privacidade e conforto. Ambientes climatizados, decoração sofisticada e serviço de bar premium.
                </p>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                  <Navigation className="text-gold flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-widest mb-1">Localização Central</p>
                    <p className="text-xs">R. Maj. Ouríques, 1577 - Centro, Cachoeira do Sul. Estacionamento privativo e entrada discreta.</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => setIsVenueModalOpen(true)}
                  className="flex-1 py-5 rounded-full border border-gold text-gold font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-gold hover:text-black transition-all"
                >
                  <Camera size={16} /> Ver fotos da casa
                </button>
                <a 
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-5 rounded-full bg-white/5 text-white font-bold uppercase tracking-widest text-[10px] flex items-center justify-center gap-2 hover:bg-white/10 transition-all border border-white/10"
                >
                  <MessageCircle size={16} /> Contato WhatsApp
                </a>
              </div>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-7 h-[500px] lg:h-auto rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.97155099391!2d-52.89439618488066!3d-30.038133581884485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504a3f4e3f4e3f3%3A0x1234567890abcdef!2sR.%20Maj.%20Our%C3%ADques%2C%201577%20-%20Centro%2C%20Cachoeira%20do%20Sul%20-%20RS!5e0!3m2!1spt-BR!2sbr!4v1625680000000" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0, filter: 'grayscale(1) invert(1) brightness(0.7)'}} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold text-white mb-4">Cidades de <span className="text-gold-gradient italic">Atendimento</span></h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {cities.map((city, idx) => (
              <div 
                key={idx} 
                className="group relative h-72 rounded-[2.5rem] overflow-hidden border border-white/5 cursor-default"
              >
                <img src={city.img} alt={city.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-xl font-display font-bold text-white uppercase tracking-widest mb-2 group-hover:text-gold transition-colors">{city.name}</h4>
                  <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[9px] text-gray-400 uppercase tracking-[0.3em]">Casting Disponível</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Venue Modal */}
        <Modal isOpen={isVenueModalOpen} onClose={() => setIsVenueModalOpen(false)}>
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 aspect-video rounded-3xl overflow-hidden">
                    <img src={venueGallery[0]} className="w-full h-full object-cover" alt="Main Hall" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img src={venueGallery[1]} className="w-full h-full object-cover" alt="Bar Area" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img src={venueGallery[2]} className="w-full h-full object-cover" alt="Private Room" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-4xl font-display font-bold text-white uppercase mb-6">A Mansão <span className="text-gold-gradient italic">Morena Bruta</span></h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Nossa sede física em Cachoeira do Sul é referência em arquitetura de prazer. Cada detalhe foi pensado para que sua visita seja discreta, luxuosa e inesquecível. Oferecemos:
                </p>
                <ul className="space-y-4 mb-10 text-sm text-gray-300">
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={18} /> Suítes Temáticas de Alto Padrão</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={18} /> Bar de Coquetelaria Internacional</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={18} /> Som Ambiente e Iluminação Cênica</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="text-gold" size={18} /> Segurança Armada e Discreta 24h</li>
                </ul>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gold-bg py-6 rounded-full flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-widest text-black shadow-2xl">
                  <MessageCircle size={18} /> Agendar Visita pelo WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Modal>

    </div>
  );
};

export default Agency;
