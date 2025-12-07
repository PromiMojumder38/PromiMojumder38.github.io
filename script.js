// Dark-mode toggle
const setTheme = (t) => {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
  // Update button text
  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.textContent = t === "dark" ? "☀️ Light" : "🌙 Dark";
  }
};

const initTheme = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return setTheme(saved);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(prefersDark ? "dark" : "light");
};

document.addEventListener("DOMContentLoaded", () => {
  initTheme();

  // Add theme toggle functionality
  const themeToggle = document.querySelector(".theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "dark" ? "light" : "dark");
    });
  }
});

// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
