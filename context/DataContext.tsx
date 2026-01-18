
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Model, Nightclub } from '../types';
import { MODELS_DATA as INITIAL_MODELS, CLUBS_DATA as INITIAL_CLUBS } from '../data';

interface DataContextType {
  models: Model[];
  clubs: Nightclub[];
  addModel: (model: Model) => void;
  updateModel: (model: Model) => void;
  deleteModel: (id: number) => void;
  addClub: (club: Nightclub) => void;
  updateClub: (club: Nightclub) => void;
  deleteClub: (id: number) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [clubs, setClubs] = useState<Nightclub[]>([]);

  useEffect(() => {
    const savedModels = localStorage.getItem('mb_models');
    const savedClubs = localStorage.getItem('mb_clubs');
    
    setModels(savedModels ? JSON.parse(savedModels) : INITIAL_MODELS);
    setClubs(savedClubs ? JSON.parse(savedClubs) : INITIAL_CLUBS);
  }, []);

  useEffect(() => {
    if (models.length > 0) localStorage.setItem('mb_models', JSON.stringify(models));
  }, [models]);

  useEffect(() => {
    if (clubs.length > 0) localStorage.setItem('mb_clubs', JSON.stringify(clubs));
  }, [clubs]);

  const addModel = (model: Model) => setModels(prev => [model, ...prev]);
  const updateModel = (model: Model) => setModels(prev => prev.map(m => m.id === model.id ? model : m));
  const deleteModel = (id: number) => setModels(prev => prev.filter(m => m.id !== id));

  const addClub = (club: Nightclub) => setClubs(prev => [club, ...prev]);
  const updateClub = (club: Nightclub) => setClubs(prev => prev.map(c => c.id === club.id ? club : c));
  const deleteClub = (id: number) => setClubs(prev => prev.filter(c => c.id !== id));

  return (
    <DataContext.Provider value={{ models, clubs, addModel, updateModel, deleteModel, addClub, updateClub, deleteClub }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useData must be used within DataProvider');
  return context;
};
