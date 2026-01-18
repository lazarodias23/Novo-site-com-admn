import { Model, Nightclub } from './types';

export const MODELS_DATA: Model[] = [
    // --- CACHOEIRA DO SUL ---
    {
        id: 1,
        name: "Angel",
        location: "Cachoeira do Sul - RS",
        region: "Cachoeira do Sul",
        age: 23,
        price: "R$ 400",
        category: "Presencial e Online",
        coverImage: "https://picsum.photos/seed/angel/600/800", 
        gallery: ["https://picsum.photos/seed/angel/600/800", "https://picsum.photos/seed/angel2/600/800", "https://picsum.photos/seed/angel3/600/800"],
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
        coverImage: "https://picsum.photos/seed/yasmin/600/800",
        gallery: ["https://picsum.photos/seed/yasmin/600/800", "https://picsum.photos/seed/yasmin2/600/800", "https://picsum.photos/seed/yasmin3/600/800"],
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
        coverImage: "https://picsum.photos/seed/thais/600/800",
        gallery: ["https://picsum.photos/seed/thais/600/800", "https://picsum.photos/seed/thais2/600/800"],
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
        coverImage: "https://picsum.photos/seed/sabrina/600/800",
        gallery: ["https://picsum.photos/seed/sabrina/600/800", "https://picsum.photos/seed/sabrina2/600/800"],
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
        coverImage: "https://picsum.photos/seed/maiara/600/800",
        gallery: ["https://picsum.photos/seed/maiara/600/800"],
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
        coverImage: "https://picsum.photos/seed/adri/600/800",
        gallery: ["https://picsum.photos/seed/adri/600/800"],
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

export const CLUBS_DATA: Nightclub[] = [
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
