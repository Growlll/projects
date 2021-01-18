const mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
      slidesPerGroup: 2,
    }
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.slider__arrow-left',
    nextEl: '.slider__arrow-right',
  },
})




