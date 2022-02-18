//requisito 2 usando JS
//elementos html
const cor1 = document.getElementById('preta');
const cor2 = document.getElementById('azul');
const cor3 = document.getElementById('cinza');
const cor4 = document.getElementById('amarela');
const pixelBoard = document.getElementById('pixel-board');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'blue';
cor3.style.backgroundColor = 'gray';
cor4.style.backgroundColor = 'yellow';

//requisito 7
cor1.addEventListener('click', adicionaClasseSelected);
cor2.addEventListener('click', adicionaClasseSelected);
cor3.addEventListener('click', adicionaClasseSelected);
cor4.addEventListener('click', adicionaClasseSelected);
pixelBoard.addEventListener('click', mudaCor);

function adicionaClasseSelected(event) {
    const verificaSelected = document.querySelector('.selected'); //elemnto html
    verificaSelected.classList.remove('selected');
    event.target.classList.add('selected');
}
//requisito 8
function mudaCor(event) {
    const corSelecionada = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = corSelecionada;
}

