# **Glosario:**

# ciclo

un ciclo es una secuencia de instrucciones que se repite varias veces, hasta que la condición se cumpla

```js
for ( let i = 0; i <=10; i++) {
    alert(i);
}
```

# for each

ejecuta la función indicada una vez por cada elemento del array.

```js
const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
```

# map

crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

```js
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
```

# filter

Consiste en filtrar uno o más elementos (un subconjunto) de una colección más grande de elementos (un superconjunto) basándose en alguna condición/preferencia.

```js
let gente = [
    {nombre: "aaron", edad: 65},
    {nombre: "beth", edad: 2},
    {nombre: "cara", edad: 13},
    {nombre: "daniel", edad: 3},
    {nombre: "ella", edad: 25},
    {nombre: "fin", edad: 1},
    {nombre: "george", edad: 43},
]

let pequeños = gente.filter(persona => persona.edad <= 3)

console.log(pequeños);
```

# search

ejecuta una búsqueda que encaje entre una expresión regular y el objeto `String` desde el que se llama.

```js
function testinput(re, str) {
  var midstring;
  if (str.search(re) != -1) {
    midstring = ' contains ';
  } else {
    midstring = ' does not contain ';
  }
  console.log(str + midstring + re);
}
```

# operador ternario

El **operador condicional** (**ternario**) es el único operador en JavaScript que tiene tres operandos. Este operador se usa con frecuencia como atajo para la instrucción [if](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else).

```js
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? "Acceso Denegado" : secondCheck ? "Acceso Denegado" : "Acceso Permitido";

console.log( access );
```

# funciones

Las funciones son uno de los bloques de construcción fundamentales en JavaScript.

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```
