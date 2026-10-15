document.addEventListener("DOMContentLoaded", () => {
    const currentUrlParams = new URLSearchParams(window.location.search);

    console.log("Parámetros recibidos en la URL:", window.location.search);

    function getParamValue(paramName) {
        const value = currentUrlParams.get(paramName);
        if (!value || value.trim() === "") {
            return "Not provided";
        }
        return decodeURIComponent(value.replace(/\+/g, " "));
    }

    function setElementText(elementId, textValue) {
        const element = document.getElementById(elementId);
        if (element) {
            element.textContent = textValue;
        } else {
            console.warn(`No se encontró el elemento con ID: ${elementId}`);
        }
    }

    const mentorAreas = {
        "time-mgmt": "Time Management & Prioritization",
        "habit-build": "Daily Habit Building",
        "goal-setting": "Goal Setting & Execution",
        "focus-distract": "Deep Work & Overcoming Distractions",
        "work-life": "Work-Life Balance"
    };

    const rawOption = getParamValue("option");
    const formattedOption = mentorAreas[rawOption] || rawOption;

    setElementText("display-flname", getParamValue("flname"));
    setElementText("display-email", getParamValue("email"));
    setElementText("display-product", formattedOption);
    setElementText("display-startdate", getParamValue("startDate"));
    setElementText("display-finishdate", getParamValue("finishDate"));
    setElementText("display-review", getParamValue("writtenReview"));

    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedPara = document.getElementById("lastModified");
    if (lastModifiedPara) {
        lastModifiedPara.textContent = `Last Modification: ${document.lastModified}`;
    }
});
