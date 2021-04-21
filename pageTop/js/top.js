// Открытие и закрытие блока
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});

// пропажа бургер меню при клике на элемент
$(document).ready(function () {
   $('.header__link').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
});