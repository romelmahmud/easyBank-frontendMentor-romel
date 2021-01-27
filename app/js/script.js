const burgerMenu = document.querySelector('#burger__menu');
const header = document.querySelector('.header');

const overlay = document.querySelector('.overlay')
const menu = document.querySelector('.header__menu')

burgerMenu.addEventListener('click', function(){
   if (header.classList.contains('open')) {
      header.classList.remove('open');
      overlay.classList.remove('fade-in');
      overlay.classList.add('fade-out');
      menu.classList.remove('fade-in');
      menu.classList.add('fade-out');
      
   } else {
      header.classList.add('open');
      overlay.classList.remove('fade-out');
      overlay.classList.add('fade-in');
      menu.classList.remove('fade-out');
      menu.classList.add('fade-in');
      }
});