addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));
        
    })
})