//1. Escribe un comentario en una linea

//Hello my name is Jose Arias

//2. Escribe un comentario en varias lineas

/**
 * Hello my name is Jose Arias,
 * I'm from cali colombia 
 * I live in cali and studying engeniering system
 */

//3.Declara variables con valores asociados a todos los datos tipo primitivos

let name = "Jose Arias"
let age = 20
let isStudent = true
let Undefinedvalue
let saldo = null
let clave = Symbol("jdap")
let BigIntvalue = BigInt(12398248930)
//4. Imprime por consulta el valor de todas las variables

console.log(
   "Name " + name +
    "\nage " + age +
    "\nIs student "+ isStudent +
    "\nsaldo " + Undefinedvalue +
    "\nSaldo Real " + saldo +
    "\nClave " + clave.toString() +
    "\nrandom " + BigIntvalue
)

//5.imprime por consola el tipo de datos de todas las variables

console.log(typeof name)
console.log(typeof age)
console.log(typeof isStudent)
console.log(typeof Undefinedvalue)
console.log(typeof saldo)
console.log(typeof clave)
console.log(typeof BigIntvalue)

//6. A continuacion, modifica los valores de las variables por otros de mismo tipo

name = "Victor Arias"
age = 18
isStudent = true
Undefinedvalue = undefined
saldo = 10000
clave = Symbol("jmaa")
BigIntvalue = BigInt(234324245432)

console.log(
    "Name " + name +
     "\nage " + age +
     "\nIs student "+ isStudent +
     "\nsaldo " + Undefinedvalue +
     "\nSaldo Real " + saldo +
     "\nClave " + clave.toString() +
     "\nrandom " + BigIntvalue
 )
 
//7. A continuacion, modifica los valores de las variables por otros de distinto tipo

name = 20
age = "no tiene"
isStudent = true
Undefinedvalue = undefined
saldo = Symbol("no")
clave = 12345
BigIntvalue =322 

console.log(
    "Name " + name +
     "\nage " + age +
     "\nIs student "+ isStudent +
     "\nsaldo " + Undefinedvalue +
     "\nSaldo Real " + saldo.toString() +
     "\nClave " + clave +
     "\nrandom " + BigIntvalue
 )
 

//8.Declara constantes con valoreas asociados a todos los tipos de datos primitivos

const nam2 = "Jose Arias"
const age2 = 20
const isStudent2 = true
const saldo2 = null
const clave2 = Symbol("jdap")
const BigIntvalue2= BigInt(12398248930)

//9. A continuacion, modifica los valores de las contantes

//10. Comenta las lineas que produzcan algun tipo de error al ejecutarse 