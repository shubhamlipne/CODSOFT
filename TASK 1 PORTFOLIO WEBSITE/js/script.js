// Toggle Mobile Navigation Menu
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});

// Close menu on link click
document.querySelectorAll('.nav-list ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navList.classList.remove('active');
  });
});

// Scroll animation for header background
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header .header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(31, 30, 30, 0.95)";
  } else {
    header.style.backgroundColor = "rgba(31, 30, 30, 0.24)";
  }
});