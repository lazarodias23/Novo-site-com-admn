
/**
 * MAIN.JS - Lógica Principal e Dados
 * Melhorado com animações de scroll e UX refinada.
 */

// --- DADOS DAS MODELOS ---
const MODELS_DATA = [
    // --- CACHOEIRA DO SUL ---
    {
        id: 1,
        name: "Angel",
        location: "Cachoeira do Sul - RS",
        region: "Cachoeira do Sul",
        age: 23,
        price: "R$ 400",
        category: "Presencial e Online",
        coverImage: "images/angel_1.jpg", 
        gallery: ["images/angel_1.jpg", "images/angel_2.jpg", "images/angel_3.jpg"],
        stats: { height: "1.65m", weight: "58kg", bust: "90cm", waist: "62cm", hips: "98cm" },
        description: "Morena envolvente de Cachoeira do Sul. Atendimento presencial com carinho e pimenta, ou virtual para quem está longe. Venha me conhecer e realizar seus desejos mais ocultos."
    },
    {
        id: 2,
        name: "Yasmin",
        location: "Cachoeira do Sul - RS",
        region: "Cachoeira do Sul",
        age: 21,
        price: "R$ 350",
        category: "Presencial e Online",
        coverImage: "images/yasmin_2.jpg",
        gallery: ["images/yasmin_2.jpg", "images/yasmin_3.jpg", "images/yasmin_4.jpg"],
        stats: { height: "1.70m", weight: "55kg", bust: "88cm", waist: "60cm", hips: "92cm" },
        description: "Doce e encantadora. Faço atendimento por cam ou presencial. Adoro conversar e transformar momentos simples em memórias especiais. Uma companhia leve e divertida."
    },
    {
        id: 3,
        name: "Thais",
        location: "Cachoeira do Sul - RS",
        region: "Cachoeira do Sul",
        age: 25,
        price: "R$ 500",
        category: "VIP",
        coverImage: "images/thais_2.jpg",
        gallery: ["images/thais_2.jpg", "images/thais_3.jpg"],
        stats: { height: "1.75m", weight: "62kg", bust: "94cm", waist: "65cm", hips: "100cm" },
        description: "Elegância e sofisticação em cada detalhe. Modelo fotográfica pronta para realizar suas fantasias com total discrição e classe."
    },

    // --- SERRA GAÚCHA ---
    {
        id: 4,
        name: "Sabrina",
        location: "Gramado - RS",
        region: "Serra Gaúcha",
        age: 28,
        price: "R$ 600",
        category: "Presencial",
        coverImage: "images/sabrina_capa.jpg",
        gallery: ["images/sabrina_capa.jpg", "images/sabrina_2.jpg"],
        stats: { height: "1.68m", weight: "60kg", bust: "92cm", waist: "64cm", hips: "96cm" },
        description: "Atendimento exclusivo em Gramado. Alto nível, para homens exigentes que buscam uma companhia de luxo na Serra Gaúcha."
    },
    {
        id: 5,
        name: "Maiara",
        location: "Erechim - RS",
        region: "Serra Gaúcha",
        age: 24,
        price: "R$ 450",
        category: "Presencial",
        coverImage: "images/maiara_capa.jpg",
        gallery: ["images/maiara_capa.jpg"],
        stats: { height: "1.65m", weight: "59kg", bust: "91cm", waist: "63cm", hips: "95cm" },
        description: "Disponível em Erechim. Carinhosa, atenciosa e pronta para te proporcionar momentos de relaxamento absoluto."
    },

    // --- OUTRAS REGIÕES ---
    {
        id: 6,
        name: "Adri",
        location: "Cachoeirinha - RS",
        region: "Cachoeirinha",
        age: 22,
        price: "R$ 300",
        category: "VIP",
        coverImage: "images/adri_capa.jpg",
        gallery: ["images/adri_capa.jpg"],
        stats: { height: "1.60m", weight: "55kg", bust: "88cm", waist: "60cm", hips: "95cm" },
        description: "Morena tatuada de Cachoeirinha. Atitude e beleza para esquentar sua noite com muita intensidade."
    },
    {
        id: 7,
        name: "Fernanda",
        location: "Florianópolis - SC",
        region: "Florianópolis",
        age: 26,
        price: "R$ 700",
        category: "VIP",
        coverImage: "https://picsum.photos/seed/floripa1/600/800",
        gallery: ["https://picsum.photos/seed/floripa1/600/800"],
        stats: { height: "1.70m", weight: "58kg", bust: "92cm", waist: "64cm", hips: "98cm" },
        description: "Atendimento de alto padrão na ilha da magia. Ideal para jantares e eventos."
    },
    {
        id: 8,
        name: "Carol",
        location: "Torres - RS",
        region: "Torres",
        age: 20,
        price: "R$ 350",
        category: "Presencial",
        coverImage: "https://picsum.photos/seed/torres1/600/800",
        gallery: ["https://picsum.photos/seed/torres1/600/800"],
        stats: { height: "1.72m", weight: "60kg", bust: "90cm", waist: "62cm", hips: "94cm" },
        description: "O melhor do litoral gaúcho. Bronzeada, simpática e pronta para o verão."
    }
];

