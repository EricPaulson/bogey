// ========================================
// BOGEY CHAMPS - Main JS
// ========================================

// Sticky header shadow on scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 10);
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLeft = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLeft.classList.toggle('active');
  menuToggle.classList.toggle('open');
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLeft.classList.remove('active');
    menuToggle.classList.remove('open');
  });
});

// Newsletter form (placeholder behavior)
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = newsletterForm.querySelector('input');
  const email = input.value;
  if (email) {
    input.value = '';
    alert('Thanks for joining the Bogey Crew! We\'ll be in touch.');
  }
});
