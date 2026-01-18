
export interface Model {
  id: number;
  name: string;
  age: number;
  location: string;
  region?: string;
  price: string;
  category: string;
  coverImage: string;
  gallery: string[];
  stats: {
    height: string;
    weight: string;
    bust: string;
    waist: string;
    hips: string;
  };
  description: string;
  whatsapp?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Nightclub {
  id: number;
  name: string;
  address: string;
  description: string;
  image: string;
  gallery: string[];
  minValue: string;
  workInfo: string;
}
