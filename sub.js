document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".nav-links");
  const dropdownItems = document.querySelectorAll(".has-dropdown");

  // --- Toggle overlay menu ---
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");

    // Close all dropdowns when menu closes
    if (!navLinks.classList.contains("open")) {
      dropdownItems.forEach((item) => item.classList.remove("open"));
    }
  });

  // --- Dropdown toggle (mobile only) ---
  dropdownItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown-menu");

    link.addEventListener("click", (e) => {
      const isMobile = window.innerWidth <= 900;
      if (isMobile) {
        e.preventDefault();

        // Close other open dropdowns
        dropdownItems.forEach((other) => {
          if (other !== item) other.classList.remove("open");
        });

        item.classList.toggle("open");
      }
    });
  });

  // --- Close overlay when clicking any simple link ---
  navLinks.querySelectorAll("a").forEach((link) => {
    if (!link.parentElement.classList.contains("has-dropdown")) {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 900 && navLinks.classList.contains("open")) {
          navLinks.classList.remove("open");
          hamburger.classList.remove("open");
          dropdownItems.forEach((item) => item.classList.remove("open"));
        }
      });
    }
  });

  // --- Reset everything on resize ---
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      dropdownItems.forEach((item) => item.classList.remove("open"));
    }
  });
});
