const controle = document.querySelectorAll("[data-controle]")      //variavel que seleciona o botao com o data-attribute definido como controle, e retorna o valor definido em sua string:(data-controle="-")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {                                   //forEach é um loop for, para arrays, no caso, controle, que seleciona todos os botões
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)                    //evento.target.dataset.controle seleciona o atributo rastreado pelo target com o data-attribute definido com controle, e parentnode
        atualizaEstatisticas(evento.target.dataset.peca)
    })                                                                                        //evento.target.parentNode seleciona o elemento pai de aonde o target foi clicado
})

function manipulaDados(operacao, controle) {                                  //operacao é o que recebe do evento.target.textContent do forEach, caso seja -, vai subtrair...
    const peca = controle.querySelector("[data-contador]")                   //data-contador seleciona o input que possui o data-attribute definido
   
    if(operacao === "-") {                                          //- é o conteudo selecionado pelo evento.target.textContent, caso seja menos, ele diminui o valor de braco
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
     estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica]
     })
}