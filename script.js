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

const color = document.querySelector('.color')
for (let index = 0; index < color.length; index += 1) {
  color[index].classList.remove('selected');
}
color.addEventListener('click', function(event){
  for (let index = 0; index < color.length; index +=1) {
    color[index].event.target.class.classList.add('selected');
  }
})


