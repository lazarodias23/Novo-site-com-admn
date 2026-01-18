
import React from 'react';
import { Send, Phone, Mail, Instagram, MessageCircle, MapPin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=554891305799&text=Olá%2C%20vim%20pelo%20site%20da%20Morena%20Bruta%20e%20gostaria%20de%20agendar%20um%20atendimento.";
  const facebookLink = "https://www.facebook.com/profile.php?id=61584044873387";

  return (
    <div className="pt-48 pb-32 px-6 max-w-4xl mx-auto min-h-screen">
        <div className="text-center mb-20 animate-logoEntry">
          <p className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Concierge VIP</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 uppercase">
              Fale <span className="italic text-gold-gradient">Conosco</span>
          </h1>
          <p className="text-gray-400 text-lg font-light">Privacidade e sigilo em seu primeiro contato.</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 p-12 md:p-16 rounded-[4rem] shadow-2xl backdrop-blur-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-gold font-black uppercase text-[10px] tracking-widest mb-4">Endereço Físico</h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex items-start gap-3">
                    <MapPin className="text-gold shrink-0" size={18} />
                    R. Maj. Ouríques, 1577 - Centro<br />
                    Cachoeira do Sul - RS
                  </p>
                </div>
                <div>
                  <h3 className="text-gold font-black uppercase text-[10px] tracking-widest mb-4">Horário de Atendimento</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Segunda a Sábado: 14h às 04h<br />
                    Domingos: Sob Consulta
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="gold-bg text-black py-6 rounded-full font-black uppercase text-[10px] tracking-widest text-center shadow-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 mb-4">
                  <MessageCircle size={20} /> Iniciar Chat Direto
                </a>
                <p className="text-center text-gray-500 text-[9px] uppercase font-bold tracking-widest">Tempo de resposta médio: 5 minutos</p>
              </div>
            </div>

            <div className="h-[1px] w-full bg-white/5 mb-16"></div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="border-b border-white/10 pb-4">
                      <label className="block text-gray-500 mb-2 font-bold uppercase text-[9px] tracking-[0.3em]">Nome Completo</label>
                      <input type="text" placeholder="Seu nome" className="w-full bg-transparent text-white font-display text-xl focus:text-gold outline-none transition-colors placeholder:text-gray-700" />
                  </div>
                  <div className="border-b border-white/10 pb-4">
                      <label className="block text-gray-500 mb-2 font-bold uppercase text-[9px] tracking-[0.3em]">WhatsApp</label>
                      <input type="text" placeholder="(48) 99130-5799" className="w-full bg-transparent text-white font-display text-xl focus:text-gold outline-none transition-colors placeholder:text-gray-700" />
                  </div>
                </div>
                <div className="border-b border-white/10 pb-4">
                    <label className="block text-gray-500 mb-2 font-bold uppercase text-[9px] tracking-[0.3em]">Sua Mensagem</label>
                    <textarea rows={3} placeholder="Como podemos ajudar?" className="w-full bg-transparent text-white font-display text-xl focus:text-gold outline-none transition-colors placeholder:text-gray-700 resize-none"></textarea>
                </div>
                <button className="bg-white/10 text-white w-full py-6 rounded-full flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all">
                    <Send size={16} /> Enviar Mensagem
                </button>
            </form>
            
            <div className="mt-20 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                  <Phone className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest">Telefone</p>
                  <p className="text-gray-500 text-xs mt-2">(48) 99130-5799</p>
                </a>
                <a href="mailto:contato@morenabruta.com" className="group cursor-pointer">
                  <Mail className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest">E-mail</p>
                  <p className="text-gray-500 text-xs mt-2">vip@morenabruta.com</p>
                </a>
                <a href={facebookLink} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                  <Facebook className="text-gold mx-auto mb-4 group-hover:scale-110 transition-transform" size={20} />
                  <p className="text-white font-bold text-[10px] uppercase tracking-widest">Facebook</p>
                  <p className="text-gray-500 text-xs mt-2">Morena Bruta</p>
                </a>
            </div>
        </div>
    </div>
  );
};

export default Contact;
