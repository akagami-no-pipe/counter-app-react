import { getHeroeByid } from "./imp-exp";

export const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeByid(id);
            if (p1) {
                resolve(p1);
            } else {
                reject('No se pudo encontrar el heroe ' + id);
            }
        }, 1500);
    });

}