import { aspectCards, learnCards } from '../data/learndata.mjs';

export function renderAspects(cardsToRender = aspectCards) {
    const container = document.querySelector('.aspects-grid');
    if (!container) return;

    container.innerHTML = cardsToRender.map(card => `
        <div class="aspect-card">
            <h3>${card.number} ${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');
}

export function renderLearnCards() {
    const container = document.querySelector('.learn-cards-container');
    if (!container) return;

    container.innerHTML = learnCards.map(card => `
        <div class="learn-card">
            <h4>${card.title}</h4>
            <img src="${card.imgSrc}" alt="${card.imgAlt}">
            <p>${card.description}</p>
        </div>
    `).join('');
}