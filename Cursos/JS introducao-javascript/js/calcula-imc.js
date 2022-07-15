const pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {

    const paciente = pacientes[i]

    const tdPeso = paciente.querySelector(".info-peso")
    const peso = tdPeso.textContent
    const tdAltura = paciente.querySelector(".info-altura")
    const altura = tdAltura.textContent
    const tdImc = paciente.querySelector(".info-imc")

    var alturaEhValida = validaAltura(altura)
    var pesoEhValido = validaPeso(peso)

    if (!pesoEhValido) {
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido")
    }
    if (!alturaEhValida) {
        tdImc.textContent = "Altura inválida"
        alturaEhValida = false
        paciente.style.backgroundColor = "red"
    }

    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
    
}

function calculaImc(peso, altura) {
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(1)
}

function validaPeso(peso) {
    if(peso >= 0 && peso < 350){
        return true
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura < 3){
        return true
    }else{
        return false
    }
}