/*const menuBtn = document.getElementById("menu");
const menuContainer = document.getElementsByClassName("menu_container")[0];
const closeBtn = document.getElementById("close");

menu.addEventListener("click", () => {
    menuContainer.style.left = "0"
})

closeBtn.addEventListener("click", () => {
    menuContainer.style.left = "-80%"
})*/

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.querySelector(".search-icon");
    const searchBar = document.querySelector(".search-bar");
    const searchInput = document.querySelector(".search-bar input");

    searchIcon.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del clic
        event.stopPropagation(); // Detener la propagación del evento para que no cierre la barra de búsqueda
        searchBar.style.display = searchBar.style.display === "none" ? "block" : "none"; // Alternar la visibilidad de la barra de búsqueda
        if (searchBar.style.display === "block") { // Si la barra de búsqueda está visible, enfocar el input
            searchInput.focus();
        }
    });

    // Cerrar la barra de búsqueda si se hace clic fuera de ella
    document.addEventListener("click", function(event) {
        if (!searchBar.contains(event.target) && searchBar.style.display === "block") {
            searchBar.style.display = "none";
        }
    });

    // Evitar que el clic dentro de la barra de búsqueda cierre la misma
    searchBar.addEventListener("click", function(event) {
        event.stopPropagation();
    });
});

