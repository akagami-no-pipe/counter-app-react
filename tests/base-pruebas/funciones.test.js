import { getUser, getUsuarioActivo } from "../../src/base-pruebas/funciones";

describe('pruebas funciones', () => { 

    test('getUser debe retornaar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'Felipehft',
        };

        const user = getUser();

        expect(testUser).toEqual(user)
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Felipe';
        const user = getUsuarioActivo(name);
        
        expect(user.username).toBe(name);
        expect(user).toEqual({
            uid: 'ABC567',
            username: name,
        });
    });
})