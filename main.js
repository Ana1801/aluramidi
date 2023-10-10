function tocaSompom(){
document.querySelector('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelectorAll('.tecla');

listaDeBotoes[0].onclick = tocaSompom;