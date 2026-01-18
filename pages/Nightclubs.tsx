
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Nightclub } from '../types';
import Modal from '../components/Modal';
import { MapPin, DollarSign, MessageCircle, ArrowRight } from 'lucide-react';

const Nightclubs: React.FC = () => {
  const { clubs } = useData();
  const [selectedClub, setSelectedClub] = useState<Nightclub | null>(null);

  return (
    <div className="min-h-screen pt-36 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <p className="gold-gradient uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Life & Style</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tight">
            Boates & <span className="italic gold-gradient">Parceiros</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {clubs.map((club) => (
            <div key={club.id} className="group cursor-pointer" onClick={() => setSelectedClub(club)}>
                <div className="h-96 relative rounded-[3rem] overflow-hidden mb-8 border border-white/5 shadow-2xl">
                    <img src={club.image} alt={club.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                      <div>
                        <h3 className="text-3xl font-display font-bold text-white uppercase mb-2">{club.name}</h3>
                        <p className="text-gold text-[10px] font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                           <MapPin size={12} /> {club.address}
                        </p>
                      </div>
                      <div className="gold-bg text-black p-4 rounded-full transition-colors">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                </div>
            </div>
        ))}
      </div>

      <Modal isOpen={!!selectedClub} onClose={() => setSelectedClub(null)}>
        {selectedClub && (
            <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 p-6">
                    <div className="rounded-[2.5rem] overflow-hidden h-full shadow-2xl border border-white/10">
                      <img src={selectedClub.image} className="w-full h-full object-cover" alt={selectedClub.name} />
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-12 flex flex-col">
                    <div className="mb-auto">
                      <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase mb-4">{selectedClub.name}</h2>
                      <p className="text-gray-400 mb-8 flex items-center gap-2 text-sm italic"><MapPin size={16} className="text-gold" /> {selectedClub.address}</p>
                      <div className="glass p-8 rounded-[2rem] mb-10 border border-white/5">
                          <p className="text-gold font-bold uppercase text-[10px] mb-2 tracking-widest flex items-center gap-2"><DollarSign size={14}/> Consumação Sugerida</p>
                          <p className="text-white text-3xl font-display font-bold">{selectedClub.minValue}</p>
                      </div>
                      <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">{selectedClub.description}</p>
                    </div>
                    <button className="gold-bg text-black w-full py-6 rounded-full flex items-center justify-center gap-3 font-bold text-xs tracking-[0.2em] shadow-2xl">
                        <MessageCircle size={18} /> Entrar em Contato
                    </button>
                </div>
            </div>
        )}
      </Modal>
    </div>
  );
};

export default Nightclubs;
