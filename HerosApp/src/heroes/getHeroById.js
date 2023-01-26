import { heroes } from './data/heroes';

export const getHeroById = (id) => {
	// Si existe lo devuelve sino retorna undefined
	return heroes.find((hero) => hero.id === id);
};
