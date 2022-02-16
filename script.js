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

//requisito 8. consultei o código do James Mayke - Turma 15
//https://github.com/tryber/sd-015-b-project-pixels-art/pull/124/commits/11c2d00b6aef1e79198790c0329f1704a71b0417
const pegaCores = document.querySelectorAll('.color');
let pegaPixels = document.querySelectorAll('.pixel');
const limpaCelula = document.getElementById('clear-board');

limpaCelula.addEventListener('click', function () {
    for (let i = 0; i < pegaPixels.length; i += 1) {
        pegaPixels[i].style.backgroundColor = 'white';
    }
})

for (let i = 0; i < pegaPixels.length; i += 1) {
    pegaPixels[i].style.backgroundColor = 'white';
}

for (let i = 0; i < pegaCores.length; i += 1) {
    pegaCores[i].addEventListener('click', function(){

        if (pegaCores[i].className !== 'selected') {
            
            for (let i = 0; i < pegaCores.length; i += 1) {
                pegaCores[i].classList.remove('selected')
            };
        };
        pegaCores[i].classList.add('selected')

        for (let px = 0; px < pegaPixels.length; px += 1) {
            pegaPixels[px].addEventListener('click', function() {
                pegaPixels[px].style.backgroundColor = pegaCores[i].style.backgroundColor;
            })
        }
    });
};





