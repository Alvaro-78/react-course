import { heroes } from '../data/heroes';

// Esta función recibiendo por parámetro los publishers, avaluará si el publisher es uno válido sino saltará el error, si es válido retornará la lista de heroes filtrada por publisher

export const getHeroesByPublisher = (publisher) => {
	const validPublisher = ['DC Comics', 'Marvel Comics'];
	if (!validPublisher.includes(publisher)) {
		throw new Error(`${publisher} is not a valid publisher`);
	}
	return heroes.filter((heroe) => heroe.publisher === publisher);
};
