import { Observable, interval, timer } from "rxjs";

const apiKey = "d11be8fa8826b6777bc94891b01f0767";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
  const tick = interval(1000);  //Observable produce un intervallo
//il metodo utilizzato restituisce un Array oggetto da un oggetto con proprietà iterable
var cityElems = Array.from(document.getElementsByClassName("citta"));

const temp = new Observable(subscriber => tick.subscribe({
    next(n){
      for (city)
    }
}));

temp.subscribe({
  next(x){console.log(x);}
})
temp.subscribe({
  next(x){
    document.getElementById("output").innerHTML += x + " (Media Temperatura)" + "<br>";
  }
})
/*
function doCity(city, callback) {
  let promise = fetch(URL + city)
    .then(response => response.json(), error => alert(error))
    .then(data => callback(data));
  return promise;
}
async function display(city) {
  let t = await doCity(city, data => data.main.temp);
  document.getElementById("risposta").innerHTML =
    "A " + city + " ci sono " + t + " gradi";
}

//async costruisce una funzione che restituisce una promise
async function media() {
  let temps = await Promise.all(
    cityElems.map(cityElem => doCity(cityElem.innerHTML, data => data.main.temp))
  );
  let somma = temps.reduce((somma, temp) => temp + somma);
  document.getElementById("output").innerText = somma / cityElems.length;
}

/*for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}

document.getElementById("calcoloMedia").onclick = () => media();
*/