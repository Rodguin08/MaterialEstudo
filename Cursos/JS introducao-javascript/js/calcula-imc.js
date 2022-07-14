const pacientes = document.querySelectorAll(".paciente")

for (let i = 0; i < pacientes.length; i++) {

    const paciente = pacientes[i]

    const tdPeso = paciente.querySelector(".info-peso")
    const peso = tdPeso.textContent
    const tdAltura = paciente.querySelector(".info-altura")
    const altura = tdAltura.textContent
    const tdImc = paciente.querySelector(".info-imc")

    var alturaEhValida = true;
    var pesoEhValido = true;

    if (peso >= 300 || peso < 1) {
        tdImc.textContent = "Peso inválido!"
        pesoEhValido = false
        paciente.classList.add("paciente-invalido")
    }
    if (altura > 3 || altura < 0.5) {
        tdImc.textContent = "Altura inválida"
        alturaEhValida = false
        paciente.style.backgroundColor = "red"
    }

    if (pesoEhValido && alturaEhValida) {
        const imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(1)
    }
}