// --- DADOS DAS BOATES ---
const CLUBS_DATA = [
    {
        id: 1,
        name: "Club Luxuria",
        address: "Rua Augusta, 1500 - Jardins",
        description: "A casa noturna mais exclusiva da cidade, ambiente intimista e sofisticado.",
        minValue: "R$ 500,00 consumação",
        workInfo: "Vagas para recepção. Cache fixo + comissão.",
        image: "https://picsum.photos/seed/club1/600/400",
        gallery: ["https://picsum.photos/seed/club1/600/400", "https://picsum.photos/seed/club1b/600/400"]
    },
    {
        id: 2,
        name: "Neon Nights",
        address: "Av. Faria Lima, 2200 - Itaim",
        description: "Modernidade e tecnologia se encontram. O melhor som da cidade.",
        minValue: "R$ 350,00 entrada",
        workInfo: "Procuramos dançarinas.",
        image: "https://picsum.photos/seed/club2/600/400",
        gallery: ["https://picsum.photos/seed/club2/600/400"]
    }
];

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initMobileMenu();
    initPageLogic();
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('bg-black/95', 'shadow-lg');
            nav.classList.remove('bg-transparent');
        } else {
            nav.classList.remove('bg-black/95', 'shadow-lg');
            nav.classList.add('bg-transparent');
        }
    });
});

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initMobileMenu() {
    const btnMobile = document.getElementById('btn-mobile');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (btnMobile && mobileMenu) {
        btnMobile.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            // Animação simples de entrada
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('animate-fade-in-down');
            }
        });
    }

    // Fechar Modal Geral
    const closeModalBtn = document.getElementById('close-modal');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('generic-modal').classList.add('hidden');
            document.getElementById('generic-modal').classList.remove('flex');
            document.body.style.overflow = 'auto'; // Reativar scroll
        });
    }
    
    // Fechar modal clicando fora
    const genericModal = document.getElementById('generic-modal');
    if (genericModal) {
        genericModal.addEventListener('click', (e) => {
            if (e.target === genericModal) {
                genericModal.classList.add('hidden');
                genericModal.classList.remove('flex');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

function initPageLogic() {
    const path = window.location.pathname;
    
    if (path.includes('modelos.html')) {
        renderModels('Todas');
        setupFilters();
    } else if (path.includes('agencia.html')) {
        setupAgencyInteractions();
    } else if (path.includes('boates.html')) {
        renderClubs();
    } else if (path.includes('index.html') || path === '/' || path.endsWith('/')) {
        renderHomePreview();
        setupAccordion();
    }
}

// --- LÓGICA: HOME ---
function renderHomePreview() {
    const grid = document.getElementById('home-preview-grid');
    if (!grid) return;

    // Pega as 4 primeiras modelos como destaque
    const previewModels = MODELS_DATA.slice(0, 4);

    previewModels.forEach((model, index) => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-lg overflow-hidden cursor-pointer relative group reveal';
        card.style.transitionDelay = `${index * 100}ms`;
        card.onclick = () => openModelModal(model);
        
        const fallbackSrc = `https://picsum.photos/seed/${model.id}/400/600`;
        
        card.innerHTML = `
            <div class="aspect-[3/4] overflow-hidden relative">
                <img src="${model.coverImage}" onerror="this.src='${fallbackSrc}'" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100">
                <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div class="absolute bottom-0 w-full p-5 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span class="text-[10px] tracking-widest bg-gold text-black font-bold px-2 py-1 rounded mb-2 inline-block uppercase">${model.category}</span>
                    <h3 class="text-xl font-display font-bold text-white uppercase mb-1">${model.name}</h3>
                    <p class="text-gold text-xs uppercase tracking-wide flex items-center gap-1">
                        <span>📍</span> ${model.region}
                    </p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function setupAccordion() {
    const items = document.querySelectorAll('.accordion-item');
    items.forEach(item => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const content = item.querySelector('.accordion-content');
            content.classList.toggle('hidden');
            header.classList.toggle('text-gold');
            const icon = header.querySelector('span:last-child');
            icon.textContent = content.classList.contains('hidden') ? '+' : '−';
        });
    });
}

// --- LÓGICA: MODELOS ---
function renderModels(filter) {
    const grid = document.getElementById('models-grid');
    if (!grid) return;

    grid.innerHTML = ''; 

    const filtered = MODELS_DATA.filter(m => {
        if (filter === 'Todas') return true;
        if (filter === 'Atendimento Presencial') return m.category.includes('Presencial') || m.category === 'VIP';
        if (filter === 'Online') return m.category.includes('Online');
        return m.region === filter;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center text-gray-500 py-10 reveal">Nenhuma modelo encontrada nesta categoria.</div>';
        return;
    }

    filtered.forEach((model, index) => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-lg overflow-hidden cursor-pointer group reveal';
        card.style.transitionDelay = `${(index % 4) * 100}ms`;
        card.onclick = () => openModelModal(model);
        
        const imgSrc = model.coverImage;
        const fallbackSrc = `https://picsum.photos/seed/${model.id}/400/600`;
        
        card.innerHTML = `
            <div class="aspect-[3/4] relative overflow-hidden">
                <img src="${imgSrc}" onerror="this.src='${fallbackSrc}'" alt="${model.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute top-4 right-4 z-10">
                    <span class="bg-black/60 backdrop-blur text-gold border border-gold/30 px-3 py-1 rounded-full text-xs font-bold uppercase">${model.price}</span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                
                <div class="absolute bottom-0 left-0 p-5 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 class="text-2xl font-display font-bold text-white mb-1">${model.name}</h3>
                    <p class="text-gold text-sm mb-2 flex items-center gap-1">📍 ${model.location}</p>
                    <div class="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span class="text-xs text-gray-300 uppercase tracking-wider">Ver Perfil Completo →</span>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
    
    // Re-inicializa o observer para os novos elementos
    initScrollAnimations();
}

function setupFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => {
                b.classList.remove('bg-gold', 'text-black', 'border-gold', 'shadow-gold');
                b.classList.add('text-gray-400', 'border-gray-700', 'bg-transparent');
            });
            
            const target = e.target;
            target.classList.remove('text-gray-400', 'border-gray-700', 'bg-transparent');
            target.classList.add('bg-gold', 'text-black', 'border-gold', 'shadow-gold');

            renderModels(target.innerText.trim());
        });
    });
}

// --- LÓGICA: AGÊNCIA ---
function setupAgencyInteractions() {
    const regions = ['Cachoeirinha', 'Torres', 'Serra Gaúcha', 'Florianópolis'];
    const container = document.getElementById('regions-container');
    
    if (container) {
        regions.forEach(region => {
            const card = document.createElement('div');
            card.className = 'min-w-[280px] snap-center h-[350px] glass-card rounded-xl relative overflow-hidden cursor-pointer group';
            card.onclick = () => openRegionModal(region);
            card.innerHTML = `
                <img src="https://picsum.photos/seed/${region}/400/600" class="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div class="absolute bottom-0 left-0 w-full p-6 text-center">
                    <h3 class="text-2xl font-display font-bold text-white uppercase drop-shadow-md mb-2">${region}</h3>
                    <button class="text-xs font-bold text-black bg-gold px-4 py-2 rounded-full uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Ver Casting</button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    const previewCards = document.querySelectorAll('.agency-model-card');
    previewCards.forEach(card => {
        card.addEventListener('click', () => {
            const modelId = parseInt(card.dataset.id);
            const model = MODELS_DATA.find(m => m.id === modelId);
            if (model) openModelModal(model);
        });
    });
}

function openRegionModal(regionName) {
    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('modal-content-body');
    if (!modal || !content) return;

    const models = MODELS_DATA.filter(m => m.region === regionName);

    let html = `
        <h2 class="text-3xl font-display font-bold text-white mb-8 uppercase text-center">Modelos em <span class="text-gold-gradient">${regionName}</span></h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    `;

    if (models.length > 0) {
        models.forEach(m => {
            html += `
                <div onclick='openModelModalById(${m.id})' class="glass-card p-4 rounded-lg cursor-pointer flex gap-4 items-center hover:bg-white/5 transition-colors group">
                    <img src="${m.coverImage}" onerror="this.src='https://picsum.photos/seed/${m.id}/100/100'" class="w-20 h-20 rounded-lg object-cover border border-gray-700 group-hover:border-gold transition-colors">
                    <div>
                        <h4 class="text-white font-display font-bold text-lg group-hover:text-gold transition-colors">${m.name}</h4>
                        <p class="text-gold font-bold text-sm">${m.price}</p>
                        <span class="text-[10px] text-gray-400 uppercase tracking-widest mt-1 block">Ver Detalhes</span>
                    </div>
                </div>
            `;
        });
    } else {
        html += `<div class="col-span-full text-center py-12 border border-dashed border-gray-800 rounded"><p class="text-gray-400">Nenhuma modelo cadastrada nesta região no momento.</p></div>`;
    }

    html += `</div>`;
    
    content.innerHTML = html;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Prevenir scroll no body
}

// --- LÓGICA: BOATES ---
function renderClubs() {
    const grid = document.getElementById('clubs-grid');
    if (!grid) return;

    CLUBS_DATA.forEach((club, index) => {
        const card = document.createElement('div');
        card.className = 'glass-card rounded-xl overflow-hidden group flex flex-col h-full reveal';
        card.style.transitionDelay = `${index * 150}ms`;
        card.innerHTML = `
            <div class="h-56 overflow-hidden relative">
                <img src="${club.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div class="p-8 flex flex-col flex-grow">
                <h3 class="text-2xl font-display font-bold text-white mb-2">${club.name}</h3>
                <p class="text-gold text-xs mb-4 uppercase tracking-widest font-bold flex items-center gap-2">
                   <span>📍</span> ${club.address}
                </p>
                <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-gray-800 pl-4">
                  ${club.description}
                </p>
                <button onclick='openClubModal(${club.id})' class="btn-outline w-full py-3 rounded text-sm hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                    Ver Detalhes e Valores
                </button>
            </div>
        `;
        grid.appendChild(card);
    });
    
    initScrollAnimations();
}

window.openClubModal = (id) => {
    const club = CLUBS_DATA.find(c => c.id === id);
    if (!club) return;
    
    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('modal-content-body');
    
    let galleryHtml = club.gallery.map(img => `<img src="${img}" class="w-full h-48 object-cover rounded-lg mb-2 border border-gray-800 hover:border-gold transition-colors">`).join('');

    content.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8">
            <div class="w-full md:w-1/2 overflow-y-auto max-h-[60vh] pr-2">
                ${galleryHtml}
            </div>
            <div class="w-full md:w-1/2 flex flex-col">
                <h2 class="text-3xl font-display font-bold text-white uppercase mb-2">${club.name}</h2>
                <p class="text-gray-300 mb-6 flex items-center gap-2 text-sm"><span class="text-gold">📍</span> ${club.address}</p>
                
                <div class="glass p-5 rounded-lg mb-6 border-l-4 border-gold">
                    <p class="text-gold font-bold uppercase text-xs mb-2 tracking-widest">Consumação / Entrada</p>
                    <p class="text-white text-xl font-display">${club.minValue}</p>
                </div>
                
                <p class="text-gray-400 text-sm mb-8 leading-relaxed">${club.description}</p>
                
                <div class="mt-auto border border-dashed border-gray-700 p-6 rounded-lg bg-white/5">
                    <h4 class="text-white font-bold mb-3 flex items-center gap-2 uppercase text-sm">💼 Trabalhe Conosco</h4>
                    <p class="text-gray-400 text-xs mb-4">${club.workInfo}</p>
                    <a href="https://wa.me/?text=Tenho interesse na vaga da boate ${club.name}" target="_blank" class="btn-primary w-full block text-center py-3 rounded">
                        Candidatar-se via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

// --- FUNÇÕES GERAIS ---
window.openModelModalById = (id) => {
    const model = MODELS_DATA.find(m => m.id === id);
    if (model) openModelModal(model);
}

function openModelModal(model) {
    const modal = document.getElementById('generic-modal');
    const content = document.getElementById('modal-content-body');
    if (!modal) return;

    let galleryHTML = '';
    model.gallery.forEach(img => {
        const fallback = `https://picsum.photos/seed/${model.id}/400/600`;
        galleryHTML += `<img src="${img}" onerror="this.src='${fallback}'" class="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-gold transition-all" onclick="document.getElementById('main-modal-img').src=this.src">`;
    });

    const fallbackCover = `https://picsum.photos/seed/${model.id}/400/600`;

    content.innerHTML = `
        <div class="flex flex-col md:flex-row gap-8 h-full">
            <div class="w-full md:w-5/12 flex flex-col">
                <div class="h-[400px] md:h-[500px] overflow-hidden rounded-xl mb-4 border border-gray-800 relative group">
                    <img id="main-modal-img" src="${model.coverImage}" onerror="this.src='${fallbackCover}'" class="w-full h-full object-cover">
                    <div class="absolute inset-0 border-[1px] border-white/10 pointer-events-none rounded-xl"></div>
                </div>
                <div class="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    ${galleryHTML}
                </div>
            </div>
            <div class="w-full md:w-7/12 flex flex-col justify-between pl-0 md:pl-4">
                <div>
                    <div class="flex justify-between items-start mb-6 border-b border-gray-800 pb-6">
                        <div>
                            <h2 class="text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-wider mb-2">${model.name}</h2>
                            <p class="text-gold text-sm uppercase tracking-widest flex items-center gap-2">
                                <span class="w-2 h-2 rounded-full bg-gold inline-block"></span> ${model.location}
                            </p>
                        </div>
                        <div class="text-right">
                            <span class="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 block">${model.price}</span>
                            <span class="text-[10px] text-gray-500 uppercase tracking-widest">Por hora</span>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-300 mb-8 bg-white/5 p-4 rounded-lg">
                        <div class="text-center">
                            <span class="block text-gray-500 text-[10px] uppercase mb-1">Idade</span>
                            <span class="text-white font-bold text-lg font-display">${model.age}</span>
                        </div>
                        <div class="text-center border-l border-gray-700">
                            <span class="block text-gray-500 text-[10px] uppercase mb-1">Altura</span>
                            <span class="text-white font-bold text-lg font-display">${model.stats.height}</span>
                        </div>
                        <div class="text-center border-l border-gray-700">
                            <span class="block text-gray-500 text-[10px] uppercase mb-1">Peso</span>
                            <span class="text-white font-bold text-lg font-display">${model.stats.weight}</span>
                        </div>
                        <div class="text-center border-l border-gray-700">
                            <span class="block text-gray-500 text-[10px] uppercase mb-1">Busto</span>
                            <span class="text-white font-bold text-lg font-display">${model.stats.bust}</span>
                        </div>
                    </div>

                    <h3 class="text-gold font-bold uppercase text-xs mb-3 tracking-widest">Sobre Mim</h3>
                    <p class="text-gray-300 mb-8 leading-relaxed font-light text-sm md:text-base border-l-2 border-gold pl-4">
                        "${model.description}"
                    </p>
                </div>

                <div class="space-y-3 mt-auto">
                    <a href="https://wa.me/?text=Olá ${model.name}, vi seu perfil na Morena Bruta e gostaria de agendar." target="_blank" class="btn-primary w-full block text-center py-4 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                        Agendar Atendimento (WhatsApp)
                    </a>
                    <button class="w-full bg-transparent border border-gray-700 text-gray-400 hover:text-white hover:border-white font-bold py-3 rounded-lg uppercase text-xs tracking-widest transition-all">
                        Adicionar aos Favoritos
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}
