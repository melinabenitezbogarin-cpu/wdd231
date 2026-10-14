const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('menu');


if (hamburger && primaryNav) {
    hamburger.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        hamburger.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
    });
}

const yearSpan = document.getElementById('currentyear');
const lastModP = document.getElementById('lastModified');

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastModP) lastModP.textContent = `Last Modification: ${document.lastModified}`