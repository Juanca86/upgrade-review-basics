// Crea una función llamada `findArrayIndex` que reciba como parametros un array de 
// textos y un texto y devuelve la posición del array cuando el valor del array sea 
// igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.
// Sugerencia de función:
const frutas = ['melocoton', 'moto', 'ballena', 'dinosaurio', 'whiski']
let fruta = 'whiski'
function findArrayIndex(array, text) {
    let algo;
    for (let i = 0; i < array.length; i++) {
        if(text == array[i]){
            algo = i
        }
    }    
    return algo
}
console.log(findArrayIndex(frutas, fruta));