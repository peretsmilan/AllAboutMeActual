
function openPopup(id) {
    const popup = document.getElementById(id);
    popup.style.display = "block";

    setTimeout(() => {
        popup.classList.add("show");
    }, 10);
}

function closePopup(id) {
    const popup = document.getElementById(id);
    popup.classList.remove("show");

    setTimeout(() => {
        popup.style.display = "none";
    }, 200);
}


function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const btn = document.querySelector(".dark-toggle");

    const isDark = document.body.classList.contains("dark-mode");

    btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}