const pegaPixel = document.querySelectorAll('.pixel');

for (let i = 0; i < pegaPixel.length; i += 1) {
    pegaPixel[i].style.backgroundColor = 'white';
}


//requisito 7 consultei o código do Rodolfo Marques - Turma 15
//https://github.com/tryber/sd-015-b-project-pixels-art/pull/119/commits/82965f04e64245a370921316c4bddd228e31263d
let black = document.getElementById('preta');
let blue = document.getElementById('azul');
let gray = document.getElementById('cinza');
let yellow = document.getElementById('amarela');

black.addEventListener('click', selected);
blue.addEventListener('click', selected);
gray.addEventListener('click', selected);
yellow.addEventListener('click', selected);

function selected(event) {
    let seleciona = document.querySelector('.selected');
    seleciona.classList.remove('selected')
    event.target.classList.add('selected');
}