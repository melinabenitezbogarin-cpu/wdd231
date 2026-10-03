document.addEventListener("DOMContentLoaded", () => {

    const currentUrlParams = new URLSearchParams(window.location.search);

    function getParamValue(paramName) {
        return currentUrlParams.get(paramName) || "Not provided";
    }

    function formatTimestamp(rawTimestamp) {
        if (!rawTimestamp || rawTimestamp === "Not provided") return "N/A";

        const dateObj = new Date(rawTimestamp);
        if (isNaN(dateObj.getTime())) return rawTimestamp;

        return dateObj.toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "medium"
        });
    }

    document.getElementById("display-fname").textContent = getParamValue("fname");
    document.getElementById("display-lname").textContent = getParamValue("lname");
    document.getElementById("display-email").textContent = getParamValue("email");
    document.getElementById("display-phone").textContent = getParamValue("phone");
    document.getElementById("display-organization").textContent = getParamValue("organization");
    document.getElementById("display-timestamp").textContent = formatTimestamp(getParamValue("timestamp"));
});