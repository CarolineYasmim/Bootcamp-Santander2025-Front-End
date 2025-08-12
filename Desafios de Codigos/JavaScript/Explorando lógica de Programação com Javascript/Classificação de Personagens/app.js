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
   const ehInteiro = Number.isInteger(num);
   const estaNoIntervalo = num >= 0 && num <= 100;
   return ehInteiro && estaNoIntervalo;
}



function Main() {
    console.log("=== CLASSIFICADOR DE PERSONAGENS ===");
    console.log("Digite os atributos do seu personagem:");

    // pedir ao usuario para digitar a força e inteligencia do personagem
    // verificar se é inteiro e esta entre 0 e 100 de acordo com a função
    // se não for, mostrar mensagem de erro
    // se for, classificar o personagem
    // mostrar o resultado
        
}



Main();