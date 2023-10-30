/*
Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/ 
const n1= parseInt(prompt("ingresa un numero"));

if(n1%2==0 && n1%3==0 && n1%5==0 && n1%7==0){
    document.write(`<p>${n1} no es divisible ni en 2,3,5 y 7</p>`);
}if(n1%2==0){
    document.write(`<p>${n1} es divisible en 2</p>`);
}if(n1%3==0){
    document.write(`<p>${n1}  es divisible en 3</p>`);
}if(n1%5==0){
    document.write(`<p>${n1}  es divisible en 5</p>`);
}if(n1%7==0){
    document.write(`<p>${n1}  es divisible en 7</p>`);
}