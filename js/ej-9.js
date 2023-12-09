//Escribe un programa que pida una frase y escriba las vocales que aparecen
const frase = prompt("escribi una frase para extraer sus bocales");
const minusculas = frase.toLocaleLowerCase();//volvemos minusculas para evitar que se rompa cuando usen mayusculas
const regex  = /[a+e+i+o+u]/g;//expresiones regulares: o sea lo que busco que tenga la frase
const resultado = minusculas.match(regex); //revisa el string y devulve uno nuevo con la expresion regular que envie como parametro

document.write(resultado);


