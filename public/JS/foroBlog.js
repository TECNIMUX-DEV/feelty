document.addEventListener('DOMContentLoaded', () => {
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




    // Función para abrir y cerrar el menú de categorías
    function toggleMenu() {
        const sidebar = document.getElementById("sidebar");
        sidebar.classList.toggle("open");
    }

    // Mostrar y ocultar contenido adicional de cada libro
    document.querySelectorAll("#sidebar ul li").forEach((item) => {
        item.addEventListener("click", () => {
            const content = item.querySelector(".content");
            if (content) {
                content.style.display = content.style.display === "none" ? "block" : "none";
            } else {
                const newContent = document.createElement("div");
                newContent.classList.add("content");
                newContent.textContent = `Descripción de ${item.textContent}`;
                item.appendChild(newContent);
            }
        });
    });