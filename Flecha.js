// Crear 5 funciones tipo Flecha. 
//  Deben tener una con cero parámetros, una con un parámetro y una con dos o más parámetros.


let saludo = () => "Hi Miguel " + "you're 18 years old"
let result = saludo();
console.log(result);


let neighborhood = nombre => ` You live in a neighborhood called ${nombre}`
console.log(result + neighborhood("Castilla"));


let information = (adress,number) => ` and your adress is ${ adress }  and your phone number is ${number}`
let about   = information("Aveniu 92 - street 12-1394",31256483);
console.log(result + neighborhood("Castilla") + about);


let liveWith = (relative,relative02,relative03) =>  {
    return `${relative}, ${relative02}, ${relative03}`;
}

let relatives = liveWith("Martin","Rosario","Dante");
console.log("You live with " + relatives );



let calcularPromedio = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) / 4;
let promedio = calcularPromedio(5, 8, 12, 20);
console.log("El promedio es: " + promedio);
