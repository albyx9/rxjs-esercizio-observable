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


