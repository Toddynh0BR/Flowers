const start = document.getElementById('YES');

function after10000(){
  document.querySelector('.after').classList.add('hide');
}

start.addEventListener('click', () => {
  document.querySelector('.ilove').classList.add('hide');
  document.querySelector('.after').classList.remove('hide');

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);

      let audio = document.getElementById('audio');
      if (audio.paused) {
          audio.play();
      } else {
          audio.pause();
      }

      setTimeout(after10000, 10000);

})





function Escape() {
  let btnNo = document.getElementById('NO');

  // Definir valores máximos para as posições
  let maxPosX = 500; // Valor máximo para a posição X
  let maxPosY = 300; // Valor máximo para a posição Y

  // Calcular a largura e altura do botão em pixels
  let btnWidth = btnNo.offsetWidth;
  let btnHeight = btnNo.offsetHeight;

  // Adicionar uma margem para garantir que o botão não saia da tela
  let margin = 10; // 10px de margem

  let maxX = maxPosX - btnWidth - margin;
  let maxY = maxPosY - btnHeight - margin;

  // Garantir que o botão não saia da tela aplicando margens
  let randomX = Math.floor(Math.random() * (maxX + 1 - margin)) + margin;
  let randomY = Math.floor(Math.random() * (maxY + 1 - margin)) + margin;

  // Garantir que o botão fique dentro da área visível
  randomX = Math.min(Math.max(randomX, margin), maxX);
  randomY = Math.min(Math.max(randomY, margin), maxY);

  btnNo.style.left = randomX + "px";
  btnNo.style.top = randomY + "px";
}


