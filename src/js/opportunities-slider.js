// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

const imgSwiper = new Swiper(".opp-img-swiper", {
  loop: true,
  speed: 1800,
  slidesPerView: 1,
  centeredSlides: true,
  initialSlide: 0,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      centeredSlides: false,
      spaceBetween: 32,
    },
    1440: {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 0,
    },
  },
  on: {
    init: function () {
      setTimeout(() => {
        document
          .querySelectorAll(".opp-img-wrapper")
          .forEach((item) => item.classList.add("img-swiper-transition"));
      }, 1800);
    },
  },
});

const textSwiper = new Swiper(".opp-text-swiper", {
  navigation: { prevEl: ".opp-button-prev", nextEl: ".opp-button-next" },
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

imgSwiper.controller.control = textSwiper;
textSwiper.controller.control = imgSwiper;
