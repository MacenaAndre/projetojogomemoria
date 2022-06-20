let quantidade = Number(prompt("Com quantas cartas deseja jogar: 4, 6, 8, 10, 12 ou 14?"));
let numJogadas = 0;

while (quantidade < 4 || quantidade > 14 || quantidade === 5 || quantidade === 7 ||
     quantidade === 9 || quantidade === 11 || quantidade === 13) {
        quantidade = Number(prompt("Com quantas cartas deseja jogar: 4, 6, 8, 10, 12 ou 14?"));
     }   
let nomes = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];

let cards1 = ["bobross", "bobross", "explody", "explody"];

let cards2 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta"];

let cards3 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal"];

let cards4 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit"];

let cards5 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", 
              "triplets", "triplets"];

let cards6 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", 
              "triplets", "triplets", "unicorn", "unicorn"];


    function comparador() { 
	   return Math.random() - 0.5; 
    }

    function distribuirCartas () {
        
        let elemento = document.querySelector(".cards");

        if(quantidade === 4) {
            elemento.innerHTML = "";

            cards1.sort(comparador);

            for(let i = 0; i < 4; i++) {

               elemento.innerHTML += `
               <div class="card" onclick="selecionarCarta(this)">
               <div class="back">
                 <img src="./imgsprojeto4/front.png" alt="">
               </div>
               <div class="face escondido">
                 <img src="./imgsprojeto4/${cards1[i]}parrot.gif" alt="">
               </div>  
               </div>
           `;

          }
        } else if(quantidade === 6) {
            elemento.innerHTML = "";

            cards2.sort(comparador);

            for(let i = 0; i < 6; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="face escondido">
                  <img src="./imgsprojeto4/${cards2[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(quantidade === 8) {
            elemento.innerHTML = "";

            cards3.sort(comparador);

            for(let i = 0; i < 8; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="face escondido">
                  <img src="./imgsprojeto4/${cards3[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(quantidade === 10) {
            elemento.innerHTML = "";

            cards4.sort(comparador);

            for(let i = 0; i < 10; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="face escondido">
                  <img src="./imgsprojeto4/${cards4[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(quantidade === 12) {
            elemento.innerHTML = "";

            cards5.sort(comparador);

            for(let i = 0; i < 12; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="face escondido">
                  <img src="./imgsprojeto4/${cards5[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(quantidade === 14) {
            elemento.innerHTML = "";

            cards6.sort(comparador);

            for(let i = 0; i < 14; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="face escondido">
                  <img src="./imgsprojeto4/${cards6[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        }
    }
    distribuirCartas();

    function selecionarCarta(elemento) {
        elemento.querySelector(".back").classList.add("escondido");
        elemento.querySelector(".face").classList.remove("escondido");
    }
