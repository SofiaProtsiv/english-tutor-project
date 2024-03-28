import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import locales from "../assets/translations";
import { getValueByPath } from "./localization";

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

const handleClickResizeBtn = (event, review, langKey, size) => {
  const dataLang = event.target.dataset.lang;
  const lang = localStorage.getItem("lang") ?? "ua";
  const text = getValueByPath(locales[lang], langKey);

  if (dataLang === "reviews.moreBtn") {
    event.target.dataset.lang = "reviews.lessBtn";
    event.target.textContent = locales[lang].reviews.lessBtn;
    review.textContent = text;
  } else {
    event.target.dataset.lang = "reviews.moreBtn";
    event.target.textContent = locales[lang].reviews.moreBtn;
    review.textContent = `${text.slice(0, size)}...`;
  }
};

function resizeReviewText(isComputer, lang, size) {
  const reviewsSlides = document.querySelectorAll(".reviews-text-swiper-slide");

  reviewsSlides.forEach((slide) => {
    const review = slide.querySelector(".reviews-text");
    const langKey = review.getAttribute("data-lang");
    const text = getValueByPath(locales[lang], langKey);
    const btnMore = slide.querySelector(".resize-btn");

    if (isComputer) {
      review.textContent = text;
      if (btnMore) {
        btnMore.removeEventListener("click", (event) =>
          handleClickResizeBtn(event, review, langKey, size)
        );
        btnMore.remove();
      }
      return;
    }

    if (btnMore && btnMore.dataset.lang === "reviews.lessBtn") {
      return;
    }

    if (text.length > size) {
      review.textContent = `${text.slice(0, size)}...`;

      if (!btnMore) {
        const btn = document.createElement("button");
        btn.classList.add("resize-btn");
        btn.setAttribute("type", "button");
        btn.setAttribute("data-lang", "reviews.moreBtn");
        btn.textContent = locales[lang].reviews.moreBtn;

        btn.addEventListener("click", (event) =>
          handleClickResizeBtn(event, review, langKey, size)
        );

        slide.insertAdjacentElement("beforeend", btn);
      }
    } else {
      if (btnMore) {
        btnMore.removeEventListener("click", (event) =>
          handleClickResizeBtn(event, review, langKey, size)
        );
        btnMore.remove();
        review.textContent = text;
      }
    }
  });
}

export const handleResize = () => {
  const mediaQueryMobile = window.matchMedia("(max-width: 767.98px)");
  const mediaQueryTablet = window.matchMedia("(max-width: 1439.98px)");
  const lang = localStorage.getItem("lang") ?? "ua";

  if (mediaQueryMobile.matches) {
    resizeReviewText(false, lang, 400);
  } else if (mediaQueryTablet.matches) {
    resizeReviewText(false, lang, 500);
  } else {
    resizeReviewText(true, lang);
  }
};

handleResize();
window.addEventListener("resize", handleResize);
