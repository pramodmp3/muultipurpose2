// CONTACT PAGE INTERACTION SCRIPT

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial form focus and basic UI setup
  const form = document.getElementById("contact-form");
  if (form) {
    // Automatically focus on the first input when the page loads
    const firstInput = form.querySelector("input, textarea");
    if (firstInput) {
      firstInput.focus();
    }

    // Basic form submission handler (preventing default for demo)
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const sendButton = document.querySelector(".send-btn");
      sendButton.textContent = "Message Sent!";
      sendButton.classList.add("sent-success");

      // Reset button state after a short delay
      setTimeout(() => {
        sendButton.textContent = "SEND MESSAGE";
        sendButton.classList.remove("sent-success");
        form.reset();
      }, 3000);
    });
  }

  // 2. Scroll Reveal Animation for Map and Address Blocks
  // Uses the Intersection Observer API for performance

  const targets = document.querySelectorAll(".map-container, .office-location");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the 'is-visible' class when the element comes into view
          entry.target.classList.add("is-visible");
          // Stop observing once visible
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Options: Trigger the callback when 10% of the element is visible
      threshold: 0.1,
    }
  );

  // Attach observer to all target elements
  targets.forEach((target) => {
    observer.observe(target);
  });
});
