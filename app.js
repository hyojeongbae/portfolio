document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  sections.forEach(section => observer.observe(section));
});


const popup = document.getElementById('popup');
const contactBtn = document.getElementById('contactBtn');
const closeBtn = document.getElementById('closePopup');

contactBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
