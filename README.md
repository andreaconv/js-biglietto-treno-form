BIGLIETTO TRENO FORM
===

## CONSEGNA

Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### **MILESTONE 1:**
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o *output*) sarà anch’essa da scrivere in console.

### **MILESTONE 2:**
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

>#### Nota:

Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il **secondo milestone.** Potete scegliere di implementare una soluzione completamente diversa oppure *simile*, ma in ogni caso ***cercate di farla vostra.***

>#### BONUS:

- Aggiungere un bottone “reset”
- Aggiungere random il numero della carrozza e il CP

## STEPS
1. Inseisco le costanti e i dati dall'esercizio precedente;
2. Inserisco i due input (km e età), il bottone per inviare e l'output per visualizzare dentro l'HTML 
3. Prendendo spunto dall'esercizio precedente faccio i calcoli per il costo del biglietto  
4. Stampo il risultato ottenuto dentro l'HTML
5. Qunado tutti gli steps precedenti funzionano creo un form in HTML dove viene chiesto anche il nome per poter personalizzare il biglietto che verrà generato e stampato