

// ESERCIZIO

// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri. 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.



// 1- Scegliere pari bottone pari

var pari = document.getElementById('pari');

pari.addEventListener('click', function(){

// inserire numero da 1 a 5 
    var num = +document.getElementById('numero').value;
    console.log(num);

// generare un numero da 1 a 5 
    var computer = getRandomInt(1,6);
    console.log(computer);

// Somma dei due numeri
    var tot  = num + computer;
    console.log(tot);

    if(tot % 2 !== 0){

        document.getElementById('risultato').innerHTML = 'hai perso';

    } else {
         document.getElementById('risultato').innerHTML = 'hai vinto';

    }

});


// 2 - Scegliere pari bottone dispari

var pari = document.getElementById('dispari');

pari.addEventListener('click', function(){

// inserire numero da 1 a 5 
    var num = +document.getElementById('numero').value;
    console.log(num);

// generare un numero da 1 a 5 
    var computer = getRandomInt(1,6);
    console.log(computer);

// Somma dei due numeri
    var tot  = num + computer;
    console.log(tot);

    if(tot % 2 != 0){
        document.getElementById('risultato').innerHTML = 'hai vinto';


    } else {
        document.getElementById('risultato').innerHTML = 'hai perso';

    }

});





// FUNZIONI


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }













