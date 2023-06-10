const form = document.getElementById("formulario");
const select = document.getElementById("select");
const numero = document.getElementById("numero");
const calcular = document.querySelector('.btn-sub');
const pesos = document.querySelector('.pesos');
const reset = document.querySelector('.btn-res');

calcular.addEventListener("click", () => {
    if (select.value == "opt1") {
        pesos.innerHTML = (200 * numero.value) * 0.20
    } else if (select.value == "opt2") {
        pesos.innerHTML = (200 * numero.value) * 0.50
    } else if (select.value == "opt3") {
        pesos.innerHTML = (200 * numero.value) * 0.85
    }    
})

reset.addEventListener("click", () => {
    pesos.innerHTML = 0;
    form.reset();
})