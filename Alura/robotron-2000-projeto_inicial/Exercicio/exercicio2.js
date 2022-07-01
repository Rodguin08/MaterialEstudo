const elemento = document.querySelector("#calcular");       //cria uma variavel com nome de elemento que seleciona atraves do DOM o elemento calcular
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {            //pega o elemento, adiciona um listener, e quando houver o click, executa a função anônima, que so é executada dentro do evento
    resultado.innerHTML = "Fui clicado"
})