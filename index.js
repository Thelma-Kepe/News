const navbar = document.querySelector("nav");
const openSidebar = document.getElementById("menu-button");
const closeSidebar = document.getElementById("menu-close");

openSidebar.addEventListener("click", () => {
    navbar.classList.add("sidebar");
})

closeSidebar.addEventListener("click", () => {
    navbar.classList.remove("sidebar");
})