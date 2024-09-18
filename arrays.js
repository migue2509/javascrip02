let saludo = ["buenos", "dias", "como", "estas?"];

let saludoConcatenados = saludo.reduce((acumulado, saludos) => acumulado + " " + saludos);
console.log(saludoConcatenados); 

let saludoLargos = saludo.filter(saludos => saludos.length > 4);
console.log(saludoLargos); 

let saludoEnMayusculas = saludo.map(saludos => saludos.toUpperCase());
console.log(saludoEnMayusculas); 

saludo.forEach(saludos => console.log(saludos));

// 

let numeros = [100, 4500, 4, 7, 5256];

let sumaTotal = numeros.reduce((acumulado, numero) => acumulado + numero, 0);
console.log(sumaTotal); // 167

let mayores = numeros.filter(numero => numero > 100);
console.log(mayores); 

let numerosDuplicados = numeros.map(numero => numero * 5);
console.log(numerosDuplicados); 

numeros.forEach(numero => console.log(numero));

// 

let colores = ["red", "blue", "green", "yellow", "white" , "Purple"];


let coloresConcatenados = colores.reduce((acumulado, color) => acumulado + ", " + color);
console.log(coloresConcatenados); 


let coloresConR = colores.filter(color => color.includes('r'));
console.log(coloresConR); // ["rojo", "verde", "amarillo", "negro"]

let coloresMayusculas = colores.map(color => color.toUpperCase());
console.log(coloresMayusculas); 

colores.forEach(color => console.log(color));



let universidades = ["medellin", "antioquia",];


let totalCaracteres = universidades.reduce((acumulado, universidad) => acumulado + universidad.length, 0);
console.log(totalCaracteres);


let universidadesLargos = universidades.filter(universidad => universidad.length > 5);
console.log(universidadesLargos); 


let universidadConEtiqueta = universidades.map(universidad => "universidad de " + universidad );
console.log(universidadConEtiqueta); 

universidades.forEach(universidad => console.log(universidad));
