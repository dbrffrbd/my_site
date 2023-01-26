//Бургер меню
const burgerMenu = document.querySelector('.header__burger-menu');
const navigationMenu = document.querySelector('.menu');
const header = document.querySelector('.header');
const iconBurgerMenu = document.querySelector('.burger-menu');
if (burgerMenu) {
  burgerMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('body_lock');
    burgerMenu.classList.toggle('header__burger-menu_active');
    navigationMenu.classList.toggle('menu_active');
    header.classList.toggle('header_active');
    iconBurgerMenu.classList.toggle('burger-menu_active');
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__item[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", clickOnMenuLink);
  });

  function clickOnMenuLink(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const block = document.querySelector(menuLink.dataset.goto);
      const valueBlock = block.getBoundingClientRect().top + window.pageYOffset;

      if (burgerMenu.classList.contains('header__burger-menu_active')) {
        document.body.classList.remove('body_lock');
        burgerMenu.classList.remove('header__burger-menu_active');
        navigationMenu.classList.remove('menu_active');
        header.classList.remove('header_active');
        iconBurgerMenu.classList.remove('burger-menu_active');
      }

      window.scrollTo({
        top: valueBlock,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

//Запуск видео при клике на картинку
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
$('.video__button').click(function (e) {
  e.preventDefault();

  player = new YT.Player('player', {
    playerVars: {
      'controls': 1,
      'showinfo': 0,
      'disablekb': 1,
      'rel': 0,
      'playsinline': 1,
    },
    videoId: 'lyh2kAjcmSY',
    events: {
      'onReady': onPlayerReady,
    }
  });
});

function onPlayerReady(event) {
  let video = event.target.h; //получение айфрейма с нужной id
  $(video).siblings('.video__image').addClass('removed');
  event.target.playVideo();
}

//Слайдер
var slider = tns({
  "container": ".reviews-cards",
  "items": 3,
  "slideBy": 1,
  "autoplay": false,
  "autoplayButtonOutput": false,
  "loop": true,
  "mouseDrag": true,
  "controls": true,
  "controlsPosition": "bottom",
  "navPosition": "bottom",
  "navPosition": "bottom",
  "gutter": 10,
  "controlsContainer": ".review-block__control",
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    500: {
      items: 1,
      nav: false,
    },
    840: {
      items: 2,
      nav: true,
    },
    1282: {
      items: 3,
      nav: true,
    }
  }
});


