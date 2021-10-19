//A Mayor de edad
const edad = 25

if (edad >= 18) {
    console.log('Es mayor a 18 años')
} else {
    console.log('Es menor de edad')
}
console.log('===============================================')
//B Suma

const A = 20
const B = 30

const resultado = A + B

if (A < resultado) {
    console.log(`${resultado} es mayor a la constante ${A}`)
}else if (B < resultado) {
    console.log(`${resultado} es mayor a la constante ${B}`)
}

console.log('===============================================')
//C Par / Impar

const C = 35

if (C % 2 == 0) {
    console.log(`${C} Es numero par`)
} else {
    console.log(`${C} es un numero impar`)
}

console.log('===============================================')
//D dia de la semana

const dia = 'martes'

if(dia == 'lunes' ||  dia == 'martes' || dia == 'miercoles' || dia == 'jueves' || dia == 'viernes'){
    console.log('Es dia de la semana')
} else{
    console.log('Es fin de semana')
}