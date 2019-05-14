    var navMain = document.querySelector('.main-nav');
    var navToggle = document.querySelector('.main-nav__toggle');
    var navMenu = document.querySelector('.page-header__top');

    navMain.classList.remove('main-nav--nojs');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
        navMenu.classList.remove('page-header__top-close');
        navMenu.classList.add('page-header__top-open');
      } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
        navMenu.classList.remove('page-header__top-open');
        navMenu.classList.add('page-header__top-close');
      }
    });
