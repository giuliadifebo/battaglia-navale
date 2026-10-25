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
for (let colonna = 1; colonna <= 3; colonna++) {
    navi[2][colonna] = "N";
}
while(colpite < 3){
    let riga = Number(prompt("Riga (0-4): "));
    let colonna = Number(prompt("Colonna (0-4): "));
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