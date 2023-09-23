let articoli = document.querySelector("#articoli");
let utenti = document.querySelector("#utenti");
let offerte = document.querySelector("#offerte");
let counter = 0;
let counter1 = 0;
let counter2 = 0;
function conta() {
    if (counter == 0) {
        let intervallo1 = setInterval(()=>{
            if (counter <= 50) {
                offerte.innerHTML = counter;
            }
            else{
                clearInterval(intervallo1)
            }
            counter++;
        }, 20);
        let intervallo2 = setInterval(() => {
            if (counter1 <= 200) {
              utenti.innerHTML = counter1;  
            }
            else{
                clearInterval(intervallo2)
            }
            counter1 = counter1 + 4;
        }, 20);
        let intervallo3 = setInterval(() => {
            if (counter2 <= 1000) {
              articoli.innerHTML = counter2;  
            }
            else{
                clearInterval(intervallo3)
            }
            counter2 = counter2 + 20;
        }, 20);
    }  
}
let trigger = new IntersectionObserver((articoli)=>{
articoli.forEach((element)=> {
    if (element.isIntersecting) {
        conta();
    }
});
}, {threshold: 0.7});
trigger.observe(articoli);
// articoli
let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if (window.scrollY >600) {  
        nav.classList.add("navbar");
    }
    else{
        nav.classList.remove("navbar");
    }
});
// navbar
let card_row = document.querySelector(".card_row");
let card_container = document.querySelector(".card_container")
array = [
    {nome:"lastra in marmo cinese", prezzo:3000, vendita:"asta",popup:"new", descrizzione:"un preggiato prezzo di antiquariato risalente al tredicesimo secolo"},
    {nome:"chimono", prezzo:1200, vendita:"pezzo fisso",popup:"sconti", descrizzione:"un preggiato pezzo di antiquariato risalente al tredicesimo secolo un preggiato pezzo"},
    {nome:"bachette di mao zedong", prezzo:80000, vendita:"asta",popup:"", descrizzione:""},
    {nome:"pezzo di bomba atomica", prezzo:300000, vendita:"asta",popup:"", descrizzione:"un preggiato prezzo di antiquariato risalente al tredicesimo secolo"},
];
array.forEach((articolo, i)=> {

    if (i < 3) {    
        let tag = document.createElement("div");
        tag.classList.add("p-0", "card", "text-center");
        let popup ="";
        if (articolo.popup !="") {
            popup = `<div class="new">${articolo.popup}</div>`
        }
        tag.innerHTML = `${popup}
        <img class="img_card" src="https://www.nationalgeographic.it/upload/ngi-hero/cover-1682446481256-tigrotto.jpeg" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${articolo.nome}</h5>
        <p class="card-text">${articolo.descrizzione}</p>
        <div class="d-flex justify-content-evenly">
        <div class="d-flex">
        <div class="text-center">
        <p>tipo di vendita:</p>
          <p>${articolo.vendita}</p>
          </div>
          <div class="text-center ms-5">
          <p>prezzo:</p>
          <p>${articolo.prezzo}$</p>
          </div>
          </div>
          </div>
          <button href="#" class="btn_card">vai al articolo</button>
        </div>`
        card_row.appendChild(tag);
    }
});
let panino = document.querySelector(".panino");
let menu = document.querySelector(".menu");
panino.addEventListener("click",()=>{
    menu.classList.toggle("d-none")
});
let trigger1 = document.querySelector(".trigger")
let trigger2 = document.querySelector(".trigger1")
let anime1 = document.querySelector(".anime1");
let anime2 = document.querySelector(".anime2");
let animation = new IntersectionObserver((row)=>{
    row.forEach((p)=> {
        if (p.isIntersecting) {
            anime1.classList.add("destra");
        }
    });
});
animation.observe(trigger1);

let animation1 = new IntersectionObserver((row)=>{
    row.forEach((p)=> {
        if (p.isIntersecting) {
            anime2.classList.add("sinistra");
        }
    });
});
animation1.observe(trigger2);
