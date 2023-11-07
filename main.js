function tocaSompom(idElementoAudio){
document.querySelector(idElementoAudio).play();
}

const listaDeBotoes = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeBotoes.length) {
    listaDeBotoes[contador].onclick = tocaSompom;
    contador = contador + 1;
}
