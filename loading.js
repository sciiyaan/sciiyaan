// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.querySelector(".loading-screen");
    const enterButton = document.getElementById("enter-button");

    // Simulate loading (you can adjust the time as needed)
    setTimeout(() => {
        loadingScreen.style.display = "none";
        enterButton.classList.remove("hidden");
    }, 3000); // 3 seconds

    // Handle the "Enter" button click event
    enterButton.addEventListener("click", function() {
        window.location.href = "aninohtml.html";
    });
});
