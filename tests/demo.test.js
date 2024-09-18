

// test('Esta prueba no debe fallar', () => {
//     if( 0===1 ) throw new Error('no puede dividir entre 0');
// });

describe('pruebas del demo component', () => { 

    test('Esta prueba no debe fallar', () => {
        //1. inicializacion
        const message1 = 'Hola mundo';
        //2. estimuulo
        const message2 = message1.trim();
        //3. observar comportaamiiento
        expect(message1).toBe(message2);        
    });

});