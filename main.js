let articoli = document.querySelector("#articoli");
let utenti = document.querySelector("#utenti");
let offerte = document.querySelector("#offerte");
let counter = 0;
let counter1 = 0;
let counter2 = 0;
setInterval(()=>{
    if (counter <= 50) {
        offerte.innerHTML = counter;
    }
    else{
        clearInterval()
    }
    counter++;
}, 20);
setInterval(() => {
    if (counter1 <= 200) {
      utenti.innerHTML = counter1;  
    }
    else{
        clearInterval()
    }
    counter1 = counter1 + 4;
}, 20);
setInterval(() => {
    if (counter2 <= 1000) {
      articoli.innerHTML = counter2;  
    }
    else{
        clearInterval()
    }
    counter2 = counter2 + 20;
}, 20);

let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if (window.scrollY >100) {  
        nav.classList.add("navbar");
    }
    else{
        nav.classList.remove("navbar");
    }
})