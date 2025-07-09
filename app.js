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

window.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('.Main');
  main.classList.add('fade-in');
});

document.querySelector('.Header-title').addEventListener('click', function(e) {
  e.preventDefault();
  const link = this.getAttribute('href');
  
  const main = document.querySelector('.Main');
  main.classList.remove('fade-in');
  main.classList.add('fade-out');
  
  setTimeout(() => {
    window.location.href = link;
  }, 500);
});

