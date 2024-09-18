import { getSaludo } from "../../src/base-pruebas/template-string";

describe('Pruebas en template string', () => { 

    test('Debe retornar Hola Felipe Hernández', () => {
        const nombre = 'Felipe';
        const message = getSaludo(nombre);
        expect(message).toBe(`Hola ${nombre}`)
    });

});