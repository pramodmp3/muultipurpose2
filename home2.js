// -------------------------------------
// JAVASCRIPT FOR SCROLL ANIMATIONS AND HERO EFFECTS
// -------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // 1. SCROLL ANIMATION LOGIC (Intersection Observer)

  // Observer options: triggers the animation when 15% of the element is visible
  const observerOptions = {
    threshold: 0.15,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Apply the 'show' class to trigger the CSS animation (slide-up fade-in)
        entry.target.classList.add("show");
      }
      // Note: We don't remove the 'show' class here so animations only trigger once upon entering the viewport.
    });
  }, observerOptions);

  // Observe all sections and elements marked with data-scroll attribute
  document.querySelectorAll("[data-scroll]").forEach((element) => {
    observer.observe(element);
  });

  // 2. HERO TEXT ANIMATION ON LOAD (Uses data-animate attributes)

  // Find all hero elements that need the staggered slide-in effect
  const animatedElements = document.querySelectorAll("[data-animate]");

  animatedElements.forEach((element, index) => {
    // Use a slight timeout delay based on the index to create a staggered effect
    const delay = index * 300;

    setTimeout(() => {
      // Apply CSS styles to transition from the hidden state (defined in style.css)
      element.style.opacity = 1;
      element.style.transform = "none";
    }, 300 + delay); // Start slightly after page load
  });
});
