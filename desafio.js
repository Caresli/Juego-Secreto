//1. Crear una función que muestra "¡Hola, mundo!" en la consola.
function mensaje(){
    console.log("¡Hola, mundo!");
}
mensaje();

//2. Crear una función que recibe un nombre como parámetro y muestra "¡Hola, [nombre]!" en la consola.
function mensajeNombre(nombre){
    console.log(`¡Hola, ${nombre}`);
}
mensajeNombre("Estefany");

//3. Crear una función que recibe un número como parámetro y devuelve el doble de ese número.
function Doble(numero){
    return numero*2;
}

let resultadoDoble = Doble(7);
console.log(resultadoDoble);

//4. Crear una función que recibe tres números como parámetros y devuelve su promedio.
function Promedio(numero1, numero2, numero3){
    return (numero1+numero2+numero3)/3;
} 

let resultadoPromedio = Promedio(34, 23, 2);
console.log(resultadoPromedio);

//5. Crear una función que recibe dos números como parámetros y devuelve el mayor de ellos.
function mayor( numero1, numero2){
    return numero1>numero2 ? a : b;
}
let numeroMayor = mayor(3, 6);
console.log(numeroMayor);

//6. Crear una función que recibe un número como parámetro y devuelve el resultado de multiplicar ese número por sí mismo.
function cuadrado(numero){
    return numero*numero;
}

let resultadoCuadrado = cuadrado(67);
console.log(resultadoCuadrado);

