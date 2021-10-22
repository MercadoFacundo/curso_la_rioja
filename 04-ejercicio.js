let numeros = [10,20,55,321321,312,4043,4341,0,312321,1]
//sumamos el array
let suma = numeros.reduce((previous, current) => current += previous);
//sacamos el promedio
let promedio = suma / numeros.length;
//imprimimos
console.log(`La suma total del array es de: ${suma} y el promedio es de ${promedio}`)
console.log(promedio)

console.log('==========================================================')

let personas = [
    { name: 'juana', age: 12 },
    { name: 'jhonny', age: 22 },
    { name: 'luis', age: 51 },
    { name: 'claudia', age: 33 },    
]
let mayores = personas.filter(function (element) {
    return element.age >= 18;
});
let menores = personas.filter(function (element) {
    return element.age < 18;
});
console.log("Mayores: ", mayores)
console.log('Menores: ', menores)