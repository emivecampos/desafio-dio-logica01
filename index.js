let heroi = "Welton";
let xpHeroi = 4700;
let nivel = "";

switch (true) {
    case (xpHeroi <= 1000):
        nivel = "iniciante";
        break;
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
        nivel = "bronze";
        break;
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
        nivel = "prata";
        break;
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
        nivel = "ouro";
        break;
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
        nivel = "platina";
        break;
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
        nivel = "ascendente";
        break;
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
        nivel = "imortal";
        break;
    case (xpHeroi >= 10001):
        nivel = "radiante";
        break;
}

console.log("O heroi " + heroi + " é " + nivel + " com " + xpHeroi + " pontos de experiência! ");
