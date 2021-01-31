const burgerMenu = document.querySelector('#burger__menu');
const header = document.querySelector('.header');

const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact');
const blog = document.querySelector('.blog');
const career = document.querySelector('.career');



const toggle = () => {
   if (header.classList.contains('open')) {
      body.classList.remove('no-scroll');
      header.classList.remove('open');
      overlay.classList.remove('fade-in');
      overlay.classList.add('fade-out');
      menu.classList.remove('fade-in');
      menu.classList.add('fade-out');
      
   } else {
      header.classList.add('open');
      body.classList.add('no-scroll');
      overlay.classList.remove('fade-out');
      overlay.classList.add('fade-in');
      menu.classList.remove('fade-out');
      menu.classList.add('fade-in');
   }
   return toggle;
};

burgerMenu.addEventListener('click', toggle());

home.addEventListener('click', toggle())
about.addEventListener('click', toggle())
contact.addEventListener('click', toggle())
blog.addEventListener('click', toggle())
career.addEventListener('click', toggle())


