const navBoton = document.querySelector(".barras");
const menu = document.querySelector(".menu");

navBoton.addEventListener('click', () => {
  menu.classList.toggle("mostrar");
})