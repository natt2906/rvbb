/********************************/
/* 1) Initialisation du menu burger */
/********************************/
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/********************************/
/* 2) Swiper (Slider Réalisations) */
/********************************/
const swiper = new Swiper('.swiper-container', {
    loop: true,
    // Par défaut, on affiche 1 slide
    slidesPerView: 1,
    spaceBetween: 0,
  
    // Configuration responsive
    breakpoints: {
      768: {
        // À partir de 768px, on passe à 2 slides
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        // À partir de 1024px, on passe à 3 slides
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

/********************************/
/* 3) AOS (Animations On Scroll) */
/********************************/
AOS.init({
    duration: 800,
    offset: 100, // essayez 0, 50, 100, etc.
    once: true   // l’animation ne se déclenche qu’une seule fois
  });

/********************************/
/* 4) GSAP (exemple d'animation) */
/********************************/
// On fait apparaître le titre du hero avec un léger décalage
gsap.from('.hero-title', {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

/********************************/
/* 5) Formulaire : envoi et reset */
/********************************/
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Votre message a bien été envoyé !');
    contactForm.reset();
  });
}
