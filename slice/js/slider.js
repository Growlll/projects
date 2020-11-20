window.onload = function () {
    main.init();
}

const main = {
    init() {
        main.slider();
    },
    slider: function () {
        var mySwiper = new Swiper('.main-slider', {
            loop: true,
            speed: 600,
            slidesPerView: 1,
            observer: true,
            observeParents: true,
            allowTouchMove: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
        });
        let sliderImg = new Swiper ('.slider-img', {
          loop: true,
          effect: 'fade',
          speed: 1000,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.button-next-corner',
            prevEl: '.button-prev-corner',
          }
        });
        var sliderImage = new Swiper('.slider-image', {
            loop: true,
            speed: 300,
            observer: true,
            effect: 'fade',
            observeParents: true,
            allowTouchMove: false,
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            }
        });
        let slider = new Swiper('.js-slider', {
            speed: 1000,
            spaceBetween: 40,

            loop: true,
            observer: true,
            observeParents: true,
            navigation: {
                nextEl: '.opened__nav--next',
                prevEl: '.opened__nav--prev',
            },
         breakpoints: {
            320: {slidesPerView: 1, pagination: {clickable: !0}},
            992: {slidesPerView: 2, spaceBetween: 48}
        }

        });


        let item = $(".menu__item");
        let button = $(".js-slider-button")
        let box = $(".output__wrap");
        let first = $(".js-first-item");

        document.querySelector('.sandwich').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(1, 0);
            sliderImage.slideTo(1, 0);
        });
        document.querySelector('.salad').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(2, 0);
            sliderImage.slideTo(2, 0);
        });
        document.querySelector('.soup').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(3, 0);
            sliderImage.slideTo(3, 0);
        });
        document.querySelector('.hot').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(4, 0);
            sliderImage.slideTo(4, 0);
        });
        document.querySelector('.dessert').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(5, 0);
            sliderImage.slideTo(5, 0);
        });
        document.querySelector('.fruit').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(6, 0);
            sliderImage.slideTo(6, 0);
        });
        document.querySelector('.cup').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(7, 0);
            sliderImage.slideTo(7, 0);
        });
        document.querySelector('.drinks').addEventListener('click', function (e) {
            e.preventDefault();
            mySwiper.slideTo(8, 0);
            sliderImage.slideTo(8, 0);
        });
        first.addClass("active-item");


        button.on("click", function () {
            if ($(".slider-sandwich").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".sandwich").addClass("menu__item--active");
            }
            if ($(".slider-salad").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".salad").addClass("menu__item--active");

            }
            if ($(".slider-soup").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".soup").addClass("menu__item--active");
            }
            if ($(".slider-hot").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".hot").addClass("menu__item--active");
            }
            if ($(".slider-dessert").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".dessert").addClass("menu__item--active");
            }
            if ($(".slider-fruit").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".fruit").addClass("menu__item--active");
            }
            if ($(".slider-cup").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".cup").addClass("menu__item--active");
            }
            if ($(".slider-drink").hasClass("swiper-slide-active")) {
                item.removeClass("menu__item--active");
                $(".drinks").addClass("menu__item--active");
            }

        })
    }
}
