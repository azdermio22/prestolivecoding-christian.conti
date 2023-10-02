fetch("./annunci.json").then((response)=> response.json()).then((data)=>{
   let card_row = document.querySelector(".row-card")
    let bottoni = document.querySelectorAll(".form-check");
   let input = document.querySelectorAll(".form-check-input")
   let ricerca = document.querySelector("#ricerca");
   let range = document.querySelector("#range");
   let ordina = document.querySelector(".ordina");
   let ordina1 = document.querySelector(".ordina1");
   let trigger = [...bottoni,ricerca,range,ordina];
   let filtro = [];
   let counter = 0;
   let ordine = 0;
   ordina.addEventListener("click",()=>{
    ordine = 1;
    ordina.style.border = "2px solid darkred";
    ordina.style.color = "darkred";
    ordina1.style.border = "2px solid gray";
    ordina1.style.color = "gray";
   })
   ordina1.addEventListener("click",()=>{
    ordine = 2;
    ordina1.style.border = "2px solid darkred";
    ordina1.style.color = "darkred";
    ordina.style.border = "2px solid gray";
    ordina.style.color = "gray";
   })
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
         range.min = Math.min(...prezzo);
         max = Math.max(...prezzo);
         range.max = max;
         if (counter == 0) {
             range.value = max;
             counter++;
         }
         let filtro3 = [];
         filtro2.forEach((el) => {
             if (el.prezzo <= range.value) {
                 filtro3.push(el)
             }
            });
            let filtro4 = [{prezzo:0}];
            if (ordine == 1) {
                filtro3.forEach((el1)=> {
                    for (let i = 0; i < filtro4.length; i++) {
                        if (el1.prezzo > filtro4[i].prezzo) {
                            filtro4.splice(i,0,el1);
                            break
                        }            
                    }
                });

            }else if (ordine == 2) {
                filtro4 = [{prezzo:1000000000000}];
                filtro3.forEach((el1)=> {
                    for (let i = 0; i < filtro4.length; i++) {
                        if (el1.prezzo < filtro4[i].prezzo) {
                            filtro4.splice(i,0,el1);
                            break
                        }            
                    }
                });

            }else{
                filtro4 = filtro3;
            }
            console.log(filtro4);
         card_row.innerHTML = "";
         filtro4.forEach((articolo, i)=> {   
                 let tag = document.createElement("div");
                 tag.classList.add("p-0", "card", "text-center");
                 let popup ="";
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
let counter1 = 0;
let freccie = document.querySelector(".freccie")
let colonna = document.querySelector(".colonna")
let bottone_filtro = document.querySelector(".filtri");
let pannello = document.querySelector(".pannello");
bottone_filtro.addEventListener("click",()=>{
    colonna.classList.toggle("col-9");
    colonna.classList.toggle("col-11");
    bottone_filtro.classList.toggle("ap");
    pannello.classList.toggle("ap1");
    bottone_filtro.classList.toggle("apr");
    pannello.classList.toggle("ap1r");
    if (counter1 == 0) {
        counter1++;
        freccie.innerHTML = "<<<";
    }else{
        counter1--;
        freccie.innerHTML = ">>>";
    }
});
let prezzo_corrente = document.querySelector(".prezzo_corrente");
range.addEventListener("input",()=>{
    prezzo();
})
function prezzo() {
    prezzo_corrente.innerHTML = range.value+"$";
    let percento = Math.floor(range.value/range.max*100);
    percento = 3.1*percento;
    prezzo_corrente.style.marginLeft = percento+"px";
}
prezzo();
window.addEventListener("scroll",()=>{
    let scrol =window.scrollY;
    pannello.style.top = scrol+"px";
    bottone_filtro.style.top = scrol+48+"px";
})
let b_cat = document.querySelector(".b_cat");
let b_cat1 = document.querySelector(".b_cat1");
let freccia = document.querySelector(".freccia")
b_cat.addEventListener("click",()=>{
    b_cat1.classList.toggle("d-none");
    freccia.classList.toggle("ruota");
    freccia.classList.toggle("ruota1");
})
