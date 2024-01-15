const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".nav-items");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navItems.classList.toggle("active");
})

navLink.forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navItems.classList.remove("active");
}))