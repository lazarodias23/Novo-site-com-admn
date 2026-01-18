import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { name: 'Modelos VIP', count: 12, img: 'https://picsum.photos/seed/cat1/500/300' },
  { name: 'Universitárias', count: 8, img: 'https://picsum.photos/seed/cat2/500/300' },
  { name: 'Executivas', count: 15, img: 'https://picsum.photos/seed/cat3/500/300' },
  { name: 'Massagistas', count: 6, img: 'https://picsum.photos/seed/cat4/500/300' },
  { name: 'Fitness', count: 9, img: 'https://picsum.photos/seed/cat5/500/300' },
  { name: 'Plus Size', count: 4, img: 'https://picsum.photos/seed/cat6/500/300' },
];

const Categories: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center uppercase tracking-widest">
          Categorias
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat) => (
            <Link to="/modelos" key={cat.name} className="group relative h-64 overflow-hidden rounded-lg block">
              <img 
                src={cat.img} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-neon-pink transition-colors">{cat.name}</h3>
                <span className="text-sm text-gray-300">{cat.count} perfis disponíveis</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;