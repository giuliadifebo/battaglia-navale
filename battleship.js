const prompt = require("prompt-sync")();
const DIM = 5;
let campo = [];
for (let i = 0; i < DIM; i++){
    let riga = [];
    for(let j = 0; j < DIM; j++){
        riga.push("~");
    }
    campo.push(riga);
}
function stampaCampo(griglia){
    for(const riga of griglia){
        console.log(riga.join(" "));
    }
}
let navi = [];
let colpi = 0;
let colpite = 0;
for(let i = 0; i <DIM; i++){
    let riga = [];
    for(let j = 0; j<DIM; j++){
        riga.push("~");
    }
    navi.push(riga);
}
const rigaNave = Math.floor(Math.random() * DIM);
const colonnaNave = Math.floor(Math.random() * 3);
for (let colonna = 0; colonna <= 2; colonna++) {
    navi[rigaNave][colonnaNave + colonna] = "N";
}
while(colpite < 3){
    let riga = Number(prompt("Riga (0-4): "));
    let colonna = Number(prompt("Colonna (0-4): "));
    if(Number.isInteger(riga) === false || Number.isInteger(colonna) === false || riga < 0 || colonna <0 || riga >= DIM || colonna >= DIM){
        console.log("Coordinate fuori dalla griglia, riprova");
        continue;
    }
    if(campo[riga][colonna] !== "~"){
        console.log("Hai già sparato qui, riprova");
        continue;
    }
    if(navi[riga][colonna] === "N"){
        console.log("Colpito!");
        campo[riga][colonna] = "X";
        colpite++;
    }
    else{
        console.log("Mancato!");
        campo[riga][colonna] = "O";
    }
    colpi++;
    stampaCampo(campo)
}
console.log("Nave affondata in " + colpi + " colpi!");