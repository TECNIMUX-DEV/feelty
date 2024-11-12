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
const loginBtn = document.getElementById("login-btn");
const loginModal = document.getElementById("login-acc");
const closeModal = document.getElementById("closeModal");

const btnRegister = document.getElementById("btn-register");
const btnCloseLogin = document.getElementById("btn-close-login");
const btnCloseRegister = document.getElementById("btn-close-register");
const containerRegister = document.getElementById("container-register");
const containerLogin = document.getElementById("container-login");
const loginAcc = document.getElementById("login-acc");


// Abrir el modal cuando se hace clic en el botón de registro
btnRegister.addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  containerLogin.style.display = "none";
  containerRegister.style.display = "flex";
  document.body.style.overflow = 'hidden';
});

// Abrir el modal cuando se hace clic en el ícono de usuario
loginBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento predeterminado del enlace
  loginModal.style.display = "flex";
  containerLogin.style.display = "block";
  document.body.style.overflow = 'hidden';
});

// Cerrar el modal cuando se hace clic en la 'X'
closeModal.addEventListener("click", () => {
  containerLogin.style.display = "none";
  containerRegister.style.display = "block";
});

// Cerrar el modal si se hace clic fuera del contenido
btnCloseLogin.addEventListener("click", () => {
    loginAcc.style.display = "none";
    containerLogin.style.display = "none";
    document.body.style.overflow = 'auto';
});

btnCloseRegister.addEventListener("click", () => {
    loginAcc.style.display = "none";
    containerRegister.style.display = "none";
    document.body.style.overflow = 'auto';
});


// Open Newsletter
const containerNewsletter = document.getElementById("container-newsletter");
const btnOpenNewsletter = document.getElementById("btn-open-newsletter");
const btnCloseNewsletter = document.getElementById("close-newsletter");

btnOpenNewsletter.addEventListener("click", () => {
    containerNewsletter.style.display = "flex";
    document.body.style.overflow = 'hidden';
  })

btnCloseNewsletter.addEventListener("click", () => {
  containerNewsletter.style.display = "none";
  document.body.style.overflow = 'auto';
})



// Open Starbooks
let currentImageIndex = 0;
    
function expand() {
  const descripStarbooks = document.querySelector('.descrip-starbooks');
  const circle = document.querySelector('.circle');
  const content = document.querySelector('.content');
  const containerStarBook = document.querySelector('.container-star-book');

  // Cambiar el texto en el ::after de la esfera
  circle.style.setProperty('--circle-text', '"¡BOOM!"');

  setTimeout(() => {
    circle.style.opacity = .3;
  }, 1500);
  descripStarbooks.style.display = 'none';

  // Expande la esfera y muestra el contenido
  content.classList.add('visible');
  setTimeout(() => {
      circle.classList.add('expand'); // Expande la esfera
  }, 100);

  setTimeout(() => {
      containerStarBook.style.opacity = 1;
  }, 2000);

  setTimeout(() => {
      circle.style.zIndex = 0;
  }, 2000);
}


function showDescription(index) {
    const images = document.querySelectorAll('.image');
    images.forEach((img, i) => {
        img.classList.remove('active');
    });

    images[index].classList.add('active');
}

function navigate(direction) {
    const images = document.querySelectorAll('.image');
    const totalImages = images.length;

    // Remove active class from the current image
    images[currentImageIndex].classList.remove('active');

    // Update current image index based on direction
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;

    // Add active class to the new image
    images[currentImageIndex].classList.add('active');
}