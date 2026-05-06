// Typing animation for hero name
const name = "Juan dela Cruz"; // ← Change this to your name
const el = document.getElementById("typed-name");
let i = 0;

function typeName() {
  if (i < name.length) {
    el.textContent += name[i++];
    setTimeout(typeName, 100);
  }
}

typeName();

// Smooth fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(30px)";
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(section);
});