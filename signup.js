document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".signup-container");
  const form = document.getElementById("signup-form");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const passwordToggle1 = document.getElementById("password-toggle-1");
  const passwordToggle2 = document.getElementById("password-toggle-2");
  const confirmHint = document.getElementById("confirm-password-hint");

  // --- 1. Subtle Form Load Animation ---
  setTimeout(() => {
    container.classList.add("loaded");
  }, 100);

  // --- 2. Show/Hide Password Toggle Function ---
  const togglePasswordVisibility = (input, toggle) => {
    const icon = toggle.querySelector("i");
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    }
  };

  passwordToggle1.addEventListener("click", () => {
    togglePasswordVisibility(passwordInput, passwordToggle1);
  });

  passwordToggle2.addEventListener("click", () => {
    togglePasswordVisibility(confirmPasswordInput, passwordToggle2);
  });

  // --- 3. Real-time Password Matching Validation Hint ---
  const checkPasswordMatch = () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword.length === 0) {
      confirmHint.textContent = "";
      confirmHint.classList.remove("show");
      confirmPasswordInput.setCustomValidity("");
      return;
    }

    if (password !== confirmPassword) {
      confirmHint.textContent = "Passwords do not match.";
      confirmHint.classList.add("show");
      confirmPasswordInput.setCustomValidity("Passwords do not match");
    } else {
      confirmHint.textContent = "Passwords match.";
      confirmHint.style.color = "var(--accent-color)";
      confirmHint.classList.add("show");
      confirmPasswordInput.setCustomValidity("");
    }
  };

  passwordInput.addEventListener("input", checkPasswordMatch);
  confirmPasswordInput.addEventListener("input", checkPasswordMatch);

  // --- 4. Form Submission with Redirect to 404 ---
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkPasswordMatch();

    if (confirmPasswordInput.checkValidity()) {
      const signupBtn = form.querySelector(".signup-btn");
      signupBtn.textContent = "Signing Up...";
      signupBtn.disabled = true;
      signupBtn.style.opacity = 0.8;

      // Simulate delay before redirect
      setTimeout(() => {
        // Redirect to 404 page
        window.location.href = "404.html"; // Adjust path if necessary
      }, 150);
    } else {
      alert("Please correct the validation errors before signing up.");
    }
  });
});
