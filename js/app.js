"use strict";
// Creazione evento su click bottone Genera
const generate = document.getElementById("generate-btn");

generate.addEventListener('click', function() {

// Document.Get per prendere i dati inseriti negli input richiesti
   let firstName = document.getElementById("first-name").value;
   let lastName = document.getElementById("last-name").value;
   let runKm = Number(document.getElementById("km").value);
   let passengerAge = document.getElementById("age").value;

// Prezzo del biglietto definito in base ai km (0.21 € al km).
   const pricePerKm = 0.21;
   let runPrice = runKm * pricePerKm;

   let ticketPricing = "Biglietto standard";

// Calcolo sconti per fasce d'età
   if ( passengerAge === "underage" ) {
      // Applicato uno sconto del 20% per i minorenni.
      ticketPricing = "Biglietto Minorenni";
      runPrice = runPrice * 0.8;
   } else if ( passengerAge === "over_age" ) {
      // Applicato uno sconto del 40% per gli over 65.
      ticketPricing = "Biglietto Over-65";
      runPrice = runPrice * 0.6;
   }
// L'output prezzo finale arrotondato a 2 cifre decimali
   runPrice = parseFloat(runPrice).toFixed(2);

// Inserimento valori in html
   // Cognome + Nome
   document.querySelector("th.ticket-data").innerHTML = `${lastName} ${firstName}`;
   // Tariffa applicata
   document.querySelector("td.ticket-data:nth-of-type(1)").innerHTML = `${ticketPricing}`;
   // Numero carrozza casuale 1-10
   let coachNum = Math.floor(Math.random() * 10 +1);
   document.querySelector("td.ticket-data:nth-of-type(2)").innerHTML = `${coachNum}`;
   // Codice CP 90000-99999
   let cpNum = Math.floor(Math.random() * 9999 + 90000);
   document.querySelector("td.ticket-data:nth-of-type(3)").innerHTML = `${cpNum}`;
   // Prezzo
   document.querySelector("td.ticket-data:nth-of-type(3)").innerHTML = `${runPrice}`;

// Show Ticket su Click
   
})