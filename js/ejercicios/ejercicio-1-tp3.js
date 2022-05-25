/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista  los doce nombres del arreglo.*/

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses.length);

for(let lista = 0; lista < meses.length; lista++){
    document.write('<br>'+meses[lista]);
}