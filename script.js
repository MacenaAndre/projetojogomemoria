let quantidade = Number(prompt("Com quantas cartas deseja jogar: 4, 6, 8, 10, 12 ou 14?"));

while (quantidade < 4 || quantidade > 14 || quantidade === 5 || quantidade === 7 ||
     quantidade === 9 || quantidade === 11 || quantidade === 13) {
        quantidade = Number(prompt("Com quantas cartas deseja jogar: 4, 6, 8, 10, 12 ou 14?"));
     }   

let lista = [];

    function distribuirCartas () {
        const templatecard = `
        <div class="card">
          <img src="./imgsprojeto4/front.png" alt="">
        </div>
        `
        let elemento = document.querySelector(".cards");

        if(quantidade === 4) {
            elemento.innerHTML = "";

            for(let i = 0; i < 4; i++) {
               lista.push(templatecard);
               elemento.innerHTML += lista[i];
          }
        } else if(quantidade === 6) {
            elemento.innerHTML = "";

            for(let i = 0; i < 6; i++) {
               lista.push(templatecard);
               elemento.innerHTML += lista[i];
            }
        } else if(quantidade === 8) {
            elemento.innerHTML = "";

            for(let i = 0; i < 8; i++) {
               lista.push(templatecard);
               elemento.innerHTML += lista[i];
            }
        } else if(quantidade === 10) {
            elemento.innerHTML = "";

            for(let i = 0; i < 10; i++) {
               lista.push(templatecard);
               elemento.innerHTML += lista[i];
            }
        } else if(quantidade === 12) {
            elemento.innerHTML = "";

            for(let i = 0; i < 12; i++) {
               lista.push(templatecard);
               elemento.innerHTML += lista[i];
            }
        } else if(quantidade === 14) {
            elemento.innerHTML = "";

            for(let i = 0; i < 14; i++) {
               lista.push(templatecard);
               elemento.innerHTML += lista[i];
            }
        }
    }
    distribuirCartas();
