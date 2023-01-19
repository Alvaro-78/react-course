import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';
import { getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';

describe('Prueba 08-imp-exp', () => {
	test('getHeroeById debe de retornar un héroe por ID', () => {
		const id = 1;
		const heroe = getHeroeById(id);

		expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
	});

	test('getHeroeById debe de retornar un undefined', () => {
		const id = 100;
		const heroe = getHeroeById(id);

		expect(heroe).toBeFalsy();
	});

	test('getHeroesByOwner debe retornar los heroes de DC', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);
		console.log(heroes);
		expect(heroes.length).toBe(3);
		expect(heroes).toEqual([
			{ id: 1, name: 'Batman', owner: 'DC' },
			{ id: 3, name: 'Superman', owner: 'DC' },
			{ id: 4, name: 'Flash', owner: 'DC' },
		]);

		// De esta forma el test es más automático
		expect(heroes).toEqual(heroes.filter((heroe) => heroe.owner === owner));
	});
});
