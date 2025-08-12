let herois = []
let viloes = []

while (true) {
    let nome = gets();

    if (nome === "FIM") {
        break;
    }

    let tipo = gets();

    if (tipo === "Heroi") {
        herois.push(nome);
    } else if (tipo === "Vilao") {
        viloes.push(nome);
    } else {
        print("Tipo invalido");
    }
}

// Exibe os resultados finais
if (herois.length === 0 && viloes.length === 0) {
    print("Nenhum personagem registrado");
} else {
    print(`Herois: ${herois.length} - ${herois.join(", ")}`);
    print(`Viloes: ${viloes.length} - ${viloes.join(", ")}`);
}