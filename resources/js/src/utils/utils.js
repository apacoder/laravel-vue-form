/**
 * @param {Object} obj Objeto a imprimir como string
 * @returns {String} string formateada a pretty print
 */
export const pp = obj => console.log(JSON.stringify(obj, null, 2))