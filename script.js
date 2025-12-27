// Theme handling
const setTheme = (theme) => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  const toggle = document.querySelector(".theme-toggle");
  if (toggle) {
    toggle.textContent = theme === "dark" ? "☀️ Light" : "🌙 Dark";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Init theme
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  // Toggle
  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  // Footer year
  document.getElementById("year").textContent = new Date().getFullYear();
});
