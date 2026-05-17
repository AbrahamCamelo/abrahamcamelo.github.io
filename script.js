const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");

if (header && navToggle && nav) {
  const closeNav = () => {
    header.classList.remove("nav-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open navigation");
  };

  const openNav = () => {
    header.classList.add("nav-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close navigation");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.contains("nav-open");
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!header.contains(event.target)) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });
}
