// requisito 2 usando JS
// elementos html
const color1 = document.getElementById('black');
const color2 = document.getElementById('blue');
const color3 = document.getElementById('green');
const color4 = document.getElementById('yellow');
const pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');

color1.style.backgroundColor = 'black';
color2.style.backgroundColor = 'blue';
color3.style.backgroundColor = 'green';
color4.style.backgroundColor = 'yellow';

function addClassSelected(addClass) {
  const verifySelected = document.querySelector('.selected'); // elemento html
  verifySelected.classList.remove('selected');
  addClass.target.classList.add('selected');
}

// requisito 8
function changeColor(change) {
  const selectColor = document.querySelector('.selected').style.backgroundColor; // elemento html
  change.target.style.backgroundColor = selectColor;
}

// requisito 9
function clearBtn() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

color1.addEventListener('click', addClassSelected);
color2.addEventListener('click', addClassSelected);
color3.addEventListener('click', addClassSelected);
color4.addEventListener('click', addClassSelected);
pixelBoard.addEventListener('click', changeColor);
clearBoard.addEventListener('click', clearBtn);
