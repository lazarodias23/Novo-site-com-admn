import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-bg pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8">Política de Privacidade</h1>
        
        <div className="prose prose-invert prose-lg text-gray-300">
          <p>Última atualização: {new Date().toLocaleDateString()}</p>
          
          <h3 className="text-gold">1. Compromisso com a Discrição</h3>
          <p>
            Na Morena Bruta, a privacidade e a segurança dos nossos clientes são nossa prioridade máxima. 
            Todos os dados compartilhados conosco são mantidos sob sigilo absoluto.
          </p>

          <h3 className="text-gold">2. Coleta de Dados</h3>
          <p>
            Coletamos apenas as informações necessárias para agendar atendimentos e melhorar sua experiência no site. 
            Não vendemos nem compartilhamos seus dados com terceiros.
          </p>

          <h3 className="text-gold">3. Uso de Cookies</h3>
          <p>
            Utilizamos cookies para melhorar a funcionalidade do site e analisar o tráfego. Você pode desativar 
            os cookies nas configurações do seu navegador a qualquer momento.
          </p>

          <h3 className="text-gold">4. Segurança</h3>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso 
            não autorizado, alteração ou destruição.
          </p>

          <h3 className="text-gold">5. Contato</h3>
          <p>
            Para questões relacionadas à privacidade, entre em contato através do email privacy@morenabruta.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;