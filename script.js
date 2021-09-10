function createPixels() {
  const bord = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    let inline = document.createElement('div');
    for (let ind = 0; ind < 5; ind += 1) {
      let Pixel = document.createElement('div');
      Pixel.classList.add('pixel');
      inline.appendChild(Pixel);
    }
    bord.appendChild(inline)
  }
}
createPixels()
