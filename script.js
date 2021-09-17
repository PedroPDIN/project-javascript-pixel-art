let generatePixel = 5;  // => criei essa variavel para armazenar a determinada altura e largura para cirar a tebela de pixel. E a relação com os requisitos 4 e 10.

// requisito 4.
function createPixels() {
  const bord = document.getElementById('pixel-board');
  for (let index = 0; index < generatePixel; index += 1) {
    const inline = document.createElement('div');
    for (let ind = 0; ind < generatePixel; ind += 1) {
      const Pixel = document.createElement('div');
      Pixel.classList.add('pixel');
      inline.appendChild(Pixel);
      bord.appendChild(inline);
    }
  }
}
createPixels();

function clearButton() {
  const tabela = document.getElementById('pixel-board');
  tabela.innerHTML = "";
}

// requisito 10 ( bonûs)
const button = document.getElementById('generate-board');
button.addEventListener('click', () => {
  const input = document.getElementById('board-size');
  let number = input.value;
  if (number < 5 && number > 0) {
    number = 5;
  } else if (number > 50) {
    number = 50;
  } else if (number === '') {
    alert('Board inválido!');
  }
  generatePixel = number;
  clearButton();
  createPixels();
  pixelColor()
  whiteButton();
})

function clearButton() {
  const tabela = document.getElementById('pixel-board');
  tabela.innerHTML = "";
}

const black = document.querySelector('.black');
black.classList.add('selected');

// requisito 7
const color = document.querySelectorAll('.color');
for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', (event) => {
    for (let ind = 0; ind < color.length; ind += 1) {
      color[ind].classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

// Requisito 8.
function pixelColor() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      const selected = document.querySelector('.selected');
      const bg = window.getComputedStyle(selected).getPropertyValue('background-Color');
      console.log(bg)
      pixel[index].style.backgroundColor = bg;
    });
  }
}
pixelColor();

//requisito 9
function whiteButton() {
  const pixel = document.querySelectorAll('.pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      let pixels = pixel[index];
      pixels.style.backgroundColor = "white";
    }
  })
}
whiteButton();

function randomColor() {
  let colorValue = Math.floor(Math.random() * 255)
  let colorValue1 = Math.floor(Math.random() * 255)
  let colorValue2 = Math.floor(Math.random() * 255)
  return `rgb(${colorValue},${colorValue1},${colorValue2})`
}

function generateColor() {
  const color = document.querySelectorAll('.color');
  for (let index = 0; index < color.length; index += 1) {
    if (index === 0) {
      color[index].style.backgroundColor = 'black';
    } else {
      color[index].style.backgroundColor = randomColor();
    }
  }
}
  generateColor();
