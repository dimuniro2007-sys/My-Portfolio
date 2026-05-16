const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'none';
      entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
  });
}, { threshold: 0.1 });

reveals.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  observer.observe(el);
});