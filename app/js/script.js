const burgerMenu = document.querySelector('#burger__menu');
const header = document.querySelector('.header');

const overlay = document.querySelector('.overlay')

burgerMenu.addEventListener('click', function(){
   if (header.classList.contains('open')) {
      header.classList.remove('open');
      overlay.classList.remove('fade-in');
      overlay.classList.add('fade-out');
      
   } else {
      header.classList.add('open');
      overlay.classList.remove('fade-out');
      overlay.classList.add('fade-in');
      }
});