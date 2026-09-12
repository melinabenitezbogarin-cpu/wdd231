document.addEventListener("DOMContentLoaded", () => {
    const navButton = document.getElementById("nav-button");
    const navMenu = document.getElementById("primary-nav");

    if (navButton && navMenu) {
        navButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            navButton.classList.toggle("open");
        });
    }
});
