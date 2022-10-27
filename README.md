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

