const burgerMenu = document.querySelector('#burger__menu');

burgerMenu.addEventListener('click', function(){
   if (burgerMenu.classList.contains('open')) {
      burgerMenu.classList.remove('open');
   } else { burgerMenu.classList.add('open'); }
});