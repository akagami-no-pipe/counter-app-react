import { retornaArrglo } from "../../src/base-pruebas/deses-arr";

describe('Probando deses arr', () => {

    test('debe retornar un string y un numberrr', () => {
        const [letters, numbers] = retornaArrglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    });

});