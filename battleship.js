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
stampaCampo(campo);