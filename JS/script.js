// INFORMAZIONI COSTANTI
const prezzoKm = 0.21,
      scontUnder18 = 0.2,
      scontOver65 = 0.4;



let discount = "Standard"


// 1. seleziono il bottone - aggiungemdo l'evento del click a cui do una funzione: 
document.querySelector("button").addEventListener("click", function(){
  // 2. creo const km che mi legge il valore (aggiungerndo ".value" alla fine) inserito nel input
  const km = document.getElementById("km").value;
  // 3. creo un const age che mi legge quanti anni ha l'utente
  const age = document.getElementById("age").value

  //PREZZO COMPLETO
  let prezzocompleto = km * prezzoKm;

  //CALCOLO EVENTUALE SCONTO IN BASE ALL'ETÀ esercizio 2
  const Minorenne = "< 18";
  const Over65 = ">= 65";

  if (age === Minorenne) {
    prezzocompleto -= (prezzocompleto * scontUnder18);
    discount = "Young"
  }else if (age === Over65){
    prezzocompleto -= (prezzocompleto * scontOver65);
    discount = "Senior"
  }

  // STAMPA 

  // questo rende visibile il biglietto perchè toglie la classe 
  const biglietto = document.querySelector(".print");
  biglietto.classList.remove('hide');  
  
  // questo prende il valore inserito nel nome  
  const name = document.getElementById("name").value;
  // con questo prendo il tag dove voglio inserire il nome 
  const passeggero = document.getElementById("passeggero");
  // cosi inserisco il nome preso nel tag 
  passeggero.innerHTML = `${name}`;

  // questo inserisce il tipo di sconto 
  document.getElementById("discount").innerHTML = `${discount}`;

  // CARRIAGE 
  let carmin = 1
  let carmax = 10
  let carrozza = Math.floor(Math.random() * (carmax - carmin + 1) + carmin);
  document.getElementById("carriage").innerHTML = `${carrozza}`;

// CODECP 
  let CPmin = 10000
  let CPmax = 99999
  let codice = Math.floor(Math.random() * (CPmax - CPmin + 1) + CPmin);
  document.getElementById("codeCP").innerHTML = `${codice}`


  // qui gestisco la stampa del prezzo 
  const price = document.getElementById('price');
  price.innerHTML = `
  &euro; ${prezzocompleto.toFixed(2)}
  `;

})


