const $$ = (id) => document.getElementById(id);
const $$$ = (e) => document.querySelectorAll(e);
const $$$$ = (ee) => document.querySelector(ee);

document.addEventListener('DOMContentLoaded', () => {
  // Menu
  const navegationMenu = $$('navegation-menu');
  const btnMenu = $$('btn-menu');
  const menu = $$('menu');

  // btnMenu.addEventListener('click', () => {
  // menu.classList.toggle('display-block');
  // document.body.style.overflow = 'hidden';
  // });

  $$$('.item-menu').forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('display-block');
        document.body.style.overflow = 'auto';
    })
  })

// Toggle menu
const explorerBooks = $$('explorer-books');
let toggleStateMenu = true;
btnMenu.addEventListener('click', () => {
  if(toggleStateMenu) {
    navegationMenu.classList.add('bg-nav');
    menu.classList.add('display-block');
    document.body.style.overflow = 'hidden';
    explorerBooks.classList.add = 'margin-zero';
  } else {
    navegationMenu.classList.remove('bg-nav');
    menu.classList.remove('display-block');
    document.body.style.overflow = 'auto';
    explorerBooks.classList.remove= 'margin-zero';
  }
  toggleStateMenu =! toggleStateMenu;
})

// Style books
const itemBooks = $$$('.item-book');
const books = $$('books');
itemBooks.forEach(book => {
  book.addEventListener('click', () => {
    book.style.scale = '1.3';
  })

  books.addEventListener('dblclick', () => {
    itemBooks.forEach(book => {
      book.style.scale = '1';
    })
  })
})


});


// Obtener los elementos
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("login-acc");
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
