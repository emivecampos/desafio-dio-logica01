let heroi = "Welton";
let xpHeroi = 4700; 


switch (xpHeroi) {
    case (xpHeroi <= 1000):
    console.log("O heroi" + heroi + "é iniciante");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
    console.log("O heroi" + heroi + "é bronze");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
    console.log("O heroi" + heroi + "é prata");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
    console.log("O heroi" + heroi + "é ouro");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
    console.log("O heroi" + heroi + "é platina");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
    console.log("O heroi" + heroi + "é ascendente");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
    console.log("O heroi" + heroi + "é imortal");
    break;
}

switch (xpHeroi) {
    case (xpHeroi >= 10001):
    console.log("O heroi" + heroi + "é radiante");
    break;
}

console.log("O heroi"  +  heroi +  "tem"  + xpHeroi  +  "de xp");