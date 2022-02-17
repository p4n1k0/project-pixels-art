//requisito 7 seleciona cor de paleta para pintar celulas
//elementos html
const preta = document.querySelector('#preta');
const azul = document.querySelector('#azul');
const cinza = document.querySelector('#cinza');
const amarela = document.querySelector('#amarela');

preta.addEventListener('click', black);
azul.addEventListener('click', blue);
cinza.addEventListener('click', gray);
amarela.addEventListener('click', yellow);

function black() {
    preta.classList.add('selected');
    azul.classList.remove('selected');
    cinza.classList.remove('selected');
    amarela.classList.remove('selected');
}

function blue() {
    azul.classList.add('selected');
    preta.classList.remove('selected');
    cinza.classList.remove('selected');
    amarela.classList.remove('selected');
}

function gray() {
    cinza.classList.add('selected');
    preta.classList.remove('selected');
    azul.classList.remove('selected');
    amarela.classList.remove('selected');
}

function yellow() {
    amarela.classList.add('selected');
    preta.classList.remove('selected');
    azul.classList.remove('selected');
    cinza.classList.remove('selected');
}
