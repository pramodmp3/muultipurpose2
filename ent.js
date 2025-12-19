document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll(
    ".channel-card, .program-card, .featured-card, .event-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.8s ease";
        observer.unobserve(entry.target);
      }
    });
  });

  revealElements.forEach((el) => observer.observe(el));

  const ctaBtn = document.querySelector(".cta-btn");
  if (ctaBtn) {
    ctaBtn.addEventListener(
      "mouseover",
      () => (ctaBtn.style.boxShadow = "0 0 25px rgba(255,0,212,0.6)")
    );
    ctaBtn.addEventListener(
      "mouseleave",
      () => (ctaBtn.style.boxShadow = "0 0 0 transparent")
    );
  }
});
