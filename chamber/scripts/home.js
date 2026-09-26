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
if (lastModP) lastModP.textContent = `Last Modification: ${document.lastModified}`;

const spotlightContainer = document.getElementById('spotlight-container');

async function getSpotlights() {
    try {
        const response = await fetch('data/members.json');
        if (response.ok) {
            const data = await response.json();

            const membersList = Array.isArray(data) ? data : data.members;

            const qualifiedMembers = membersList.filter(
                (member) => member.membership === 2 || member.membership === 3
            );

            const shuffled = qualifiedMembers.sort(() => 0.5 - Math.random());

            const selectedSpotlights = shuffled.slice(0, 3);

            displaySpotlights(selectedSpotlights);
        } else {
            console.error('Failed to load member data:', response.status);
        }
    } catch (error) {
        console.error('Error fetching member data:', error);
    }
}

function displaySpotlights(spotlights) {
    if (!spotlightContainer) return;
    spotlightContainer.innerHTML = '<h2>Member Spotlights</h2>';

    const wrapper = document.createElement('div');
    wrapper.classList.add('spotlights-wrapper');

    spotlights.forEach((member) => {
        const card = document.createElement('section');
        card.classList.add('spotlight-card');

        let levelText = 'Silver Member';
        if (member.membership === 3) levelText = 'Gold Member';

        card.innerHTML = `
            <img src="${member.image}" alt="Logo of ${member.name}" loading="lazy" width="100" height="100">
            <h3>${member.name}</h3>
            <p class="tagline">${member.description || ''}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership Level:</strong> ${levelText}</p>
            <p><a href="${member.website}" target="_blank" rel="noopener">Visit Website</a></p>
        `;

        wrapper.appendChild(card);
    });

    spotlightContainer.appendChild(wrapper);
}

const currentWeatherDiv = document.getElementById('current-weather');
const forecastDiv = document.getElementById('forecast');

const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const lat = '-34.0987';
const lon = '-59.0286';

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            console.error('Failed to fetch weather data:', response.status);
        }
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

function displayWeather(data) {
    if (!currentWeatherDiv || !forecastDiv) return;

    const current = data.list[0];
    const temp = Math.round(current.main.temp);
    const desc = current.weather[0].description;
    const icon = current.weather[0].icon;

    currentWeatherDiv.innerHTML = `
    <p><strong>Temperature:</strong> ${temp}°C</p>
    <p><strong>Condition:</strong> ${desc}</p>
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${desc}">
  `;

    const dailyForecasts = data.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
    ).slice(0, 3);

    forecastDiv.innerHTML = '';
    dailyForecasts.forEach((day) => {
        const date = new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' });
        const dayTemp = Math.round(day.main.temp);

        const forecastItem = document.createElement('p');
        forecastItem.innerHTML = `<strong>${date}:</strong> ${dayTemp}°C`;
        forecastDiv.appendChild(forecastItem);
    });
}

getSpotlights();
getWeather();