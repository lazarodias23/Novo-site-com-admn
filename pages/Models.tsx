
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Model } from '../types';
import ModelDetail from '../components/ModelDetail';
import Modal from '../components/Modal';
import { MapPin, Star, ArrowUpRight, Filter } from 'lucide-react';

const Models: React.FC = () => {
  const { models } = useData();
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [regionFilter, setRegionFilter] = useState('Todas');
  const [typeFilter, setTypeFilter] = useState('Todos');

  const filteredModels = models.filter(m => {
    const regionMatch = regionFilter === 'Todas' || m.region === regionFilter;
    const typeMatch = typeFilter === 'Todos' || m.category.includes(typeFilter);
    return regionMatch && typeMatch;
  });

  const regions = Array.from(new Set(models.map(m => m.region))).filter(Boolean);
  const serviceTypes = ['VIP', 'Presencial', 'Online'];

  return (
    <div className="min-h-screen pt-48 pb-32 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12 animate-reveal">
        <div className="max-w-2xl">
          <p className="gold-gradient uppercase tracking-[0.6em] text-[10px] font-bold mb-6">Explore Excellence</p>
          <h1 className="text-6xl md:text-8xl font-display font-light text-white tracking-tight leading-[1]">
            Elite <span className="gold-gradient italic">Casting.</span>
          </h1>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col gap-6 items-start lg:items-end">
          {/* Filtro por Região */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-gray-600 uppercase tracking-widest text-[9px] font-bold">Regiões:</span>
            {['Todas', ...regions].map((f) => (
                <button
                key={f}
                onClick={() => setRegionFilter(f!)}
                className={`px-6 py-2 text-[9px] uppercase tracking-widest font-bold transition-all border rounded-full ${
                    regionFilter === f ? 'gold-bg text-black border-gold' : 'glass text-gray-400 border-white/5 hover:border-gold/40'
                }`}
                >
                {f}
                </button>
            ))}
          </div>

          {/* Filtro por Atendimento */}
          <div className="flex flex-wrap gap-3 items-center">
            <span className="text-gray-600 uppercase tracking-widest text-[9px] font-bold">Atendimento:</span>
            {['Todos', ...serviceTypes].map((f) => (
                <button
                key={f}
                onClick={() => setTypeFilter(f)}
                className={`px-6 py-2 text-[9px] uppercase tracking-widest font-bold transition-all border rounded-full ${
                    typeFilter === f ? 'gold-bg text-black border-gold' : 'glass text-gray-400 border-white/5 hover:border-gold/40'
                }`}
                >
                {f}
                </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-20">
        {filteredModels.length > 0 ? (
            filteredModels.map((model, index) => (
                <div key={model.id} onClick={() => setSelectedModel(model)} className="group cursor-pointer animate-reveal" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="aspect-[3/4] relative rounded-[2.5rem] overflow-hidden mb-8 border border-white/5 shadow-2xl">
                        <img src={model.coverImage} alt={model.name} className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" />
                        <div className="absolute top-6 right-6">
                            <span className="glass border border-white/20 px-5 py-2 rounded-full text-[10px] font-bold uppercase text-white">{model.price}</span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60"></div>
                        
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                            <div>
                                <p className="text-gold text-[9px] uppercase tracking-[0.4em] mb-2">{model.region}</p>
                                <h3 className="text-3xl font-display font-medium text-white italic">{model.name}</h3>
                            </div>
                            <div className="w-12 h-12 rounded-full gold-bg text-black flex items-center justify-center shadow-2xl">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            ))
        ) : (
            <div className="col-span-full py-40 text-center glass rounded-[3rem] border-dashed border-white/10">
                <p className="text-gray-500 uppercase tracking-[0.4em] text-sm">Nenhum perfil encontrado nesta categoria.</p>
            </div>
        )}
      </div>

      <Modal isOpen={!!selectedModel} onClose={() => setSelectedModel(null)}>
        {selectedModel && <ModelDetail model={selectedModel} />}
      </Modal>
    </div>
  );
};

export default Models;
