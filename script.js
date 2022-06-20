let numJogadas = 0;

let nomes = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];

let game1 = ["bobross", "bobross", "explody", "explody"];

let game2 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta"];

let game3 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal"];

let game4 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit"];

let game5 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", 
              "triplets", "triplets"];

let game6 = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", 
              "triplets", "triplets", "unicorn", "unicorn"];

    function comparador() { 
	   return Math.random() - 0.5; 
    }

    function distribuirCartas () {
        
        let elemento = document.querySelector(".cards");

        let quantidade = prompt("Com quantas cartas deseja jogar: 4, 6, 8, 10, 12 ou 14?");

        while (Number(quantidade) < 4 || Number(quantidade) > 14 || Number(quantidade) === 5 ||
              ((Number(quantidade)%2) === 1) || isNaN(quantidade)) {
                 quantidade = prompt("Por favor, digite um par de 4 a 14(4, 6, 8, 10, 12 ou 14)!");
        }   

        if(Number(quantidade) === 4) {
            elemento.innerHTML = "";

            game1.sort(comparador);

            for(let i = 0; i < 4; i++) {

               elemento.innerHTML += `
               <div class="card" onclick="selecionarCarta(this)">
               <div class="back">
                 <img src="./imgsprojeto4/front.png" alt="">
               </div>
               <div class="front escondido">
                 <img src="./imgsprojeto4/${game1[i]}parrot.gif" alt="">
               </div>  
               </div>
           `;

          }
        } else if(Number(quantidade) === 6) {
            elemento.innerHTML = "";

            game2.sort(comparador);

            for(let i = 0; i < 6; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="front escondido">
                  <img src="./imgsprojeto4/${game2[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(Number(quantidade) === 8) {
            elemento.innerHTML = "";

            game3.sort(comparador);

            for(let i = 0; i < 8; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="front escondido">
                  <img src="./imgsprojeto4/${game3[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(Number(quantidade) === 10) {
            elemento.innerHTML = "";

            game4.sort(comparador);

            for(let i = 0; i < 10; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="front escondido">
                  <img src="./imgsprojeto4/${game4[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(Number(quantidade) === 12) {
            elemento.innerHTML = "";

            game5.sort(comparador);

            for(let i = 0; i < 12; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="front escondido">
                  <img src="./imgsprojeto4/${game5[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        } else if(Number(quantidade) === 14) {
            elemento.innerHTML = "";

            game6.sort(comparador);

            for(let i = 0; i < 14; i++) {
                elemento.innerHTML += `
                <div class="card" onclick="selecionarCarta(this)">
                <div class="back">
                  <img src="./imgsprojeto4/front.png" alt="">
                </div>
                <div class="front escondido">
                  <img src="./imgsprojeto4/${game6[i]}parrot.gif" alt="">
                </div>  
                </div>
            `;
            }
        }
    }
    distribuirCartas();

    function selecionarCarta(elemento) {


        if(elemento.querySelector(".front").classList.contains("escondido")) {
            numJogadas ++;
         }

        elemento.querySelector(".back").classList.add("escondido");
        elemento.querySelector(".front").classList.remove("escondido");

        function desviraCarta() {
            elemento.querySelector(".back").classList.remove("escondido");
            elemento.querySelector(".front").classList.add("escondido");
        }

        if((numJogadas % 2 !== 0)) {
            elemento.classList.add("clicked1");   
        }

        if((numJogadas % 2 === 0)) {
            elemento.classList.add("clicked2");
         
            if(document.querySelector(".clicked1 .front").innerHTML === document.querySelector(".clicked2 .front").innerHTML) {
                document.querySelector(".clicked1").classList.remove("clicked1");
                document.querySelector(".clicked2").classList.remove("clicked2");
            }
        }

    }
    
