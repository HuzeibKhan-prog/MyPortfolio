const toggleBtn = document.getElementById("dark-mode-toggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent =
        document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";

    // Save preference
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load preference on page refresh
window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️ Light Mode";
    }
};