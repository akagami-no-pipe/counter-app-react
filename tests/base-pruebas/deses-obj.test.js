import { usContext } from "../../src/base-pruebas/deses-obs";

describe('probando deses obj', () => {

    test('debe retornar un objeto', () => {
        const usuario = {
            clave: 'azulMar',
            edad: 140
        }
        const obj = usContext(usuario);
        console.log(obj);
        expect(typeof obj.nombreClave).toEqual('string');
        expect(typeof obj.anios).toEqual('number');
        expect(typeof obj.latlng).toEqual('object');
    
        expect(typeof obj.latlng.lat).toEqual('number');
        expect(typeof obj.latlng.lng).toEqual('number');
    });

})