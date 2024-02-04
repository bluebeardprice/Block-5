window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  resizableSwiper("(max-width: 767px)", ".slider-1", {
    loop: false,
    spaceBetween: 16,
    slidesPerView: 1.2,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      360: {
        slidesPerView: 1.3,
      },
      400: {
         slidesPerView: 1.5 
        },
      440:{ slidesPerView: 1.7,},
      480:{ slidesPerView: 1.8,},
      570: { slidesPerView: 2 },
      650:{ slidesPerView: 2.3,},
      700:{ slidesPerView: 2.8,}
    },
  });
});
