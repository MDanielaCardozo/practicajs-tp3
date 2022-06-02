/* 3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de 
la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma,
 repitiendo 50 veces esta operación.*/

 let dadoUno;
 let dadoDos;
 
alert('Lanza el dado numero uno');
    dadoUno = parseInt(Math.random()* (6 - 1) + 1);
alert('Lanza el dado numero dos');
    dadoDos = parseInt(Math.random()* (6 - 1) + 1);
 

document.write(`El valor del dado uno es ${dadoUno} <br>`);
document.write(`El valor del dado dos es ${dadoDos} <br>`);

let suma = dadoUno + dadoDos;
