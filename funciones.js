// 1.- Escribe una función que acepte la medida de los dos lados de un rectángulo y devuelva el área de dicho rectángulo.
//  Si no se le pasa ningún parámetro, los lados deberán ser, por defecto, 5 y 3.
//   Puedes usar prompts para los datos (opcional) y la consola del navegador para comprobar el resultado

function areaRectangle(x, y) {
  x = typeof x !== "undefined" ? x : 5;
  y = typeof y !== "undefined" ? y : 3;

  return x * y;
}

console.log(areaRectangle());

//   2.- Escribe una función que acepte grados Celsius y devuelva la conversión a grados Fahrenheit.

function Fahrenheit(c) {
 return (c * 9) / 5 + 32;
}

//   3.- Escribe una función que acepte dos números, un mínimo y un máximo, y devuelva un número aleatorio entre dichos números.
//    Para ello, tendrás que descubrir cómo funciona el método Math.random()

function between(min, max) {
    return Math.random() * (max - min) + min;
  }


//    4.- Escribe una función que calcule el área de un círculo si se le proporciona el radio
function areaCircle(r) {
  return Math.PI.toFixed(2) * r**2;
  }



//    5.- Escribe una función que te adivine el futuro. Recibirá como parámetros:
// -Número de hijos.
// -Nombre de la pareja.
// -Nombre de una ciudad.
// -Un trabajo. La función devolverá "Trabajarás en <<ciudad>>, trabajando como <<trabajo>>, y tendrás <<número de hijos>> hijos con <<pareja>>.".
// Deberás usar template literals para ello
let sons=[1,2,3,4,5]
let culish=["Daniela", "Diana", "Mariana", "Johana", "Valeria"]
let city=["Caracas", "Cartagena", "Margarita", "Medellin", "Venise"]
let job=["Desarrollador", "Astronauta", "Presidente", "Youtuber", "Influencer"]



function future(sons,culish,city,job) {

  const randomSonIndex = Math.floor(Math.random() * sons.length);
  const randomCulishIndex = Math.floor(Math.random() * culish.length);
  const randomCityIndex = Math.floor(Math.random() * city.length);
  const randomJobIndex = Math.floor(Math.random() * job.length);
//lo de arriba es para sacar el numero aleatorio de la posicion en el array
  

// establece el numero dentro del array para ubicarlo dentro en la posicion correspondiente
   return `Trabajarás en ${city[randomCityIndex]} ,trabajando como ${job[randomJobIndex]} , y tendrás ${sons[randomSonIndex]} hijos con ${culish[randomCulishIndex]} .`; 
}

