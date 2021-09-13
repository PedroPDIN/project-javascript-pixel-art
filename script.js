// requisito 4.
function createPixels() {
  const bord = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const inline = document.createElement('div');
    for (let ind = 0; ind < 5; ind += 1) {
      const Pixel = document.createElement('div');
      Pixel.classList.add('pixel');
      inline.appendChild(Pixel);
    }
    bord.appendChild(inline);
  }
}
createPixels();

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
const pixel = document.querySelectorAll('.pixel');

function pixelColor() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (event) => {
      const selected = document.querySelector('.selected');
      const bg = window.getComputedStyle(selected).getPropertyValue('background-Color');
      event.target.style.backgroundColor = bg;
    });
  }
}
pixelColor ();
