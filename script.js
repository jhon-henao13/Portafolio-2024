const toggleMenuElement = document.getElementById("toggle-menu");
const mainMenuElement = document.querySelector(".nav-links-div");

toggleMenuElement.addEventListener('click', () => {
    mainMenuElement.classList.toggle('nav-links-div--show')
})