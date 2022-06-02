  /* 6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.
La fórmula del perímetro  es p = 2*(a +b)*/

let a = parseInt(prompt('Ingrese el valor del lado uno de un rectángulo'));
let b = parseInt(prompt('Ingrese el valor del lado dos de un rectángulo'));
let p;

p = perimetro( a, b);
document.write(`El valor del perimetro de su rectángulo es: ${p}`);

function perimetro( a, b){

    p = 2*(a +b);
    return p;//document.write(`El valor del perimetro de su rectángulo es: ${p}`);
}