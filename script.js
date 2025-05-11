// Smooth scroll and localStorage demo
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Save preferred section to localStorage
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    localStorage.setItem('lastSection', link.getAttribute('href'));
  });
});

// Auto-scroll to last visited section on load
window.addEventListener('DOMContentLoaded', () => {
  const lastSection = localStorage.getItem('lastSection');
  if (lastSection) {
    const target = document.querySelector(lastSection);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }
});
