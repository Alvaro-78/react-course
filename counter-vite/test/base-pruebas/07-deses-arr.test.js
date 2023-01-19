import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

describe('07-deses-arr', () => {
	test('Debe de retornar un arreglo', () => {
		const [letters, numbers] = retornaArreglo();

		// Sabiendo exáctamente lo que va a retornar
		expect(letters).toBe('ABC');
		expect(numbers).toBe(123);

		// Sabiendo el tipo que ha de retornar
		expect(typeof letters).toBe('string');
		expect(typeof numbers).toBe('number');

		// Este expect cubre que recibamos cualquier tipo de string
		expect(letters).toEqual(expect.any(String));
	});
});
