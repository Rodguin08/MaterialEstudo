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