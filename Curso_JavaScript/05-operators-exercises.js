// 1. Operaciones aritméticas
let suma = 10 + 5;
let resta = 15 - 7;
let multiplicacion = 4 * 3;
let division = 20 / 4;
let modulo = 21 % 5;

// 2. Operaciones de asignación
let asignacionSuma = suma;
asignacionSuma += 5; // asignacionSuma = 20
let asignacionResta = resta;
asignacionResta -= 3; // asignacionResta = 5
let asignacionMultiplicacion = multiplicacion;
asignacionMultiplicacion *= 2; // asignacionMultiplicacion = 24
let asignacionDivision = division;
asignacionDivision /= 2; // asignacionDivision = 2.5
let asignacionModulo = modulo;
asignacionModulo %= 2; // asignacionModulo = 1

// 3. Comparaciones verdaderas
console.log(5 > 3); // true
console.log(10 >= 10); // true
console.log(7 === 7); // true
console.log(4 !== 5); // true
console.log(15 < 20); // true

// 4. Comparaciones falsas
console.log(5 < 3); // false
console.log(10 > 15); // false
console.log(7 === 8); // false
console.log(4 !== 4); // false
console.log(15 <= 10); // false

// 5. Operador lógico AND
console.log(5 > 3 && 10 > 7); // true

// 6. Operador lógico OR
console.log(5 > 10 || 3 < 7); // true

// 7. Combinación de AND y OR
console.log((5 > 3 && 10 < 15) || 20 === 20); // true

// 8. Negación
console.log(!(5 > 10)); // true

// 9. Operador ternario
let resultado = 5 > 3 ? "Es mayor" : "Es menor";
console.log(resultado); // "Es mayor"

// 10. Combinación de operadores aritméticos, de comparación y lógicos
let combinado = (10 + 5 > 12) && (20 % 3 === 2 || 15 / 3 === 5);
console.log(combinado); // true
