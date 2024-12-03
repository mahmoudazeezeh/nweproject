let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};


/***************************************** */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(section => {
    const top = section.offsetTop;
    const offset = top - 150; // Adjust the offset value as needed
    const height = section.offsetHeight;
    const id = section.id;

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (window.scrollY >= offset && window.scrollY < offset + height) {
        const matchingLink = document.querySelector(`header nav a[href*="${id}"]`);
        matchingLink.classList.add('active');
      }
    });
  });
  let header=decument.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>100);
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};
/*************************************************** */

ScrollReveal({
     //reset: true ,
     distance:'80px',
     duration:2000,
     delay:200
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
    ScrollReveal().reveal('.home-img, .services-container,portfolio-box,.contac form', { origin: 'bottom'});
    ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left'});
    ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right'});

    const typed= new Typed('.multiple-text', {
        String:['Frontend Developer','YouTuber','Blogger'],
        typeSpeed:100,
        backSpeed:100,
        typeDelay:1000,
        loop:true
    });