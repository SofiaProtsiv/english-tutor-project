import { localizeElements } from "./localization";
import translations from "../assets/translations";
const header = document.querySelector("#HEADER_JS");
const selectEl = document.querySelector("#CUSTOM_SELECT_JS");
const selectSmallEl = document.querySelector("#CUSTOM_SELECT_SMALL_JS");
const ITEMS = Object.keys(translations);
const state = { current: "" };

/* ======= menu button ======= */

const menuButton = document.querySelector("#HEADER_MENU_JS");
function handleMenuButton() {
  header.classList.toggle("ih-header-menu-open");
}

if (menuButton) {
  menuButton.removeEventListener("click", handleMenuButton);
  menuButton.addEventListener("click", handleMenuButton);
}

const menuNav = document.querySelector("#MENU_NAV_JS");

function handleMenuNavigation(event) {
  if (event.target.tagName === "A") {
    header.classList.remove("ih-header-menu-open");
  }
}

if (menuNav) {
  menuNav.removeEventListener("click", handleMenuNavigation);
  menuNav.addEventListener("click", handleMenuNavigation);
}

/* ======= menu navigation  ======= */

const menuNavigation = document.querySelector("#MENU_NAV_JS");

const createNavigationMarkup = () => {
  return ` <li class="ih-menu-item" data-section="about-me" data-lang="header.menu.about_me" type="button">
            ПРО МЕНЕ
          </li>
          <li class="ih-menu-item" data-section="quote" data-lang="header.menu.quote" type="button">
            ВАРТІСТЬ
          </li>
          <li class="ih-menu-item" data-section="reviews"
          data-lang="header.menu.reviews" type="button">
            ВІДГУКИ
          </li>
          <li class="ih-menu-item" data-section="contacts" data-lang="header.menu.contacts" type="button">
            КОНТАКТИ
          </li>`;
};

const renderNavigationMarkup = () => {
  if (menuNavigation) {
    menuNavigation.innerHTML = createNavigationMarkup();
  }
};

renderNavigationMarkup();

/* ======= smooth scroll  ======= */
function handleScrollToSection(event) {
  if (event.target.dataset.section) {
    const sectionId = event.target.dataset.section;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        block: "start",
        inline: "nearest",
      });
      header.classList.remove("ih-header-menu-open");
    }
  }
}

if (menuNavigation) {
  menuNavigation.removeEventListener("click", handleScrollToSection);
  menuNavigation.addEventListener("click", handleScrollToSection);
}

/* ======= select language ======= */

function createCustomSelectOption(code, order) {
  return `
    <div data-value="${code}" class="ih-custom-select-option" style="
    ${state.current === code ? "background:transparent; " : ""}order:${
    state.current === code ? 0 : order
  }">${code}</div>
`;
}

function createCustomSelect() {
  return `
   <svg class="ih-custom-select-icon">
            <use href="/images/ih-icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${ITEMS.map((code, index) => {
      return createCustomSelectOption(code, index + 1);
    }).join("")}

`;
}

function createCustomSelectSmall() {
  return `
        ${ITEMS.map((code) => {
          return `<div data-value="${code}" class="ih-select-lang-btn${
            state.current === code ? " select-lang-btn-active" : ""
          }">${code}</div>`;
        }).join(`<svg class="ih-vertical-line">
           <use href="/images/ih-icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`;
}

function handleCustomSelect(e) {
  if (selectEl) {
    selectEl.classList.toggle("ih-custom-select-open");
    const newCurrentLang = e.target.dataset.value;
    if (newCurrentLang && newCurrentLang !== state.current) {
      state.current = newCurrentLang;
      localStorage.setItem("lang", newCurrentLang);
      localizeElements(newCurrentLang);
      selectEl.innerHTML = createCustomSelect();
    }
  }
}

function renderCustomSelect() {
  if (selectEl) {
    selectEl.innerHTML = createCustomSelect();
    selectEl.removeEventListener("click", handleCustomSelect);
    selectEl.addEventListener("click", handleCustomSelect);
  }
}

function handleCustomSelectSmall(e) {
  if (selectSmallEl) {
    const newCurrentLang = e.target.dataset.value;
    if (newCurrentLang && newCurrentLang !== state.current) {
      state.current = newCurrentLang;
      localStorage.setItem("lang", newCurrentLang);
      localizeElements(newCurrentLang);
      selectSmallEl.innerHTML = createCustomSelectSmall();
    }
  }
}

function renderCustomSelectSmall() {
  if (selectSmallEl) {
    selectSmallEl.innerHTML = createCustomSelectSmall();
    selectSmallEl.removeEventListener("click", handleCustomSelectSmall);
    selectSmallEl.addEventListener("click", handleCustomSelectSmall);
  }
}

renderCustomSelectSmall();
renderCustomSelect();

/* ======= menu social ======= */

const menuSocial = document.querySelector("#MENU_SOCIAL_JS");

const createMenuSocialMarkup = () => {
  return `  <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://t.me/@alyona_alyona"
       >
         TELEGRAM
       </a>
       <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.instagram.com/lolaserenity?igsh=MWxpdGRwM2R2M3Rxcg=="
       >
         INSTAGRAM
       </a>
       <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.facebook.com/alyona.stulina"
       >
         FACEBOOK
       </a>`;
};

const renderMenuSocialMarkup = () => {
  if (menuSocial) {
    menuSocial.insertAdjacentHTML("beforeend", createMenuSocialMarkup());
  }
};

renderMenuSocialMarkup();

/* ======= set geolocation language ======= */

function updateLangSelect(code) {
  localStorage.setItem("lang", code);
  state.current = code;
  localizeElements(code);
  console.log(code);
  renderCustomSelect();
  renderCustomSelectSmall();
}

const setGeolocationLanguage = () => {
  const storedLang = localStorage.getItem("lang");

  if (storedLang) {
    updateLangSelect(storedLang);
    return;
  }

  if (!storedLang && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      var geocodingUrl =
        "https://nominatim.openstreetmap.org/reverse?format=json&lat=" +
        latitude +
        "&lon=" +
        longitude;
      fetch(geocodingUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.address) {
            const code = data.address.country_code;
            if (ITEMS.includes(code)) {
              updateLangSelect(code);
              return;
            }
            updateLangSelect("en");
          }
        })
        .catch((error) => {
          console.error("Error fetching geolocation data:", error);
        });
    });
  }
  return;
};

setGeolocationLanguage();
