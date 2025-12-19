// --- 1. Page Load Animation Logic ---
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader-overlay");
  const loginContainer = document.querySelector(".login-container");

  setTimeout(() => {
    if (loader) {
      loader.classList.add("hidden");
    }

    if (loginContainer) {
      loginContainer.classList.add("loaded");
    }
  }, 500);
});

// --- 2. Show/Hide Password Toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const passwordField = document.getElementById("password");
  const toggleButton = document.getElementById("password-toggle");

  if (toggleButton && passwordField) {
    toggleButton.addEventListener("click", () => {
      const type =
        passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);

      const icon = toggleButton.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-eye-slash");
        icon.classList.toggle("fa-eye");
      }
    });
  }
});

// --- 3. Form Submission Handler with Redirect to 404 Page ---
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Optional: show some button animation before redirect
      const loginBtn = document.querySelector(".login-btn");
      const originalText = loginBtn.textContent;
      loginBtn.disabled = true;
      loginBtn.textContent = "Logging In...";

      setTimeout(() => {
        // Redirect to 404 page
        window.location.href = "404.html"; // Make sure this path is correct
      }, 1000); // Wait 1 second to simulate login
    });
  }
});
