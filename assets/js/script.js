const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menu = document.querySelector("#menu");

// event listener
openMenu.addEventListener("click", () => {
  menu.style.display = "flex";

  // captura o tamanho do menu nav e aplica na posiçao
  menu.style.right = (menu.offsetWidth * -1) + 'px';

  // apos 10 milesimos de segundos, adiciona o atributo style
  // e adiciona as propriedades css
  setTimeout(() => {
    // faz o menu nav aparecer na velocidade em q foi determinado na propriedade transition no CSS
    menu.style.opacity = "1";

    /* Move o menu nav para a posição 0 a direita. Utiliza 
       também a velocidade definida, na propriedade transition 
       no CSS para realizar o movimento mais suave.*/
    menu.style.right = "0";

    /* Oculta o botão que torna visível o elemento nav.*/
    openMenu.style.display = 'none';
  }, 10)
})

closeMenu.addEventListener("click", () => {
  /* Faz o menu nav desaparecer na velocidade em que foi
   determinado na propriedade transition no CSS. */
  menu.style.opacity = "0";

  /* Captura o tamanho do menu nav e aplica na posição. */
  menu.style.right = (menu.offsetWidth * -1) + 'px';

  /* Após 200 milésimos de 1 segundo, remove o atributo style. */
  setTimeout(() => {
    menu.removeAttribute('style')
    openMenu.removeAttribute('style')
  }, 200);
})