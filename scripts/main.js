document.addEventListener("DOMContentLoaded", () => {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.innerHTML = `Las Modified: ${document.lastModified}`;
    }

    const coursesContainer = document.getElementById("courses-container");
    const totalCreditsElement = document.getElementById("total-credits");
    const allBtn = document.getElementById("all");
    const cseBtn = document.getElementById("cse");
    const wddBtn = document.getElementById("wdd");

    function displayCourses(filterCourses) {
        if (!coursesContainer) return;
        coursesContainer.innerHTML = "";

        filterCourses.forEach(course => {
            const card = document.createElement("div");
            card.classList.add("course-card");

            if (course.completed) {
                card.classList.add("completed");
                card.innerHTML = `<h3> ${course.subject} ${course.number}`;
            } else {
                card.classList.add("inclomplete");
                card.innerHTML = `<h3>${course.subject} ${course.nuber}`;
            }

            coursesContainer.appendChild(card);
        });

        const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCreditsElement.textContent = `Total Credits Displayed: ${total}`
    }

    function filterAll() {
        setActiveButton(allBtn);
        displayCourses(courses);
    }

    function filterCSE() {
        setActiveButton(cseBtn);
        const cseCourses = courses.filter(course => course.subject === 'CSE');
        displayCourses(cseCourses);
    }

    function filterWDD() {
        setActiveButton(wddBtn);
        const wddCourses = courses.filter(course => course.subject === 'WDD');
        displayCourses(wddCourses);
    }

    function setActiveButton(activeBtn) {
        [allBtn, cseBtn, wddBtn].forEach(btn => btn.classList.remove("active"));
        activeBtn.classList.add("active");
    }

    if (allBtn) allBtn.addEventListener("click", filterAll);
    if (cseBtn) cseBtn.addEventListener("click", filterCSE);
    if (wddBtn) wddBtn.addEventListener("click", filterWDD);

    filterAll();
});