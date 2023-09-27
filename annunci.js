fetch("./annunci.json").then((response)=> response.json()).then((data)=>{
   let card_row = document.querySelector(".row-card")
    let bottoni = document.querySelectorAll(".form-check");
   let input = document.querySelectorAll(".form-check-input")
   let ricerca = document.querySelector("#ricerca");
   let range = document.querySelector("#range");
   let trigger = [...bottoni,ricerca,range];
   let filtro = [];
   let counter = 0;
   trigger.forEach((el, i)=>{
       trigger[i].addEventListener("input",()=>{
        crea_card()
    });
    function crea_card() {
        bottoni.forEach((bottone, i) => {
            if (input[i].checked) { 
             filtro = data.filter((a)=> a.categoria == bottone.outerText);
         }
     })
     if (filtro == "") {
        filtro = data
     }
     let filtro2 = [];
         filtro2 = [];
         filtro.forEach((el)=> {
             bottoni.forEach(el => {
                el.addEventListener("input",()=>{
                    counter = 0;
                })   
            });
            if (el.nome.includes(ricerca.value)) {
                filtro2.push(el);
            }
         });
         let prezzo = [];
         filtro2.forEach(el => {
             prezzo.push(el.prezzo);
         });
         console.log(range.value);
         range.min = Math.min(...prezzo);
         max = Math.max(...prezzo);
         range.max = max;
         if (counter == 0) {
             range.value = max;
             counter++;
         }
     let filtro3 = [];
         filtro3 = [];
         filtro2.forEach((el) => {
            console.log(range.value);
             if (el.prezzo <= range.value) {
                 filtro3.push(el)
             }
         });
         console.log(range.value);
         card_row.innerHTML = "";
         filtro3.forEach((articolo, i)=> {   
                 let tag = document.createElement("div");
                 tag.classList.add("p-0", "card", "text-center");
                 let popup ="";
                 if (articolo.popup !="") {
                     if (articolo.popup.length > 1) {
                         popup = `<div class="${articolo.popup[0]}">${articolo.popup[1]}</div>`
                     }else{
                         popup = `<div class="${articolo.popup[0]}">${articolo.popup[0]}</div>`
                     }
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
         });
    }
    crea_card();
   })
})
let bottone_filtro = document.querySelector(".filtri");
let pannello = document.querySelector(".pannello");
bottone_filtro.addEventListener("click",()=>{
    pannello.classList.toggle("d-none")
})
