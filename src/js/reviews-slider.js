// import Swiper from "swiper/bundle";
// import "swiper/css/bundle";

const revImgSwiper = document.querySelector(".reviews-img-swiper");
const revTextSwiper = document.querySelector(".reviews-text-swiper");

const revSwiperImg = new Swiper(revImgSwiper, {
  loop: true,
  speed: 1500,
  spaceBetween: 10,
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
});

const revSwiperText = new Swiper(revTextSwiper, {
  loop: true,
  speed: 1500,
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
  navigation: {
    nextEl: ".reviews-button-next",
    prevEl: ".reviews-button-prev",
  },
});

revSwiperImg.controller.control = revSwiperText;
revSwiperText.controller.control = revSwiperImg;
