function tocaSompom(){
document.querySelector('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9) {
    listaDeBotoes[contador].onclick = tocaSompom;
    contador = contador + 1;
}
