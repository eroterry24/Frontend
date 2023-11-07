

function toggleMenu() {
    const menu= document.querySelector(".menu-link")
    const icon= document.querySelector(".hamburger-icon")
    menu.classList.toggle("open");
    console.log("opened");
    icon.classList.toggle("open");
}
