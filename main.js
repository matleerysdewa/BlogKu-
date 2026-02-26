/* ============================== Toggle icon navbar ============================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');

  const isOpen = navbar.classList.contains('active');
  menuIcon.classList.toggle('fa-xmark', isOpen);
  menuIcon.classList.toggle('fa-bars', !isOpen);
});

/* ============================== Scroll section active link ============================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  const top = window.scrollY;

  sections.forEach(sec => {
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  /* ============================== Sticky navbar ============================== */
  const header = document.querySelector('header');
  header.classList.toggle('sticky', top > 100);

  /* ============================== Auto close navbar on scroll (MOBILE ONLY) ============================== */
  if (window.innerWidth <= 768) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

/* ============================== Navbar active on click ============================== */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    // tutup navbar setelah klik (MOBILE ONLY)
    if (window.innerWidth <= 768) {
      navbar.classList.remove('active');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    }
  });
});

/* ============================== ScrollReveal ============================== */
/* Pastikan kamu sudah load library ini sebelum main.js:
   <script src="https://unpkg.com/scrollreveal"></script>
*/
if (typeof ScrollReveal !== 'undefined') {
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal(
    '.home-img, .services-container, .portofolio-box, .contact form',
    { origin: 'bottom' }
  );
  ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
}

/* ============================== Typed JS ============================== */
/* Pastikan kamu sudah load typed.js sebelum main.js:
   <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
*/
if (typeof Typed !== 'undefined') {
  new Typed('.multiple-text', {
    strings: ['Penetration Testing', 'Cyber Security', 'AI Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
  });
}