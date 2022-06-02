/*7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados 
del 1 al 10 del número elegido por el usuario.*/

let numero = parseInt(prompt('Ingrese un numero para ver su correspondiente tabla de multiplicación'));
let i = 1;

while (i <= 10){
    document.write(`${numero} * ${i} = ${tabla(numero, i)} <br>`);
    i ++;
}


function tabla(numero, i){
    return numero * i;
}