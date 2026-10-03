document.addEventListener("DOMContentLoades", () => {
    const timestampInput = document.getElementById("timestamp");
    if (timestampInput) {
        const currentDate = new Date();
        timestampInput.value = currentDate.toISOString();
    }

    const openModalButtons = document.querySelectorAll("[data-modal]");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);

            if (modal) {
                modal.showModal();
            }
        });
    });


    const closeModalButtons = document.querySelectorAll(".close-modal");

    closeModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const modal = button.closest("dialog");
            if (modal) {
                modal.close();
            }
        });
    });


    const modals = document.querySelectorAll("dialog");

    modals.forEach((modal) => {
        modal.addEventListener("click", (event) => {
            const dialogBounds = modal.getBoundingClientRect();

            if (
                event.clientX < dialogBounds.left ||
                event.clientX > dialogBounds.right ||
                event.clientY < dialogBounds.top ||
                event.clientY > dialogBounds.bottom
            ) {
                modal.close();
            }
        });
    });
});