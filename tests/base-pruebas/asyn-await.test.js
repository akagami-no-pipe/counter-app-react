import { getImagen } from '../../src/base-pruebas/asyn-await'

describe('probbando async await', () => {

    test('getImagen debe retornar un url de la imagen', async () => {

        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');
    })

})