import heroes from "../data/heroes";


export const getHeroeByid = (id) => heroes.find( (heroe) => heroe.id === id );

export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);