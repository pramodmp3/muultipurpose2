// Fade-in animation when footer scrolls into view
const footerSections = document.querySelectorAll(".footer-container > div");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

footerSections.forEach((section) => observer.observe(section));

// // Newsletter fake submission success
// const form = document.getElementById("newsletter-form");
// const successMessage = document.getElementById("success-message");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   successMessage.textContent = "✅ Thanks for subscribing!";
//   successMessage.style.opacity = 1;

//   setTimeout(() => {
//     successMessage.style.opacity = 0;
//   }, 3000);

//   form.reset();
// });
