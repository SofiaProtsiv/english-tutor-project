// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

const oppTextSwiper = new Swiper(".opp-text-swiper", {
  allowTouchMove: false,
  loop: true,
  speed: 1800,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 20,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, "260px", 0],
      opacity: 0,
    },
    next: {
      translate: ["384px", 0, 0],
      opacity: 0,
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

const oppImgSwiper = new Swiper(".opp-img-swiper", {
  navigation: { prevEl: ".opp-button-prev", nextEl: ".opp-button-next" },
  loop: true,
  speed: 1800,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 20,
  breakpoints: {
    704: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      document
        .querySelectorAll(".opp-img-wrapper")
        .forEach((item) => item.classList.add("img-swiper-transition"));
    },
    slideChange: function () {
      oppTextSwiper.slideToLoop(this.realIndex, 1800);
    },
  },
});
