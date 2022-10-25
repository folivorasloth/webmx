const menuBar = document.querySelector(".menuBar");
const navList = document.querySelector(".navList");
const iconProfile = document.querySelector(".iconProfile");
const profileList = document.querySelector(".profileList");

menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    navList.classList.toggle("active");
})

document.querySelectorAll(".navItems").forEach (n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    navList.classList.remove("active");
}))

iconProfile.addEventListener("click", () => {
    iconProfile.classList.toggle("active");
    profileList.classList.toggle("active");
})