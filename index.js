alert("Bem vindo ao conversor de Anos Luz!")

let anosLuz = prompt("Qual a distância em anos-luz você deseja converter?")
confirm( anosLuz + "Anos Luz\nTem certeza que essa é a distância?")

let unidadeMedida = prompt("Escolha abaixo a unidade para conversão: \n1- Parsec(pc) \n2- Unidade Astronônima(AU) \n3- Quilômetros(km)\n\n(Digite o número da opção desejada.)")

let unidadeEscolhida
let conversUnidade

switch(unidadeMedida) {
    case "1":
        unidadeEscolhida = "Parsec"
        conversUnidade = anosLuz * 0.306601
        break
    case "2":
        unidadeEscolhida = "Unidade Astronônima"
        conversUnidade = anosLuz * 63241.1
        break
    case "3":
        unidadeEscolhida = "Quilometro"
        conversUnidade = anosLuz * 9.5 * Math.pow(10,12)
        break
    default:
        unidadeEscolhida = "Unidade não identificada"
        conversUnidade = "Conversão fora do escopo"
}
alert("Distância em Anos-luz: " + anosLuz + "\n" + unidadeEscolhida + ": " + conversUnidade)
