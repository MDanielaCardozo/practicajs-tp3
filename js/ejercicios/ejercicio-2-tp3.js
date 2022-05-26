/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades
 y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar 
 el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.*/

let ciudad;
let ciudades = [];

ciudad = prompt('Ingrese nombre de una ciudad');

for (i = 0; ciudad != null; i++){
    
    ciudades[i] = ciudad; 
    ciudad = prompt('Ingrese nombre de una ciudad');

}

console.log(ciudades.length);
console.log(ciudades[0], ciudades[2], ciudades[i-1]);

ciudades [i] = 'Paris'; 

ciudades[1] = 'Barcelona';

for (i = 0; i < ciudades.length; i++){
    document.write(ciudades[i]+' ; ');
}