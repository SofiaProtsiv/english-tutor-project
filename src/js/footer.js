function handleScrollToSection(event) {
  if (event.target.dataset.section) {
    const sectionId = event.target.dataset.section;
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  }
}

const footerNav = document.querySelector("#FOOTER_MENU_NAV_JS");
footerNav.addEventListener("click", handleScrollToSection)