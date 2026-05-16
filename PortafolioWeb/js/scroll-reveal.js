// IntersectionObserver to reveal elements with the .reveal class
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  elements.forEach(el => observer.observe(el));
});
