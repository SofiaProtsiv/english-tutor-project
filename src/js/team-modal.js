import teamList from "../assets/team-list/team-list";
import icon from "../assets/team-list/icon.json";
import { localizeElements } from "./localization";

const teamModalButtonOpen = document.querySelector(".ih-footer-team-button");
const teamModalButtonClose = document.querySelector(".team-modal-button");
const teamModalWindow = document.querySelector(".team-modal-backdrop");
const teamModalList = document.querySelector(".team-modal-list");
const teamModalContainer = document.querySelector(".team-modal-container");

teamModalButtonOpen.addEventListener("click", openTeamModalHandler);

function openTeamModalHandler() {
  teamModalWindow.classList.add("is-open");
  document.body.classList.add("is-hidden");
  onWindowResize();
  teamModalButtonOpen.removeEventListener("click", openTeamModalHandler);
  teamModalButtonClose.addEventListener("click", closeTeamModalHandler);
  teamModalWindow.addEventListener("click", closeTeamModalHandler);
  document.addEventListener("keydown", closeTeamModalHandler);
  window.addEventListener("resize", onWindowResize);
}

function closeTeamModalHandler(e) {
  if (
    e.currentTarget === e.target ||
    e.key === "Escape" ||
    e.target.nodeName === "svg" ||
    e.target.nodeName === "path"
  ) {
    teamModalWindow.classList.remove("is-open");
    document.body.classList.remove("is-hidden");
    teamModalButtonOpen.addEventListener("click", openTeamModalHandler);
    teamModalButtonClose.removeEventListener("click", closeTeamModalHandler);
    teamModalWindow.removeEventListener("click", closeTeamModalHandler);
    document.removeEventListener("keydown", closeTeamModalHandler);
    window.removeEventListener("resize", onWindowResize);
  }
}

function teamModalItemMarkup(
  {
    linkedIn,
    devName,
    position,
    description,
    key,
    pathToPhotoPNG,
    pathToPhotoWebP,
  },
  icon
) {
  return `<li class="team-modal-item">
          <a class="team-modal-link" target="_blank" href=${linkedIn}>
          <picture><source srcset=${pathToPhotoWebP} type="image/webp"/><img class="team-modal-img" loading="lazy" src=${pathToPhotoPNG} width="320" height="320" alt=${description} type="image/png"/></picture>
          ${icon}</a>
    
        <p class="team-modal-name" data-lang="teamModal.${key}">
          ${devName}<span>${position}</span>
        </p>
      </li>`;
}

function teamModalListMarkup(team, icon) {
  return team
    .map(
      (
        item = {
          linkedIn,
          devName,
          position,
          pathToPhotoPNG,
          pathToPhotoWebP,
          description,
          key,
        }
      ) => teamModalItemMarkup(item, icon)
    )
    .join(" ");
}

teamModalList.innerHTML = teamModalListMarkup(teamList, icon);
const currentPageLang = localStorage.getItem("lang");
localizeElements(currentPageLang);

function onWindowResize() {
  if (
    (window.innerWidth < 768 && window.innerHeight < 500) ||
    (window.innerWidth >= 768 &&
      window.innerWidth < 1440 &&
      window.innerHeight < 550) ||
    (window.innerWidth >= 1440 && window.innerHeight < 600)
  ) {
    teamModalContainer.classList.add("team-modal-container-full-screen");
  } else {
    teamModalContainer.classList.remove("team-modal-container-full-screen");
  }
}
