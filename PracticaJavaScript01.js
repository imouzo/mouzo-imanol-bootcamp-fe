//Ejercicio 1
function Cuenta(nombre, apellido, numeroCuenta) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.numeroCuenta = numeroCuenta;
    this.saldo = 0;
    this.movimientos = [];
    this.debitos = [];
    this.creditos = [];

    this.getTitular = () => this.nombre + ' ' + this.apellido;

    this.debitar = (monto) => {
        if (monto <= this.saldo) { 
            this.saldo -= monto; 
            this.movimientos.push(" - $" + monto);
            this.debitos.push(monto);
        }
        else { console.log('Saldo insuficiente') }
    }

    this.acreditar = (monto) => {
        this.saldo += monto;
        this.movimientos.push(" + $" + monto);
        this.creditos.push(monto);
    }

    this.mostrarSaldo = () => "Saldo disponible: $" + this.saldo;

    this.verMovimientos = () => console.log("Movimientos: " + this.movimientos);

    this.verDebitos = () => console.log("Debitos: " + this.debitos);
    this.verCreditos = () => console.log("Acreditaciones: " + this.creditos);
}

let cuenta1 = new Cuenta('Imanol', 'Mouzo', "123456/789");
let cuenta2 = new Cuenta('Fiorella', 'Silvestre', "987654/321");

//Ejercicio 2 y 3
console.log(cuenta1);
console.log(cuenta2);
console.log(cuenta1.getTitular());

cuenta1.acreditar(49000);
cuenta1.debitar(50000);
cuenta1.debitar(10000);
console.log(cuenta1.mostrarSaldo());
cuenta1.verMovimientos();

//Ejercicio 4
cuenta1.verCreditos();
cuenta1.verDebitos();

//-------------------------------------------------------------------------------------------------------

//Ejercicio 1
function Computadora(ram, cpu, disco, monitor, gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

const compu1 = new Computadora('8gb', 'i9', '512gb', 'Samsung Ultrawide 32', false);
const compu2 = new Computadora('8gb', 'i9', '256gb', 'Samsung 24', true);
const compu3 = new Computadora('16gb', 'i7', '512gb', 'Samsung Ultrawide 29', false);
const compu4 = new Computadora('32gb', 'i9', '1TB', 'Samsung Ultrawide 32', true);
const compu5 = new Computadora('8gb', 'i7', '512gb', 'Dell Ultrawide 32', false);

//Ejercicio 2
let computadoras = [compu1, compu2, compu3, compu4, compu5];
console.log("cantidad: " + computadoras.length)
computadoras.forEach((computadora,i) => console.log("Compu " + i + " " + JSON.stringify(computadora))); 

//Ejercicio 3
let compuGPU = computadoras.filter(compu => compu.gpu);
compuGPU.forEach((computadora,i) => console.log("Compu con GPU " + i + " " + JSON.stringify(computadora)));

//Ejercicio 4
// Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, 
// ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. 
// Luego crear una función que, a partir de ese dato, devuelva cuánto significa eso en pesos 
// ingresando por parámetro el precio del litro de nafta.
function calcularConsumo(kmsRecorrido) {
    return kmsRecorrido * 2 / 100;
}
var consumo = calcularConsumo(300);
console.log("Consume " + consumo + " kms");

function calcularCosto(precio) {
    return "Costo $" + (consumo * precio);
}
console.log(calcularCosto(1000));