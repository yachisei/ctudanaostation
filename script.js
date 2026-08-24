const darkModeBtn = document.getElementById("darkModeBtn");

if (localStorage.getItem("darkMode") === "enabled") {

    document.body.classList.add("dark-mode");

    if (darkModeBtn) {
        darkModeBtn.textContent = "☀️";
    }

}

if (darkModeBtn) {

    darkModeBtn.addEventListener("click", function() {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            darkModeBtn.textContent = "☀️";

            localStorage.setItem("darkMode", "enabled");

        } else {

            darkModeBtn.textContent = "🌙";

            localStorage.setItem("darkMode", "disabled");

        }

    });

}