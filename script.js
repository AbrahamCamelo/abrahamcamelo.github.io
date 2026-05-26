const root = document.documentElement;
const toggle = document.querySelector(".theme-toggle");
const storageKey = "portfolio-theme";

const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);

  if (!toggle) {
    return;
  }

  const isDark = theme === "dark";
  toggle.textContent = isDark ? "Light" : "Dark";
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
};

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

applyTheme(getPreferredTheme());

if (toggle) {
  toggle.addEventListener("click", () => {
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
  });
}
