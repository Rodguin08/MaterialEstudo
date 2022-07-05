# alura-armazenando-na-web


V1 AULA 1 {

    const form = document.getElementById("novoItem")            //selecionei o formulario
    const lista = document.getElementById("lista")              //selecionei a lista de itens

    form.addEventListener("submit", (evento) => {               //vejo se o form form foi enviado(submit) e executo o seguinte:
        evento.preventDefault()
        console.log(evento)

        const nome = evento.target.elements['nome'].value        //crio variaveis só pra facilitar
        const quantidade = evento.target.elements['quantidade'].value

        criaElemento(nome, quantidade)                          //chamo criaElemento se o eventListener for executado
    })

    function criaElemento(nome, quantidade) {
        const novoItem = document.createElement("li")           //crio um li
        novoItem.classList.add("item")                          //adiciona classe em Item

        const numeroItem = document.createElement("strong")     //crio strong no numero
        numeroItem.innerHTML = quantidade                       //define o valor de numeroItem com a quantidade recebida

        novoItem.appendChild(numeroItem)                        //coloca numeroItem dentro de novoItem
        novoItem.innerHTML += nome                              //define o valor de novoItem com o nome recebido

        lista.appendChild(novoItem)                             //coloca novoItem dentro da lista
        }

}




























const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
const itens = JSON.parse(localStorage.getItem("itens")) || []

itens.forEach( (elemento) => {
    criaElemento(elemento)
} )

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const existe = itens.find( elemento => elemento.nome === nome.value )

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        itemAtual.id = existe.id
        
        atualizaElemento(itemAtual)

        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual
    } else {
        itemAtual.id = itens[itens.length -1] ? (itens[itens.length-1]).id + 1 : 0;

        criaElemento(itemAtual)

        itens.push(itemAtual)
    }

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    const novoItem = document.createElement("li")
    novoItem.classList.add("item")

    const numeroItem = document.createElement("strong")
    numeroItem.innerHTML = item.quantidade
    numeroItem.dataset.id = item.id
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome

    novoItem.appendChild(botaoDeleta(item.id))

    lista.appendChild(novoItem)
}

function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(id) {
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    elementoBotao.addEventListener("click", function() {
        deletaElemento(this.parentNode, id)
    })

    return elementoBotao
}

function deletaElemento(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1)

    localStorage.setItem("itens", JSON.stringify(itens))
}



















const form = document.getElementById("novoItem")            //seleciona o formulario
const lista = document.getElementById("lista")              //seleciona a lista
const itens = localStorage.getItem("itens") ||  []          //acessa o conteudo ja definido no localstorage ou cria uma string nova vazia

itens.forEach ( (elemento) => {
    criarElemento(elemento)
})

form.addEventListener("submit", (evento) => {               //pega o form, escuta o submit(enviar) executa evento
    evento.preventDefault()                                 //impede que o form envie as informações para a pagina como padrão

    const nome = evento.target.elements['nome']             //acessa nome, do form
    const quantidade = evento.target.elements['quantidade'] //acessa quantidade, do form

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)                                 //execura criaElemento pegando o nome e quantidade colocado nos inputs do form

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""                                         //depois que tudo é feito, define o valor do input como vazio
    quantidade.value = ""
})


function criaElemento(nome, quantidade) {                   //função que cria os elementos da lista
    const novoItem = document.createElement("li")           //cria a variavel que cria um li
    novoItem.classList.add("item")                          //define a classe item em novoItem

    const numeroItem = document.createElement("strong")     //cria uma tag strong com o valor "quantidade" dentro
    numeroItem.innerHTML = quantidade                       //o conteudo de dentro de numeroItem é quantidade
    novoItem.appendChild(numeroItem)                        //acrescenta numeroItem em novoItem = <li><strong>quantidade</strong></li>         

    novoItem.innerHTML += nome                              //adiciona nome em novoItem = <li><strong>quantidade</strong>nome</li> 

    lista.appendChild(novoItem)                             //acrescenta novoItem a lista, no caso
}