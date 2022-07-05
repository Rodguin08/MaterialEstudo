const form = document.getElementById("novoItem")            //selecionei o formulario
const lista = document.getElementById("lista")              //selecionei a lista de itens
const itens = JSON.parse(localStorage.getItem("itens")) || []           //cria um objeto para ser colocado no localStorage, ou acessa os itens já existentes no localStorage

itens.forEach( (elemento) => {
    
})

form.addEventListener("submit", (evento) => {               //vejo se o form form foi enviado(submit) e executo o seguinte:
    evento.preventDefault()

    const nome = evento.target.elements['nome']             //crio variaveis só pra facilitar
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)              //chamo criaElemento se o eventListener for executado
    
    nome.value = ""                                         //quando é colocado um novo elemento limpa o espaço do input. Podia ser form.nome.value, mas como ja estamos no eventlistener do form não precisa
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    const novoItem = document.createElement("li")           //crio um li
    novoItem.classList.add("item")                          //adiciona classe em Item

    const numeroItem = document.createElement("strong")     //crio strong no numero
    numeroItem.innerHTML = quantidade                       //define o valor de numeroItem com a quantidade recebida

    novoItem.appendChild(numeroItem)                        //coloca numeroItem dentro de novoItem
    novoItem.innerHTML += nome                              //define o valor de novoItem com o nome recebido

    lista.appendChild(novoItem)                             //coloca novoItem dentro da lista

    const itemAtual = {                                     //define como objeto pra poder colocar no localStorage
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)                                   //coloca itemAtual dentro do objeto itens
        
    localStorage.setItem("itens", JSON.stringify(itens))    //JSON.stringfy transforma itens em string pra aplicar no localStorage
}