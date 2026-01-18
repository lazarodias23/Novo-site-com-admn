
import React, { useState } from 'react';
import { useData } from '../context/DataContext';
import { Model, Nightclub } from '../types';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  LogOut, 
  Users, 
  Music, 
  Save, 
  X,
  Lock,
  Phone,
  Image as ImageIcon,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
  const { models, clubs, addModel, updateModel, deleteModel, addClub, updateClub, deleteClub } = useData();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'models' | 'clubs'>('models');
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'bruta2025') {
      setIsAuthenticated(true);
    } else {
      alert('Acesso negado. Senha incorreta.');
    }
  };

  const handleOpenForm = (item?: any) => {
    if (item) {
      setEditingItem({ ...item });
    } else {
      const newItem = activeTab === 'models' 
        ? { 
            id: Date.now(), 
            name: '', 
            age: 18, 
            location: '', 
            price: 'R$ 400', 
            category: 'VIP', 
            coverImage: '', 
            gallery: [], 
            stats: { height: '', weight: '', bust: '', waist: '', hips: '' }, 
            description: '', 
            region: '',
            whatsapp: '554891305799'
          }
        : { id: Date.now(), name: '', address: '', description: '', image: '', gallery: [], minValue: '', workInfo: '' };
      setEditingItem(newItem);
    }
    setIsFormOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'models') {
      const exists = models.find(m => m.id === editingItem.id);
      exists ? updateModel(editingItem) : addModel(editingItem);
    } else {
      const exists = clubs.find(c => c.id === editingItem.id);
      exists ? updateClub(editingItem) : addClub(editingItem);
    }
    setIsFormOpen(false);
    setEditingItem(null);
  };

  // Helper para lidar com os campos de stats
  const handleStatsChange = (field: string, value: string) => {
    setEditingItem({
      ...editingItem,
      stats: {
        ...editingItem.stats,
        [field]: value
      }
    });
  };

  // Helper para galeria (string separada por vírgula ou linhas)
  const handleGalleryChange = (value: string) => {
    const urls = value.split(/[\n,]/).map(url => url.trim()).filter(url => url !== '');
    setEditingItem({ ...editingItem, gallery: urls });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black px-6 relative overflow-hidden">
        <div className="absolute inset-0 blackout-overlay opacity-60"></div>
        <div className="glass p-12 rounded-[3rem] w-full max-w-md text-center border border-gold/20 relative z-10 animate-reveal">
          <div className="w-24 h-24 gold-bg rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-float">
            <Lock size={40} className="text-black" />
          </div>
          <h1 className="text-4xl font-display font-bold text-white mb-2 logo-glow tracking-widest">
            Morena <span className="gold-gradient italic">Admin</span>
          </h1>
          <p className="text-gray-500 text-[10px] mb-12 uppercase tracking-[0.5em] font-bold">Terminal de Controle</p>
          <form onSubmit={handleLogin} className="space-y-8">
            <input 
              type="password" 
              placeholder="Senha de Segurança" 
              className="w-full glass border border-white/10 px-8 py-5 rounded-full outline-none focus:border-gold transition-all text-center text-white tracking-[0.2em]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button type="submit" className="w-full gold-bg text-black py-5 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-transform shadow-2xl">
              Autenticar Sistema
            </button>
          </form>
          <Link to="/" className="inline-block mt-10 text-gray-600 hover:text-gold text-[9px] uppercase tracking-widest transition-colors font-bold">
            Voltar ao Início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#030303]">
      <aside className="w-full md:w-80 glass border-r border-white/5 flex flex-col p-10 z-20 relative">
        <div className="mb-16">
            <Link to="/" className="text-2xl font-display font-bold text-white logo-glow tracking-widest">
                Morena <span className="gold-gradient italic">Bruta</span>
            </Link>
        </div>
        <nav className="space-y-6 flex-grow">
          <button onClick={() => setActiveTab('models')} className={`w-full flex items-center gap-5 px-8 py-5 rounded-full transition-all duration-500 ${activeTab === 'models' ? 'gold-bg text-black' : 'text-gray-500 hover:text-white'}`}>
            <Users size={18} /> <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Casting</span>
          </button>
          <button onClick={() => setActiveTab('clubs')} className={`w-full flex items-center gap-5 px-8 py-5 rounded-full transition-all duration-500 ${activeTab === 'clubs' ? 'gold-bg text-black' : 'text-gray-500 hover:text-white'}`}>
            <Music size={18} /> <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Boates</span>
          </button>
        </nav>
        <button onClick={() => setIsAuthenticated(false)} className="mt-auto flex items-center gap-5 px-8 py-5 text-red-500 font-bold text-[10px] uppercase tracking-[0.2em]">
          <LogOut size={18} /> Sair
        </button>
      </aside>

      <main className="flex-grow p-10 md:p-20 overflow-y-auto max-h-screen">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-10">
          <div>
            <h1 className="text-5xl font-display font-light text-white tracking-tight">
              {activeTab === 'models' ? 'Gerenciar Modelos' : 'Gerenciar Boates'}
            </h1>
          </div>
          <button onClick={() => handleOpenForm()} className="gold-bg text-black px-12 py-5 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
            <Plus size={18} /> Adicionar {activeTab === 'models' ? 'Modelo' : 'Boate'}
          </button>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {(activeTab === 'models' ? models : clubs).map((item: any, idx) => (
            <div key={item.id} className="glass p-8 rounded-[2.5rem] border border-white/5 flex gap-8 items-center group">
              <div className="w-28 h-28 rounded-3xl overflow-hidden flex-shrink-0 border border-white/10">
                <img src={activeTab === 'models' ? item.coverImage : item.image} className="w-full h-full object-cover" alt={item.name} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-gray-500 text-[10px] uppercase tracking-widest">{activeTab === 'models' ? item.location : item.address}</p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleOpenForm(item)} className="p-3 glass border border-white/10 text-gold rounded-full hover:bg-gold hover:text-black transition-all">
                      <Edit3 size={16} />
                    </button>
                    <button onClick={() => activeTab === 'models' ? deleteModel(item.id) : deleteClub(item.id)} className="p-3 glass border border-white/10 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {isFormOpen && editingItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-6 overflow-y-auto">
          <div className="glass w-full max-w-4xl rounded-[3rem] p-10 md:p-16 border border-white/10 relative" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl font-display font-bold text-white uppercase italic">{editingItem.id && models.find(m => m.id === editingItem.id) ? 'Editar' : 'Nova'} {activeTab === 'models' ? 'Modelo' : 'Boate'}</h2>
              <button onClick={() => setIsFormOpen(false)} className="p-3 glass rounded-full text-gray-500 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {activeTab === 'models' ? (
                <>
                  <div className="md:col-span-1 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Informações Básicas</label>
                    <input placeholder="Nome Artístico" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold" value={editingItem.name} onChange={e => setEditingItem({...editingItem, name: e.target.value})} required />
                    <input type="number" placeholder="Idade" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold" value={editingItem.age} onChange={e => setEditingItem({...editingItem, age: parseInt(e.target.value)})} />
                    <input placeholder="WhatsApp (Somente Números)" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold" value={editingItem.whatsapp || ''} onChange={e => setEditingItem({...editingItem, whatsapp: e.target.value})} />
                    <input placeholder="Valor (Ex: R$ 400)" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold" value={editingItem.price} onChange={e => setEditingItem({...editingItem, price: e.target.value})} />
                  </div>
                  
                  <div className="md:col-span-1 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Localização & Filtros</label>
                    <input placeholder="Cidade - UF" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold" value={editingItem.location} onChange={e => setEditingItem({...editingItem, location: e.target.value})} />
                    <select className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold text-gray-400" value={editingItem.region} onChange={e => setEditingItem({...editingItem, region: e.target.value})}>
                        <option value="">Região (Filtro)</option>
                        <option value="Cachoeira do Sul">Cachoeira do Sul</option>
                        <option value="Serra Gaúcha">Serra Gaúcha</option>
                        <option value="Cachoeirinha">Cachoeirinha</option>
                        <option value="Torres">Torres</option>
                        <option value="Florianópolis">Florianópolis</option>
                    </select>
                    <select className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-gold text-gray-400" value={editingItem.category} onChange={e => setEditingItem({...editingItem, category: e.target.value})}>
                        <option value="VIP">VIP</option>
                        <option value="Presencial">Presencial</option>
                        <option value="Online">Online</option>
                        <option value="VIP & Online">VIP & Online</option>
                    </select>
                  </div>

                  <div className="md:col-span-1 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Medidas (Stats)</label>
                    <div className="grid grid-cols-2 gap-3">
                        <input placeholder="Altura" className="glass border border-white/10 px-4 py-3 rounded-xl text-xs" value={editingItem.stats.height} onChange={e => handleStatsChange('height', e.target.value)} />
                        <input placeholder="Peso" className="glass border border-white/10 px-4 py-3 rounded-xl text-xs" value={editingItem.stats.weight} onChange={e => handleStatsChange('weight', e.target.value)} />
                        <input placeholder="Busto" className="glass border border-white/10 px-4 py-3 rounded-xl text-xs" value={editingItem.stats.bust} onChange={e => handleStatsChange('bust', e.target.value)} />
                        <input placeholder="Cintura" className="glass border border-white/10 px-4 py-3 rounded-xl text-xs" value={editingItem.stats.waist} onChange={e => handleStatsChange('waist', e.target.value)} />
                        <input placeholder="Quadril" className="glass border border-white/10 px-4 py-3 rounded-xl text-xs" value={editingItem.stats.hips} onChange={e => handleStatsChange('hips', e.target.value)} />
                    </div>
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Imagens (URLs)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <span className="text-[9px] text-gray-600 block px-2 uppercase tracking-widest">Foto de Capa</span>
                           <input placeholder="URL da foto principal" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl text-xs outline-none" value={editingItem.coverImage} onChange={e => setEditingItem({...editingItem, coverImage: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                           <span className="text-[9px] text-gray-600 block px-2 uppercase tracking-widest">Galeria (Uma URL por linha)</span>
                           <textarea placeholder="Cole os links das fotos extras aqui..." rows={3} className="w-full glass border border-white/10 px-6 py-4 rounded-2xl text-xs outline-none resize-none" value={editingItem.gallery.join('\n')} onChange={e => handleGalleryChange(e.target.value)} />
                        </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Descrição Completa</label>
                    <textarea rows={4} className="w-full glass border border-white/10 px-8 py-6 rounded-3xl outline-none focus:border-gold resize-none" value={editingItem.description} onChange={e => setEditingItem({...editingItem, description: e.target.value})} />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:col-span-1 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Nome da Boate</label>
                    <input className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none" value={editingItem.name} onChange={e => setEditingItem({...editingItem, name: e.target.value})} required />
                    <input placeholder="Endereço" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none" value={editingItem.address} onChange={e => setEditingItem({...editingItem, address: e.target.value})} />
                    <input placeholder="Consumação / Entrada" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none" value={editingItem.minValue} onChange={e => setEditingItem({...editingItem, minValue: e.target.value})} />
                  </div>
                  <div className="md:col-span-2 space-y-4">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Mídias & Info</label>
                    <input placeholder="URL da Foto Principal" className="w-full glass border border-white/10 px-6 py-4 rounded-2xl outline-none" value={editingItem.image} onChange={e => setEditingItem({...editingItem, image: e.target.value})} />
                    <textarea placeholder="Descrição da casa..." rows={3} className="w-full glass border border-white/10 px-8 py-4 rounded-3xl outline-none resize-none" value={editingItem.description} onChange={e => setEditingItem({...editingItem, description: e.target.value})} />
                    <textarea placeholder="Informações de Trabalho..." rows={2} className="w-full glass border border-white/10 px-8 py-4 rounded-3xl outline-none resize-none" value={editingItem.workInfo} onChange={e => setEditingItem({...editingItem, workInfo: e.target.value})} />
                  </div>
                </>
              )}

              <div className="md:col-span-3 pt-6">
                <button type="submit" className="w-full gold-bg text-black py-6 rounded-full font-bold uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl">
                  <Save size={20} /> Salvar Alterações
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
