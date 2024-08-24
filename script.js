const espaco1 = document.querySelector("#campo1");
const espaco2 = document.querySelector("#campo2");
const seletor = document.querySelector(".operacao");
const igual = document.querySelector(".botao");
let caixaresp = document.querySelector("#resposta");

igual.addEventListener("click", calcular);

function calcular(){
    const valor1 = parseInt(campo1.value);
    const valor2 = parseInt(campo2.value);
    const calculo = seletor.value;
    if(calculo === "+")
        caixaresp.innerHTML = valor1 + valor2;
    if(calculo === "-")
        caixaresp.innerHTML = valor1 - valor2;
    if(calculo === "*")
        caixaresp.innerHTML = valor1 * valor2;
    if(calculo === "/")
        caixaresp.innerHTML = valor1 / valor2;
}


