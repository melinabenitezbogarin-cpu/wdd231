const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('menu');
const container = document.getElementById('members-container');
const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');


hamburger.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    hamburger.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
});

async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        } else {
            console.error('Failed to load member data:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}


function displayMembers(members) {
    container.innerHTML = '';

    members.forEach((member) => {
        const card = document.createElement('section');


        let levelText = 'Member';
        if (member.membership === 2) levelText = 'Silver';
        if (member.membership === 3) levelText = 'Gold';

        card.innerHTML = `
      <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy" width="100" height="100">
      <h3>${member.name}</h3>
      <p class="tagline">${member.description}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Membership Level:</strong> ${levelText}</p>
      <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
    `;

        container.appendChild(card);
    });
}

gridBtn.addEventListener('click', () => {
    container.classList.add('grid');
    container.classList.remove('list');
    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
});

listBtn.addEventListener('click', () => {
    container.classList.add('list');
    container.classList.remove('grid');
    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
});


document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;

getMembers();