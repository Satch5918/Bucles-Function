// Ejercicios:

// 1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
// multiplicar (Los primeros 10 multiplos).


/* let numero = parseInt((prompt("Ingrese un Numero")));

for (let i=1; i <= 10; i++ ){
let resultado = numero * i;
console.log(`${numero} X ${i} = ${resultado}`);
}
 */

//------------------------------------------------------//

// 2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
// acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.

/* let total = 0;
let num = prompt("Ingrese un número (0 para terminar):");

    while (num != 0) {
    num = parseInt(num);
    total += num;
    num = prompt("Ingrese un número (0 para terminar):");
}
alert (`La suma de los números ingresados es: ${total}`);
 */
//------------------------------------------------------//

// 3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
// variable guardar un numero que este en el rango 1 - 100. La persona debera poder
// ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
// valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
// nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
// cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
// felicitaciones y decirle en cuantos intentos lo ha realizado.


/* function valor(){
    let numeroSecreto = 39;
    let numeroIngresado = parseInt((prompt("Ingrese un Numero entre el 0 y el 100")));
    if(numeroIngresado === numeroSecreto ){
        alert("felicitaciones!!! has acertado el valor");
    }

    else if (numeroIngresado > numeroSecreto){
        alert("Tu numero es Mayor al Numero Secreto,vuelve a intentar")
        valor()
    }
    else if(numeroIngresado < numeroSecreto){
    alert("Tu numero es menor al Numero Secreto,vuelve a intentar")
        valor()
    }
    else{
        alert("por favor ingresar un valor correcto")
        valor()
    }
    
}
valor(); */

//------------------------------------------------------//

// 4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
// si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
// Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
// como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
// numero ya no es primo.

/* function esPrimo(num) 
{
    if (num<=1) return false;
    for (let i = 2; i <= num-1; i++)
        if (num % i == 0) return false;
    return true;
}
console.log(esPrimo(17));
console.log(esPrimo(50)); */


//------------------------------------------------------//

// 5. Realizar un programa que permita dado un numero, mostrar todos sus divisores.


/* function mostrarDivisores(numero) {
    let divisores = [];

    for (let i = 1; i <= numero; i++) {

    if (numero % i === 0) {
        divisores.push(i);
    }
    }
    console.log(divisores);
}
mostrarDivisores(100);
mostrarDivisores(52); */

//------------------------------------------------------//

// 6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
// muestre un mensaje por consola con cada uno de los elementos del array.

/* let listaPaises = ["Brasil", "Argentina", "Chile", "Uruguay", "México", "Bolivia", "Perú", "Ecuador", "Colombia", "Venezuela"];

for (let paises of listaPaises){
console.log(paises);
} */

//------------------------------------------------------//

// 7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
// doble de cada uno de los elementos.

/* let listaNumeros = [12,15,78,15,65,17,89,32,99,3];

for (let numeros of listaNumeros){
  numeros = numeros * 2
console.log(numeros);
}
 */
//------------------------------------------------------//

// 8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
// objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
// que muestre un mensaje de presentacion por cada elemento del array.
/* let familia = [
{
    nombre: "Juan",
    edad: 38,
    genero: "masculino",
    hobby: "Escribir Libros"
},
{
    nombre: "Ana",
    edad: 35,
    genero: "femenino",
    hobby: "Cocinar"
},
{
    nombre: "Lucas",
    edad: 15,
    genero: "masculino",
    hobby: "Jugar a los Jueguitos"
},
{
    nombre: "Sofía",
    edad: 8,
    genero: "femenino",
    hobby: "Pintar"
},
{
    nombre: "Nico",
    edad: 5,
    genero: "masculino",
    hobby: "Mirar dibujos animados"
}
];

function arrayDeObjet (objeto){
    for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    console.log(`Hola, mi nombre es ${persona.nombre}, tengo ${persona.edad} años. Soy ${persona.genero} y mi hobby es ${persona.hobby}.`);
    }
}
arrayDeObjet(familia); */

//------------------------------------------------------//

// 9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
// muestre los numeros impares.

/* let listaNumeros = [12,15,78,14,65,17,89,32,99,3];

for (let numeros of listaNumeros){
if(numeros % 2 !== 0){
console.log(numeros);
    }
}
 */

//----------------------------------------------------------//


// 10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
// numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
// el usuario ingresa un 0.

/* 
let totalPares = 0
let totalImpares = 0
let numero = parseInt(prompt("Ingrese un número (0 para terminar):"))

while (numero != 0) {
    if (numero % 2 === 0){
        totalPares = numero + totalPares
        numero = parseInt(prompt("Ingrese un número (0 para terminar):"))
    }else{
        totalImpares =  numero + totalImpares
        numero = parseInt(prompt("Ingrese un número (0 para terminar):"))
    }
}

alert(`La suma de los números pares es de ${totalPares}`)
alert(`La suma de los números impares es de ${totalImpares}`) */

//--------------------------------------------------------//

// 11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas grande.

/* let listaNumeros = [12,15,78,14,65,17,89,322,99,3];

const numMaximo = listaNumeros.reduce((a,b) => Math.numMaximo(a, b));

console.log(numMaximo); */

//------------------------------------------------------//

// 12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
// numero mas chico.

/* let listaNumeros = [12,15,78,14,65,17,89,322,99,3];

const min = listaNumeros.reduce((a,b) => Math.min(a, b));

console.log(min); */

//---------------*-*-*-*-*-*-*---------------------------------------//

// 13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
// ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
// manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
// un empate. Caso contrario mostrar un mensaje con el nombre de la persona
// ganadora.

// let player1 = prompt("Player 1 Ingrese su Nombre");
// let player2 = prompt("Player 1 Ingrese su Nombre");

// let manos = ["piedra", "papel", "tijera"];

//------------------*-*-*-*-*-*-*------------------------------------//

// 14. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.


/* let triangulo = "";

for (let i = 0; i < 5; i++) {
    triangulo += "*";
    console.log(triangulo);
} */


//------------------------------------------------------//

// 15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
// pero invertido.

/* for (let x = 5 ; x >= 1; x--){
    let triangulo = "";
    for (let i = 1; i <= x; i++) {
    triangulo += "*"; 
}
    console.log(triangulo);
}
 */
//------------------------*-*-*-*-*------------------------------//


//16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
//pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR)

/* let numbers = [90, 50, 150, 7, 3, 80, 65, 27, 48, 13];

for (let i = 0; i < numbers.length; i++) {

    for (let j = 0; j < numbers.length - 1; j++) {

        if (numbers[j] > numbers[j + 1]) {
        let numero = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = numero;
        }
    }
    
}
console.log(numbers); */

//------------------------*-*-*-*-*------------------------------//