const show = document.querySelector("[data-show]")
const hide = document.querySelector("[data-hide]")
const lista = document.querySelector("[data-lista]")

show.addEventListener("click", () => {
    lista.style.visibility = "visible"
})

hide.addEventListener("click", () => {
    lista.style.visibility = "hidden"
})







/*
ideias de outras versões

 botao.addEventListener("click", () => {
     lista.style.visibility = "hidden"
 })


 botao.forEach( (elemento) => {                                   forEach é um loop for, para arrays, no caso, controle, que seleciona todos os botões
     elemento.addEventListener("click", (evento) => {
         manipulaDados(evento.target.dataset.controle, evento.target.parentNode)                    evento.target.dataset.controle seleciona o atributo rastreado pelo target com o data-attribute definido com controle, e parentnode
     })                                                                                        evento.target.parentNode seleciona o elemento pai de aonde o target foi clicado
 })

 function manipulaDados(operacao, controle) {                                  operacao é o que recebe do evento.target.textContent do forEach, caso seja -, vai subtrair...
     const peca = controle.querySelector("[data-contador]")                   data-contador seleciona o input que possui o data-attribute definido
   
     if(operacao === "-") {                                          - é o conteudo selecionado pelo evento.target.textContent, caso seja menos, ele diminui o valor de braco
         peca.value = parseInt(peca.value) - 1
     } else {
         peca.value = parseInt(peca.value) + 1
     }
 }


lista.style.visibility = "visible/hidden" */