// Crea una función llamada swap() que reciba un array y dos
//  parametros que sean indices del array.
//   La función deberá intercambiar la posición
//    de los valores de los indices que hayamos
//     enviado como parametro.
//  Retorna el array resultante.
const futgolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap (array, pos1, pos2){
    let romualdo = array[pos1];
    let muralla = array[pos2];
    array[pos1] = muralla;
    array[pos2] = romualdo;
    return array;
}
console.log(swap(futgolistas, 2,3));
