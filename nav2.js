document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");
  const dropdownToggles = document.querySelectorAll(
    ".nav-link.dropdown-toggle"
  );
  const navItemsWithDropdown = document.querySelectorAll(
    ".nav-item.has-dropdown"
  );
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  // ====================
  // THEME TOGGLE
  // ====================
  const setCurrentTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      themeIcon.className = "fas fa-sun";
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      themeIcon.className = "fas fa-moon";
      localStorage.setItem("theme", "light");
    }
  };

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) {
    setCurrentTheme(storedTheme === "dark");
  } else {
    setCurrentTheme(prefersDarkScheme.matches);
  }

  if (themeToggle && themeIcon) {
    themeToggle.addEventListener("click", () => {
      setCurrentTheme(!document.body.classList.contains("dark-mode"));
    });
  }

  // ====================
  // HAMBURGER TOGGLE
  // ====================
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      const isExpanded = hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      hamburger.setAttribute("aria-expanded", isExpanded);
    });
  }

  // ====================
  // MOBILE DROPDOWN (Accordion)
  // ====================
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      if (window.matchMedia("(max-width: 900px)").matches) {
        e.preventDefault();
        const parentItem = toggle.closest(".nav-item");
        const isActive = parentItem.classList.toggle("dropdown-active");

        navItemsWithDropdown.forEach((item) => {
          if (item !== parentItem) {
            item.classList.remove("dropdown-active");
            item
              .querySelector(".dropdown-toggle")
              ?.setAttribute("aria-expanded", "false");
          }
        });

        toggle.setAttribute("aria-expanded", isActive);
      }
    });
  });
});
