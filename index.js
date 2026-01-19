// Classificador de nível de Herói

let nomeHeroi = "Leandro";
let xpHeroi = 0;
let nivel = "";

// Simulando ganho de experiência com um laço de repetição
for (let i = 0; i < 5; i++) {
    xpHeroi = xpHeroi + 1800; // a cada batalha o herói ganha 1800 de XP
}

// Estrutura de decisão
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída final
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
