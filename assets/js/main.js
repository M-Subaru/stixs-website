// assets/js/main.js
// 1.  mobile menu toggle
const toggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => navMenu.classList.toggle('active'));

// 2.  close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(a =>
  a.addEventListener('click', () => navMenu.classList.remove('active'))
);

// 3.  scroll-to-top button
const scrollTopBtn = document.querySelector('.scroll-top');
window.addEventListener('scroll', () =>
  scrollTopBtn.classList.toggle('show', window.pageYOffset > 300)
);
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4.  simple fade-in observer (optional eye-candy)
const obs = new IntersectionObserver(
  (entries, o) => entries.forEach(e => e.isIntersecting && e.target.classList.add('fade-in-up')),
  { threshold: 0.1 }
);
document.querySelectorAll('.menu-item, .review-card').forEach(el => obs.observe(el));