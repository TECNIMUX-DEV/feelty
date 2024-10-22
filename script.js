const $$ = (id) => document.getElementById(id);
const $$$ = (e) => document.querySelectorAll(e);

document.addEventListener('DOMContentLoaded', () => {
  // Menu
  const btnMenu = $$('btn-menu');
  const menu = $$('menu');

  btnMenu.addEventListener('click', () => {
  menu.classList.toggle('display-block');
  document.body.style.overflow = 'hidden';
  });

  $$$('.item-menu').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('display-block');
        document.body.style.overflow = 'auto';
    })
  })
});



// Obtener los elementos
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

// Abrir el modal cuando se hace clic en el ícono de usuario
loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  loginModal.style.display = "flex";
});

// Cerrar el modal cuando se hace clic en la 'X'
closeModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});

// Cerrar el modal si se hace clic fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
});
