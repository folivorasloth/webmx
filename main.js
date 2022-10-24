const menuBar = document.querySelector(".menuBar");
const navList = document.querySelector(".navList");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".navItems").forEach (n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    navList.classList.remove("active");
}))