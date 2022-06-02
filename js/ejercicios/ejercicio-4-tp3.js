/*4- Escribir el código de una función a la que se pasa como parámetro un número entero
 y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
 Mostrar por pantalla el resultado devuelto por la función.*/



 let num = parseInt(prompt('Ingrese un numero entero'));

 if(numeroEntero(num)==true)
 document.write(`Resultado es Par : `+num)
 else
 document.write('Resultado es Impar: '+num)
 
 function numeroEntero(num){
     if(num % 2 == 0)
     return true;//document.write(`Resultado es Par : `+num);
     else
     return false;//document.write('Resultado es Impar: '+num);
 }
