document.addEventListener("DOMContentLoaded", () => {
  const mainTitle = document.querySelector(".intro h1");
  if (mainTitle) {
    mainTitle.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    mainTitle.style.transform = "translateY(-50px)";
    mainTitle.style.opacity = "0";

    setTimeout(() => {
      mainTitle.style.transform = "translateY(0)";
      mainTitle.style.opacity = "1";
    }, 500);
  }

  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      darkModeToggle.classList.toggle("dark");
  
      darkModeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "🌞 Modo Claro"
        : "🌙 Modo Oscuro";
    });
  }
  
});
