/*
Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
*/ 
const n1= parseInt(prompt("ingresa un numero"));
const divisores =[];
console.log(divisores);
if(n1%2==0){
    const dos = 2;
    divisores.push(dos);
}if(n1%3==0){
    let tres=3;
    divisores.push(tres);
}if(n1%5==0){
    let cinco=5;
    divisores.push(cinco);
}if(n1%7==0){
    let siete=7;
    divisores.push(siete);    
}


if(divisores.length>0){
    
    document.write(`<p>${n1} es divisible en ${divisores}</p>`);
}else{
const ninguno="no es divisible ni por 2,3,5 y 7"
document.write(`<p>${n1} ${ninguno}</p>`);
}


