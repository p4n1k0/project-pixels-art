//requisito 2 usando JS
const cor1 = document.getElementById('preta');
const cor2 = document.getElementById('azul');
const cor3 = document.getElementById('cinza');
const cor4 = document.getElementById('amarela');

cor1.style.backgroundColor = 'black';
cor2.style.backgroundColor = 'blue';
cor3.style.backgroundColor = 'gray';
cor4.style.backgroundColor = 'yellow';

//requisito 7 usando JS
cor1.addEventListener('click', adicionaClasseSelected);
cor2.addEventListener('click', adicionaClasseSelected);
cor3.addEventListener('click', adicionaClasseSelected);
cor4.addEventListener('click', adicionaClasseSelected);

function adicionaClasseSelected(event) {
    const verificaSelected = document.querySelector('.selected');
    verificaSelected.classList.remove('selected');
    event.target.classList.add('selected');
}