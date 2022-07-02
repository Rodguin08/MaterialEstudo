console.log("Trabahando com Listas")
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
)

listaDeDestinos.push(`Curitiba`); //adiciona curitiba na lista

console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1);    //splice remove um elemento da lista/
console.log(listaDeDestinos);