fetch("./annunci.json").then((response)=> response.json()).then((data)=>{
    let row = document.querySelector(".row-card");
    let data1 = data;
    function card() {
    data1.forEach((articolo, i)=> {
        let div = document.createElement("div");
        div.classList.add("p-0", "card", "text-center");
        let popup ="";
        if (articolo.popup !="") {
            if (articolo.popup.length > 1) {
                popup = `<div class="${articolo.popup[0]}">${articolo.popup[1]}</div>`
            }else{
                popup = `<div class="${articolo.popup[0]}">${articolo.popup[0]}</div>`
            }
            }
        div.innerHTML = `${popup}
        <img class="img_card" src="https://picsum.photos/20${[i]}" class="card-img-top" alt="...">
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
        row.appendChild(div);
    });
}
card();
    let ceck = document.querySelectorAll(".form-check-input");
    let nome = document.querySelectorAll(".form-check-label");
    let filtro = 0;
    ceck.forEach((categoria, i) => {
        categoria.addEventListener("input",()=>{
            if (nome[i].outerText != "tutti") {
                row.innerHTML = "";
                filtro = data.filter((a)=> a.categoria == nome[i].outerText);
                data1 = filtro; 
                card();
            }else{
                row.innerHTML = "";
                data1 = data;
                card()
            }
        });
    });
    let conca = data;
    let ricerca = document.querySelector("#ricerca");
    ricerca.addEventListener("input",()=>{
        let risultato_ricerca = [];
        if (filtro != 0) {
            conca = filtro;
        }
        conca.forEach(element => {
            if (element.nome.includes(ricerca.value)) {
                risultato_ricerca.push(element);
                row.innerHTML = "";
                console.log(risultato_ricerca);
                data1 = risultato_ricerca;
                card();
            }
        });
    })
})
