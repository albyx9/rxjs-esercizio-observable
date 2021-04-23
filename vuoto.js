//ESERCIZIO: arresta la temperatura dopo il quarto valore
import { Observable, interval, timer } from "rxjs";

const apiKey = "d11be8fa8826b6777bc94891b01f0767";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var city = document.getElementById("citta").innerHTML;
var separatore = " -------------------------- ";
//è un observable produce una serie di numeri periodicamenti 
const tick = interval(1000000);
//Costruisco l'observable, una classe di oggetti
let conta = 0;
const temp = new Observable(subscriber => tick.subscribe( { 
//publisher produce dati
//i dati vengono consumati con il metodo subscribe

  next(n) { 
    fetch(URL + city)
      .then(response =>  response.json())
        .then(data => 
          subscriber.next(data.main.temp))        
  }
   } ) ); 

// Due subscriber con un solo parametro, quello obblihatorio
//i subscriber accedono ai dati prodotti dal publisher
temp.subscribe({   
  next(x) {console.log(x);}
})
temp.subscribe({   
  next(x) {
    conta+=1;
    document.getElementById("output").innerHTML+=
  x + "<br>";},
  complete() {
    document.getElementById("fine").innerHTML = "Servizio temperatura: TERMINATO";
  }
})


