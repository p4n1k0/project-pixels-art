const color1 = document.getElementById('cor1');
color1.className = 'color selected';
const color2 = document.getElementById('cor2');
const color3 = document.getElementById('cor3');
const color4 = document.getElementById('cor4');
let pixelBoard = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');
let boardSize = document.getElementById('board-size');
let buttonVqv = document.getElementById('generate-board');


function color() {
  let colorRandom = '#' + (Math.floor(Math.random() * 16777215).toString(16));
  return colorRandom;
};
color1.style.backgroundColor = 'rgb(0, 0, 0)';
color2.style.backgroundColor = color();
color3.style.backgroundColor = color();
color4.style.backgroundColor = color();


function colorSelected(addClass) {
  const verifySelected = document.querySelector('.selected'); // elemento html
  verifySelected.classList.remove('selected');
  addClass.target.classList.add('selected');
};
color1.addEventListener('click', colorSelected);
color2.addEventListener('click', colorSelected);
color3.addEventListener('click', colorSelected);
color4.addEventListener('click', colorSelected);


function changeColor(change) {
  const selectColor = document.querySelector('.selected').style.backgroundColor; // elemento html
  change.target.style.backgroundColor = selectColor;
};
pixelBoard.addEventListener('click', changeColor);


function clearBtn() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  };
};
clearBoard.addEventListener('click', clearBtn);


function createBoard(size) {
  let board = document.querySelector('#pixel-board');
  board.innerHTML = '';

  for (let i = 0; i < size; i += 1) {
    let sectionLine = document.createElement('section');
    sectionLine.className = 'line';
    pixelBoard.appendChild(sectionLine);
    for (let index = 0; index < size; index += 1) {
      let pixel = document.createElement('div');
      sectionLine.appendChild(pixel);
      pixel.className = 'pixel';
    };
  };
};
createBoard(5);

buttonVqv.addEventListener('click', function() {
  let size = boardSize.value;
  if (size == '') {
    alert('Board inválido!');
  } else if (size < 5) {
    size = 5;
    createBoard(size);
  } else if (size > 50) {
    size = 50;
    createBoard(size);
  } else {
    createBoard(size);
  }
});
