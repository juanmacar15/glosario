addEventListener("DOMContentLoaded", (e) => {
    let formulario = document.querySelector("#form");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        for ( let i = 0; i <=10; i++) {
            alert(i);
        }
        
    })
})