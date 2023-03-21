// INFORMAZIONI COSTANTI
const prezzoKm = 0.21,
      scontUnder18 = 0.2,
      scontOver65 = 0.4;

// 1. seleziono il bottone - aggiundo l'evento del click a cui do una funzione: 
// 2. creo const km che mi legge il valore (aggiungerndo ".value" alla fine) inserito nel input
// 3. creo un const age che mi legge quanti anni ha l'utente

document.querySelector("button").addEventListener("click", function(){
  const km = document.getElementById("km").value;
  const age = document.getElementById("age").value

  //PREZZO COMPLETO
  let prezzocompleto = km * 0.21;

  //CALCOLO EVENTUALE SCONTO IN BASE ALL'ETÀ
  if (age < 18) {
    prezzocompleto -= (prezzocompleto * 0.2);

  }else if (age >= 65) {
    prezzocompleto -= (prezzocompleto * 0.4);
  }

  let message;
  message = `
  Il tuo biglietto costa &euro; ${prezzocompleto}
  `
  const output = document.getElementById('output');
  output.innerHTML = message;

})


