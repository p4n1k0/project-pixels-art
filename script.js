//requisito 2 usando JS
//elementos html
const cor1 = document.getElementById('preta');
const cor2 = document.getElementById('azul');
const cor3 = document.getElementById('cinza');
const cor4 = document.getElementById('amarela');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'blue';
cor3.style.backgroundColor = 'gray';
cor4.style.backgroundColor = 'yellow';

cor1.addEventListener('click', adicionaClasseSelected);
cor2.addEventListener('click', adicionaClasseSelected);
cor3.addEventListener('click', adicionaClasseSelected);
cor4.addEventListener('click', adicionaClasseSelected);
pixelBoard.addEventListener('click', mudaCor);
clearBoard.addEventListener('click', botaoLimpa);


function adicionaClasseSelected(event) {
    const verificaSelected = document.querySelector('.selected'); //elemento html
    verificaSelected.classList.remove('selected');
    event.target.classList.add('selected');
}
//requisito 8
function mudaCor(event) {
    const corSelecionada = document.querySelector('.selected').style.backgroundColor; //elemento html
    event.target.style.backgroundColor = corSelecionada;
}

//requisito 9
function botaoLimpa() {
    for (let i = 0; i < pixels.length; i += 1) {
        pixels[i].style.backgroundColor = 'white';
    }
}
