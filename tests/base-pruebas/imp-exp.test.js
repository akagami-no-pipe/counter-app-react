import { getHeroeByid, getHeroeByOwner } from '../../src/base-pruebas/imp-exp';
import heroes from '../../src/data/heroes';

describe('Probando exp imp', () => {

    test('getHeroeById debe de retornar un heroe segun su id', () => {
        
        const id = 1;
        const hero = getHeroeByid(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('getHeroeById debe de retornar undefined', () => {
        
        const id = 6;
        const hero = getHeroeByid(id);

        expect(hero).toBeFalsy(undefined);

    });

    test('getHeroeByOwner debe de retornar heroes para DC', () => {
        
        const owner = 'DC';
        const heros = getHeroeByOwner(owner);

        expect(heros.length).toBe(3);

        expect(heros).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }]
        );

        expect(heros).toEqual( heroes.filter(hero => hero.owner === owner) );

    });

    test('getHeroeByOwner debe de retornar heroes para Marvel', () => {
        
        const owner = 'Marvel';
        const heros = getHeroeByOwner(owner);

        expect(heros.length).toBe(2);

        expect(heros).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]);

        expect(heros).toEqual( heroes.filter(hero => hero.owner === owner) );

    });

});