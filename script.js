const paletaCores = document.querySelectorAll(".color");
const array = ['rgba(0, 0, 0)', 'rgba(240, 248, 255, 1)', 'rgba(0, 0, 255, 1)', 'rgba(128, 128, 128, 1)']

function createColors() {
    for (let i = 0; i < paletaCores.length; i += 1){
        paletaCores[i].style.backgroundColor = array[i];
    }
}

createColors();



