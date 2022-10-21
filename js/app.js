"use strict";
// Creazione evento su click bottone Genera
const generate = document.getElementById("generate-btn");

generate.addEventListener('click', function() {

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
   let firstName = document.getElementById("first-name").value;
   let lastName = document.getElementById("last-name").value;

   let runKm = Number(document.getElementById("km").value);

   let passengerAge = document.getElementById("age").value;

   console.log(typeof firstName, firstName)
   console.log(typeof lastName, lastName)
   console.log(typeof runKm, runKm)
   console.log(typeof passengerAge, passengerAge)

// Prezzo del biglietto definito in base ai km (0.21 € al km).
   const pricePerKm = 0.21;
   let runPrice = runKm * pricePerKm;

   console.log(`${runPrice} prezzo corsa iniziale`);

// Calcolo sconti per fasce d'età
   if ( passengerAge === "underage" ) {
      // Applicato uno sconto del 20% per i minorenni.
      runPrice = runPrice * 0.8;
      console.log( `${runPrice} prezzo corsa dopo lo sconto` );
   } else if ( passengerAge === "over_age" ) {
      // Applicato uno sconto del 40% per gli over 65.
      runPrice = runPrice * 0.6;
      console.log( `${runPrice} prezzo corsa dopo lo sconto` );
   }

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
   runPrice = parseFloat(runPrice).toFixed(2);
   console.log( `${runPrice} prezzo corsa finale` );


})