import { items } from '../data/items.mjs';

document.addEventListener('DOMContentLoaded', () => {

    const visitorMessageElement = document.getElementById('visitor-message');
    const yearSpan = document.getElementById('currentyear');
    const lastModP = document.getElementById('lastModified');
    const storageKey = 'chamber-last-visit';
    const currentTime = Date.now();
    const lastVisit = localStorage.getItem(storageKey);

    let visitMessage = '';

    if (!lastVisit) {
        visitMessage = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDifference = currentTime - parseInt(lastVisit, 10);
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            visitMessage = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            visitMessage = "You last visited 1 day ago.";
        } else {
            visitMessage = `You last visited ${daysDifference} days ago.`;
        }
    }

    if (visitorMessageElement) {
        visitorMessageElement.textContent = visitMessage;
    }

    localStorage.setItem(storageKey, currentTime.toString());


    const discoverContainer = document.getElementById('discover-container');

    if (discoverContainer) {

        items.forEach(item => {

            const card = document.createElement('article');
            card.classList.add('card-item');

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="${item.image}" alt="${item.name}" loading="lazy" width="300" height="200">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button type="button" class="learn-more-btn">Learn more</button>
            `;

            discoverContainer.appendChild(card);
        });
    }

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModP) lastModP.textContent = `Last Modification: ${document.lastModified}`;
});