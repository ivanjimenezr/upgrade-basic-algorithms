// Iteración #1: Variables 

let myFavoriteHero = 'Hulk'
let x = 50
let h = 5
let y = 10
let z = h + y

// Iteración #2: Variables avanzadas

// 1.1 Dado el siguiente javascript, cambia el valor de la propiedad age a 25.
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;

console.log(character);


// 1.2 Declara 3 variables con los nombres y valores siguientes 
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 
// Muestralos por consola: 
console.log(firstName+' '+lastName+', tengo '+age+ ' años y me gustan los lobos.');


// 1.3 Dado el siguiente javascript, imprime con un console.log la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
let suma = toy1.price + toy2.price;
// Muestralos por consola:
console.log('La suma del precio de ambos juguetes es '+ suma)


// 1.4 Dado el siguiente javascript, actualiza el valor de la variable globalBasePrice a 25000  y actualiza la propiedad finalPrice de todos los coches con el valor de su propiedad basePrice más el valor de la variable globalBasePrice.
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};


let cars = [car1, car2];

console.log(cars)