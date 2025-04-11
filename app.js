const closeBtn = document.querySelector('.closebtn');
const openBtn = document.querySelector('.openbtn');
const mobileMenu = document.querySelector('.menuNav');
  
  
  
  
    openBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    
      closeBtn.addEventListener('click', () => {
     mobileMenu.classList.toggle('open');
   });
