
const nombre = 'Felipe';
const apellido = 'Hernández';
const nombreCompleto = `${nombre} ${apellido}`;

export const getSaludo = (nombre) => {
    return 'Hola ' + nombre; 
}

console.log(getSaludo(nombreCompleto));