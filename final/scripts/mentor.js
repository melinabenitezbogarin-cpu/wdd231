const mentorAreas = [
    {
        id: "time-mgmt",
        name: "Time Management & Prioritization",
        averagerating: 4.9
    },
    {
        id: "habit-build",
        name: "Daily Habit Building",
        averagerating: 4.8
    },
    {
        id: "goal-setting",
        name: "Goal Setting & Execution",
        averagerating: 4.7
    },
    {
        id: "focus-distract",
        name: "Deep Work & Overcoming Distractions",
        averagerating: 4.9
    },
    {
        id: "work-life",
        name: "Work-Life Balance",
        averagerating: 4.6
    }
];

const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('menu');


if (hamburger && primaryNav) {
    hamburger.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        hamburger.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("option-select");

    if (selectElement) {
        mentorAreas.forEach((area) => {
            const option = document.createElement("option");
            option.value = area.id;
            option.textContent = area.name;
            selectElement.appendChild(option);
        });
    }

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});