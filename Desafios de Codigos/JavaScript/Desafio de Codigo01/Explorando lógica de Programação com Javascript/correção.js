// Lê os valores de entrada e separa corretamente
let valores = gets().split(" ");
let forca = parseInt(valores[0]);
let inteligencia = parseInt(valores[1]);

let classificacao = " ";

// Crie condições if/else para validação da classificação do personagem
if (forca < 20 && inteligencia < 15) {
    classificacao = "Aprendiz";
} else if (forca >= 20 && inteligencia < 15) {
    classificacao = "Guerreiro";
} else if (inteligencia >= 15 && forca < 20) {
    classificacao = "Mago";
} else if (inteligencia >= 15 && forca >= 20) {
    classificacao = "Arquimago";
}

// Exibe o resultado
print(classificacao.trim());