
import React, { useState } from 'react';
import { Model } from '../types';
import { MapPin, Star, MessageSquare } from 'lucide-react';

interface ModelDetailProps {
  model: Model;
}

const ModelDetail: React.FC<ModelDetailProps> = ({ model }) => {
  const [activeImage, setActiveImage] = useState(model.coverImage);
  
  // Usa o whatsapp da modelo se existir, senão usa o padrão da agência
  const targetWhatsapp = model.whatsapp || "554891305799";
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${targetWhatsapp}&text=Olá%2C%20estou%20no%20perfil%20da%20${model.name}%20na%20Morena%20Bruta%20e%20gostaria%20de%20agendar.`;

  return (
    <div className="flex flex-col md:flex-row h-full bg-brand-dark">
      {/* Gallery Section */}
      <div className="w-full md:w-1/2 flex flex-col p-6 md:p-10">
        <div className="aspect-[3/4] overflow-hidden rounded-[3rem] mb-6 border border-white/5 bg-black relative shadow-2xl">
          <img 
            src={activeImage} 
            alt={model.name} 
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide px-2">
            <div 
                className={`w-24 h-24 flex-shrink-0 rounded-[1.5rem] overflow-hidden cursor-pointer border-2 transition-all ${activeImage === model.coverImage ? 'border-gold' : 'border-transparent opacity-40 hover:opacity-100'}`}
                onClick={() => setActiveImage(model.coverImage)}
            >
              <img src={model.coverImage} alt="Cover" className="w-full h-full object-cover" />
            </div>
            {model.gallery && model.gallery.map((img, idx) => (
            <div 
                key={idx}
                className={`w-24 h-24 flex-shrink-0 rounded-[1.5rem] overflow-hidden cursor-pointer border-2 transition-all ${activeImage === img ? 'border-gold' : 'border-transparent opacity-40 hover:opacity-100'}`}
                onClick={() => setActiveImage(img)}
            >
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
            </div>
            ))}
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 md:pl-0">
        <div className="flex-grow">
            <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-10">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-gold text-[11px] font-black uppercase tracking-[0.2em]">Casting Verificado</span>
                      <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none mb-4">{model.name}</h2>
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <MapPin size={16} className="text-gold" /> {model.location}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-2">Investimento</p>
                    <span className="text-4xl md:text-5xl font-black text-white tracking-tighter block gold-gradient">{model.price}</span>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Idade", val: model.age },
                  { label: "Altura", val: model.stats.height },
                  { label: "Peso", val: model.stats.weight },
                  { label: "Busto", val: model.stats.bust }
                ].map((stat, i) => (
                  <div key={i} className="bg-brand-card border border-white/5 rounded-3xl p-6 text-center">
                    <p className="text-gray-500 text-[9px] uppercase font-black tracking-widest mb-2">{stat.label}</p>
                    <p className="text-white font-bold text-xl tracking-tighter">{stat.val}</p>
                  </div>
                ))}
            </div>

            <div className="mb-12">
              <h3 className="text-gold font-black uppercase text-[11px] mb-4 tracking-widest flex items-center gap-2">
                <Star size={16} /> Sobre Mim
              </h3>
              <p className="text-gray-300 leading-relaxed font-medium text-lg italic">
                "{model.description}"
              </p>
            </div>
        </div>

        <div className="mt-auto">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gold-bg w-full py-6 rounded-full flex items-center justify-center gap-3 text-black font-black uppercase text-xs tracking-widest shadow-2xl hover:scale-[1.02] transition-transform text-center">
                <MessageSquare size={18} /> Agendar via WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
};

export default ModelDetail;
