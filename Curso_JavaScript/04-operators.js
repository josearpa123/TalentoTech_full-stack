//Operators 

//Operadores aritmeticos
console.log(5 + 10)

let a = 10
let b = 5 
console.log(a * b)//Multiplicacion
console.log(a / b)//divicion
console.log(a - b)//resto
console.log(a + b)//suma

console.log(a % b)//Modulo
console.log(a ** b)//Exponente

a++ //Incremento
console.log(a)

b-- // Decremento
console.log(b)

//Operadores de asignacion
let myVariable = 2
myVariable += 2
console.log(myVariable)

myVariable *= 2
myVariable /= 2
myVariable -= 2
myVariable **= 2

//Operadores de comparacion

console.log(a > b)
console.log(a < b)
console.log(5 <= 5)
console.log(10 >= 10)
console.log(a == b)
console.log(a == 11)//Igualdad por valor
//console.log(a == "11")//igualdad por valor
console.log(a === a)//igualdad por identidad(por tipo y valor)
console.log(a === "6")

console.log(a != 6)
console.log(a !== "11")

//Trythy values(valores verdaderos)
//todos los numeros positivos y negativos menos el cero
//boolean trye

//Falsy values(valores falsos)
/**
 * 0
 * 0n
 * null
 * undefined
 * NaN
 * el boolean false
 * cadenas de texto vacias
 */

//Operadores Logicos

//and(&&)
console.log(5>10 && 15 > 20)
console.log(5<10 && 15 < 20)
console.log(5>10 && 15 < 20)

//or(||)
console.log(5>10 || 15 > 20)
console.log(5<10 || 15 < 20)
console.log(5>10 || 15 < 20)

//Operadores ternarios

const isRaning = true
isRaning ? console.log("Esta lloviendo"):("No esta lloviendo") 