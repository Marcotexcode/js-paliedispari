



// Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma



//  1- Inserire parola utente

var parola = prompt('inserisci una parola');



// 2- invertire parola con funzione

var parolaInversa = invertiParola(parola);

function invertiParola(str){
    var parInversa = str.split('').reverse().join('');  
    return parInversa;
}

console.log(parolaInversa);



// 3 - controllare se e palindroma

if (parola === parolaInversa) {
    console.log('E palindroma');
}else {
    console.log('Non e palindroma');
}