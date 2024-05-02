// 1.-
//         1.1.- Itera del 0 al 10 usando un bucle "for" e imprime cada número por consola.
//         1.2.-  Haz lo mismo con un bucle "while".
//         1.3.- Haz lo mismo del 83 al 24 (bucle "for" y bocle "while").
console.log(`EJERCICIO 1`);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}
for (let i = 83; i >= 24; i--) {
  console.log(i);
}
i = 83;
while (i >= 24) {
  console.log(i);
  i--;
}

// 2.- Crea la variable "num" y haz que un bucle "for" imprima la tabla de multiplicar de ese número (del 0 al 10) en la consola, siguiendo el siguiente formato:

// num x 0 = 0
// num x 1 = num * 1
// num x 2 = num * 2
// etc..
console.log(`EJERCICIO 2`);
let num = 2;
for (let i = 0; i <= 10; i++) {
  console.log(num + `x${i}=` + i * num);
}

// 3.- Imprime por consola el siguiente patrón:
//  i    i**2   i**3
//  ----------------- Lo de abajo---------------
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
console.log(`EJERCICIO 3`);

for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`);
}

// 4.- Imprime por consola, , la suma de todos los números del 0 al 10.

console.log(`EJERCICIO 4`);
let sum = 0;
for (let i = 0; i <= 10; i++) {
  sum = sum + i;
}
console.log(sum);
// 5.-
//          5.1.- Imprime por consola los números del 0 hasta el 100, pero sólo los que estén comprendidos entre el 10 y 23, entre el 56 y 62.
//          5.2.- Luego haz otro log que muestre solo los números divisibles entre 5 o 7
console.log(`EJERCICIO 5`);

for (let i = 0; i <= 100; i++) {
  if (i >= 0 && i < 10) {
    continue;
  }
  if (i > 23 && i < 56) {
    continue;
  }
  if (i > 62 && i <= 100) {
    continue;
  } else {
    console.log(i);
  }
}

// 6.- Pídele al usuario que introduzca un número e imprime por consola: "La suma de todos los números pares del 0 al <<num>> es <<result>>,
// y la suma de todos los números impares del 0 al <<num>> es <<result>>."

console.log(`EJERCICIO 6`);

let num1 = prompt("escriba un numero");

let acomuladorPar = 0;
let acomuladorImpar = 0;

for (let i = 0; i <= parseInt(num1); i++) {
  if (i % 2 === 0) {
    acomuladorImpar = acomuladorImpar + i;

    continue;
  }
  if (i % 2 !== 0) {
    acomuladorPar = acomuladorPar + i;

    continue;
  }
}
console.log(
  `La suma de todos los números impares del 0 al ${num1} es ${acomuladorPar}`
);
console.log(
  `La suma de todos los números impares del 0 al ${num1} es ${acomuladorImpar}`
);
// console.log(`La suma de todos los números pares del 0 al ${num1} es ${acomulador}`);

// 7.- Imprime el siguiente patrón por consola:

// #
// ##
// ###
// ####
// #####
// ######
// #######
console.log(`EJERCICIO 7`);
for (let i = ""; i.length <= 10; i += "#") {
  console.log(i);
}

// 8.- Imprime por consola el siguiente patrón:
//                ##
//               ####
//              ######
//             ########
//            ##########
//           ############
//          ##############
//           ############
//            ##########
//             ########
//              ######
//               ####
//                ##
console.log(`EJERCICIO 8`);

let space="               "
for (let i = ""; i.length <= 19; i += "##") {
   space=space.slice(1)
  console.log(space+i);
}

for (let i = "################"; i.length >1; i =i.slice(2)) {
   space=space+space[1]
  console.log(space+i);
}

