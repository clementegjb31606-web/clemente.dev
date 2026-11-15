// Start the JavaScript activities here.
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Form submission handled here
});

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  console.log(card);
});