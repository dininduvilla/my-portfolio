// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
toggle.addEventListener("click", () => links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));

// Scroll reveal animation
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Highlight active nav link while scrolling
const sections = document.querySelectorAll("section[id]");
const navAs = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(s => { if (scrollY >= s.offsetTop - 120) current = s.id; });
  navAs.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});

// Contact form: opens the visitor's email app with the message filled in
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const n = document.getElementById("name").value;
  const m = document.getElementById("message").value;
  const from = document.getElementById("email").value;
  const body = encodeURIComponent(m + "\n\nFrom: " + n + " (" + from + ")");
  window.location.href = "mailto:your.email@example.com?subject=Portfolio%20Message&body=" + body;
  document.getElementById("formMsg").textContent = "Thanks! Your email app should open now.";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
