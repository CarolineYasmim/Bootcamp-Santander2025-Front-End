// ========================================
// CLASSIFICADOR DE PERSONAGENS - DESAFIO DIO
// ========================================

// Função para classificar personagem baseado no desafio
function classificarPersonagem(forca, inteligencia) {
    if (forca < 20 && inteligencia < 15) {
        return "Aprendiz";
    } else if (forca >= 20 && inteligencia < 15) {
        return "Guerreiro";
    } else if (inteligencia >= 15 && forca < 20) {
        return "Mago";
    } else if (inteligencia >= 15 && forca >= 20) {
        return "Arquimago";
    }
}

// ========================================
// PROGRAMA PRINCIPAL - ENTRADA DO USUÁRIO
// ========================================

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== CLASSIFICADOR DE PERSONAGENS ===");
console.log("Digite os atributos do seu personagem:");

rl.question('Força (0-100): ', (forcaInput) => {
    const forcaUsuario = parseInt(forcaInput);
    
    // Validação da força
    if (isNaN(forcaUsuario) || forcaUsuario < 0 || forcaUsuario > 100) {
        console.log("Erro: Força deve ser um número inteiro entre 0 e 100!");
        rl.close();
        return;
    }
    
    rl.question('Inteligência (0-100): ', (inteligenciaInput) => {
        const inteligenciaUsuario = parseInt(inteligenciaInput);
        
        // Validação da inteligência
        if (isNaN(inteligenciaUsuario) || inteligenciaUsuario < 0 || inteligenciaUsuario > 100) {
            console.log("Erro: Inteligência deve ser um número inteiro entre 0 e 100!");
            rl.close();
            return;
        }
        
        // Criar personagem como objeto com os valores do usuário
        const meuPersonagem = {
            nome: "Meu Herói",
            forca: forcaUsuario,
            inteligencia: inteligenciaUsuario
        };
        
        // Classificar e exibir resultado
        const classificacao = classificarPersonagem(meuPersonagem.forca, meuPersonagem.inteligencia);
        
        console.log("\n=== RESULTADO ===");
        console.log(`Nome: ${meuPersonagem.nome}`);
        console.log(`Força: ${meuPersonagem.forca}`);
        console.log(`Inteligência: ${meuPersonagem.inteligencia}`);
        console.log(`Classificação: ${classificacao}`);
        
        // Demonstrar acesso às propriedades do objeto
        console.log("\n=== ACESSANDO PROPRIEDADES DO OBJETO ===");
        console.log(`Acessando força: ${meuPersonagem.forca}`);
        console.log(`Acessando inteligência: ${meuPersonagem.inteligencia}`);
        
        rl.close();
    });
});

// ========================================
// EXEMPLOS ADICIONAIS COM OBJETOS
// ========================================

// Exemplo: usando variáveis separadas para criar objetos
let forca1 = 10;
let inteligencia1 = 12;

let forca2 = 25;
let inteligencia2 = 8;

let forca3 = 15;
let inteligencia3 = 20;

const personagensExemplo = [
    {
        nome: "Personagem 1",
        forca: forca1,
        inteligencia: inteligencia1
    },
    {
        nome: "Personagem 2", 
        forca: forca2,
        inteligencia: inteligencia2
    },
    {
        nome: "Personagem 3",
        forca: forca3,
        inteligencia: inteligencia3
    }
];

console.log("\n=== EXEMPLOS DE PERSONAGENS ===");
personagensExemplo.forEach(personagem => {
    const classificacao = classificarPersonagem(personagem.forca, personagem.inteligencia);
    console.log(`${personagem.nome}: Força=${personagem.forca}, Inteligência=${personagem.inteligencia} → ${classificacao}`);
});