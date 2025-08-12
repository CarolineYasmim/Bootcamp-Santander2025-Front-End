function classificarPersonagem(forca, inteligencia) {
    if (forca < 20 && inteligencia < 15) {
        return "Aprendiz";
    } else if (forca >=20 && inteligencia < 15) {
        return "Guerreiro";
    } else if (inteligencia >= 15 && forca <20) {
        return "Mago";
    } else if (inteligencia >= 15 && forca >=20) {
        return "Arquimago";
    }
}

function verificarNumeroEntre0e100(num) {
    return Number.isInteger(num) && num >= 0 && num <= 100;
}

function solicitarAtributo(nomeAtributo) {
    let valor;
    do {
        let entrada = prompt(`informe a ${nomeAtributo} do seu personagem (0 a 100):`);
        let numero = Number(entrada);

        if(verificarNumeroEntre0e100(numero)) {
            valor = numero;
            break;
        } else{
            alert("Valor inválido! Digite um número inteiro entre 0 e 100.");
        }
    } while (true);

    return valor;
} 


function Main() {
    console.log("=== CLASSIFICADOR DE PERSONAGENS ===");
    console.log("Digite os atributos do seu personagem:");

    let personagem = {};
    personagem.forca =solicitarAtributo("Força");
    personagem.inteligencia = solicitarAtributo("Inteligência");

    let classificacao = classificarPersonagem(forca, inteligencia);
    alert(`Personagem criado!nForca: ${forca}\nInteligência: ${inteligencia}\nClassificação: ${classificacao}`);
}
Main();