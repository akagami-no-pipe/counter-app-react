
export const usContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.234,
            lng: 76.044,
        },
    }
};