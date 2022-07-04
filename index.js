let entradaDataPartida = prompt("Digite a data de partida (DD/MM/YYYY)")

let dataPartida = moment(entradaDataPartida, "DD/MM/YYYY")

let dataAtual = moment()

let diferencaData = hoje - dataPartida

let escolhaOpcao = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2-Minutos\n3-Horas\n4-Dias")

if (escolhaOpcao == "1") {
    let segundosDaPartida = Math.round(diferencaData / 1000)
    alert("Tempo de vôo: " + segundosDaPartida + " segundos")
} else if (escolhaOpcao == "2") {
    let minutosDaPartida = Math.round(diferencaData / 1000 / 60)
    alert("Tempo de vôo: " + minutosDaPartida + " minutos")
} else if (escolhaOpcao == "3") {
    let horasDaPartida = Math.round(diferencaData / 1000 / 3600)
    alert("Tempo de vôo: " + horasDaPartida + " horas")
} else if (escolhaOpcao == "4") {
    let diasDaPartida = Math.round(diferencaData / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + diasDaPartida + " dias")
} else {
    alert("Opção inválida")
}