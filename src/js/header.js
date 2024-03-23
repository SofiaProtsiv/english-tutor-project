const header = document.querySelector("#HEADER_JS");

const renderHeaderMarkup = () => {
  header.innerHTML = `
 <div class="header-container container">
   <a
     href="./index.html"
     target="_self"
     class="logo"
     aria-label="link on main page"
   >
     <svg class="icon-logo">
       <use href="../images/icons-sprite.svg#icon-logo"></use>
     </svg>
   </a>
   <button
     id="HEADER_MENU_JS"
     class="menu-button"
     title="open menu"
     type="button"
   >
     <svg class="icon-menu">
       <use href="../images/icons-sprite.svg#icon-menu"></use>
     </svg>
     <svg class="icon-menu-close">
       <use href="../images/icons-sprite.svg#icon-menu-close"></use>
     </svg>
   </button>
   <section class="menu-container">
     <div class="menu-content">
       <nav id="MENU_NAV_JS" class="menu-nav">
       </nav>
        <div class="custom-select-small" id="CUSTOM_SELECT_SMALL_JS"></div>
       <div class="custom-select" id="CUSTOM_SELECT_JS">
       </div>
     </div>
     <nav class="menu-social">
       <svg class="icon-horisontal-line">
         <use href="../images/icons-sprite.svg#icon-horisontal-line"></use>
       </svg>
       <a
         class="menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://t.me/@alyona_alyona"
       >
         TELEGRAM
       </a>
       <a
         class="menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.instagram.com/lolaserenity?igsh=MWxpdGRwM2R2M3Rxcg=="
       >
         INSTAGRAM
       </a>
       <a
         class="menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.facebook.com/alyona.stulina"
       >
         FACEBOOK
       </a>
     </nav>
   </section>
 </div>
  `;
};

if (header) {
  renderHeaderMarkup();
}

/* ======= menu button ======= */

const menuButton = document.querySelector("#HEADER_MENU_JS");

if (menuButton) {
  menuButton.onclick = () => {
    header.classList.toggle("header-menu-open");
  };
}

const menuNav = document.querySelector("#MENU_NAV_JS");

if (menuNav) {
  menuNav.onclick = (event) => {
    if (event.target.tagName === "A") {
      header.classList.remove("header-menu-open");
    }
  };
}

/* ======= menu navigation  ======= */
const menuNavigation = document.querySelector("#MENU_NAV_JS");

const createNavMarkup = () => {
  return ` <a class="menu-item" href="#about-me">
            ПРО МЕНЕ
          </a>
          <a class="menu-item" href="#quote">
            ВАРТІСТЬ
          </a>
          <a class="menu-item" htef="#rewiews">
            ВІДГУКИ
          </a>
          <a class="menu-item" href="#">
            КОНТАКТИ
          </a>`;
};

const renderNavMarkup = () => {
  if (menuNavigation) {
    menuNavigation.innerHTML = createNavMarkup();
  }
};

renderNavMarkup();
/* ======= select ======= */

const selectEl = document.querySelector("#CUSTOM_SELECT_JS");
const selectSmallEl = document.querySelector("#CUSTOM_SELECT_SMALL_JS");
const ITEMS = ["en", "ua"];
const state = { current: ITEMS[0] };

const createCustomSelectOption = (code, order) => {
  return `
    <div data-value="${code}" class="custom-select-option" style="
    ${state.current === code ? "background:transparent; " : ""}order:${
    state.current === code ? 0 : order
  }">${code}</div>
`;
};

const createCustomSelect = () => {
  return `
   <svg class="custom-select-icon">
            <use href="../images/icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${ITEMS.map((code, index) => {
      return createCustomSelectOption(code, index + 1);
    }).join("")}

`;
};

const createCustomSelectSmall = () => {
  return `
        ${ITEMS.map((code) => {
          return `<div data-value="${code}" class="select-lang-btn${
            state.current === code ? " select-lang-btn-active" : ""
          }">${code}</div>`;
        }).join(`<svg class="vertical-line">
           <use href="../images/icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`;
};

const renderCustomSelect = () => {
  if (selectEl) {
    selectEl.innerHTML = createCustomSelect();
    selectEl.onclick = (e) => {
      selectEl.classList.toggle("custom-select-open");
      const newCurrentLang = e.target.dataset.value;
      if (newCurrentLang && newCurrentLang !== state.current) {
        state.current = newCurrentLang;
        selectEl.innerHTML = createCustomSelect();
      }
    };
  }
};

const renderCustomSelectSmall = () => {
  if (selectSmallEl) {
    selectSmallEl.innerHTML = createCustomSelectSmall();
    selectSmallEl.onclick = (e) => {
      const newCurrentLang = e.target.dataset.value;
      if (newCurrentLang && newCurrentLang !== state.current) {
        state.current = newCurrentLang;
        selectSmallEl.innerHTML = createCustomSelectSmall();
      }
    };
  }
};

renderCustomSelectSmall();
renderCustomSelect();
