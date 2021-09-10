//Ejercicio 5
let numbers = [];
function fillNumbers(max) {
    for (var i = 1; i <= max; i++) {
        numbers.push(i);
    }
}
fillNumbers(10);
console.log("Array original")
console.log(numbers);

let numbersX2 = [];
function fillNumberX2() {
    for (var x = 0; x <= numbers.length - 1; x++) {
        numbersX2.push(numbers[x] * 2);
    }
}
fillNumberX2();
console.log("Multiplicando X2")
console.log(numbersX2);

//Ejercicio 6
//Del array anterior filtrar los que sean mayores a 5
let mayor_a_5 = [];
mayor_a_5 = numbersX2.filter(num => num > 5);
console.log("Mayores a 5")
console.log(mayor_a_5);

//Ejercicio 7
//Del array anterior buscar el primero que sea mayor a 10
console.log("Primero mayor a 10")
console.log(mayor_a_5.find(num => num > 10));

//Ejercicio 8
//Filtrar pockemones con poder mayor a 10
let pokemones = [ 
    { nombre: 'pikachu', poder: 12 },
     { nombre: 'bulbasaur', poder: 6 },
     { nombre: 'charizard', poder: 19 },
     { nombre: 'squirtle', poder: 3 },
     { nombre: 'metwo', poder: 6 }, 
]
console.log("Pockemon con poder mayor a 10");
console.log(pokemones.filter(pockemon => pockemon.poder > 10));