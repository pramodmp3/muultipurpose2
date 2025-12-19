// Preloader
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  setTimeout(() => {
    preloader.style.display = "none";
  }, 800);
});

// Scroll Reveal Animation
const sections = document.querySelectorAll("section");
const revealSection = () => {
  sections.forEach((sec) => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) sec.classList.add("is-visible");
  });
};
window.addEventListener("scroll", revealSection);
revealSection(); // initial check
