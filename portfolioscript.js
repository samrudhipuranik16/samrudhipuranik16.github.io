document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector("#changingText .word");
    if (!textElement) return;

    const words = ["Student", "Developer"];
    let index = 0;

    setInterval(() => {
        textElement.classList.add("hidden"); // Fade out

        setTimeout(() => {
            index = (index + 1) % words.length;
            textElement.textContent = words[index]; // Change text
            textElement.classList.remove("hidden"); // Fade in
        }, 500); // Change after fade-out
    }, 1500);
});
