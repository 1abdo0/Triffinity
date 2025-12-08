// script.js

// Show the first page by default
const pages = document.querySelectorAll(".page");
const links = document.querySelectorAll("nav a");

function showPage(id) {
  pages.forEach(p => (p.style.display = "none"));
  document.querySelector(id).style.display = "block";
}

// Initial page
showPage("#intro");

// Navigation click
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href");
    showPage(target);
  });
});
