const paciente = document.querySelectorAll(".paciente")
const peso = document.querySelectorAll(".info-peso")
const altura = document.querySelectorAll(".info-altura")
const tdImc = document.querySelectorAll(".info-imc")

for (let i = 0; i < paciente.length; i++) {
  
}






















let pesoEhValido = true
let alturaEhValido = true
if(peso > 350 || peso < 0) {
    pesoEhValido = false
}
if(altura > 3 || altura < 0.3) {
    alturaEhValido = false
}
if(pesoEhValido === false || alturaEhValido === false) {
    tdImc.innerHTML = "Valores Inválidos"
}

// console.log(alturaEhValido)
// console.log(pesoEhValido)




