const menuButton = document.querySelector("#HEADER_MENU_JS");
const header = document.querySelector("#HEADER_JS");
const menuNav = document.querySelector("#MENU_NAV_JS");

if (menuButton) {
  menuButton.onclick = () => {
    header.classList.toggle("header-menu-open");
  };
}

if (menuNav) {
  menuNav.onclick = (event) => {
    if (event.target.tagName === "A") {
      header.classList.remove("header-menu-open");
    }
  };
}
