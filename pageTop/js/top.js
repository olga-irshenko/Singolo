const swiper = new Swiper('.swiper-container', {
   autoplay: true,
   autoplayTimeout: 3400,
   speed: 500,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   loop: true,


   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },


});
