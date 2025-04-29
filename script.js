// let a=10
// let b=10
// let c=a+b
// document.write(c)


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
document.getElementById("gitbttn1").onclick = function() {
    window.location.href = "https://samrudhipuranik16.github.io/samrudhipuranik16.github.io/project1onlinestore/";
};
document.getElementById("gitbttn2").onclick = function() {
    window.location.href = "https://samrudhipuranik16.github.io/project2mybank/";
};
document.getElementById("gitbttn3").onclick = function() {
    window.location.href = "https://samrudhipuranik16.github.io/mystoreproject3/index.html";
};
document.getElementById("gitbttn4").onclick = function() {
    window.location.href = "https://samrudhipuranik16.github.io/project4website/index.html";
};

// https://samrudhipuranik16.github.io/