let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
   
    
    
  
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100);

};


var swiper = new Swiper(".mySwiper",{
    slidePerView:1,
    spaceBetween:50,
    loop: true ,
    grabCursor: true,
    pagination:{
        el:".swiper-pagination",
        clickeble : true,
    },
   autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      }
});
