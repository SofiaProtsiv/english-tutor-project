import teamList from "../assets/team-list/team-list";
import icon from "../assets/team-list/icon.json";
import { localizeElements } from "./localization";

const teamModalButtonOpen = document.querySelector(".ih-footer-team-button");
const teamModalButtonClose = document.querySelector(".team-modal-button");
const teamModalWindow = document.querySelector(".team-modal-backdrop");
const teamModalList = document.querySelector(".team-modal-list");

teamModalButtonOpen.addEventListener("click", openTeamModalHandler);

function openTeamModalHandler() {
  teamModalWindow.classList.add("is-open");
  document.body.classList.add("is-hidden");
  teamModalButtonOpen.removeEventListener("click", openTeamModalHandler);
  teamModalButtonClose.addEventListener("click", closeTeamModalHandler);
  teamModalWindow.addEventListener("click", closeTeamModalHandler);
  document.addEventListener("keydown", closeTeamModalHandler);
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
  }
}

function teamModalItemMarkup(
  { linkedIn, devName, position, description, key, pathToPhoto },
  icon
) {
  return `<li class="team-modal-item">
       
          <a class="team-modal-link" target="_blank" href=${linkedIn}>
          <img class="team-modal-img" src=${pathToPhoto} width="40" height="40" alt=${description}>
          ${icon}</a>
    
        <p class="team-modal-name" data-lang="teamModal.${key}">
          ${devName}<span>${position}</span>
        </p>
      </li>`;
}

function teamModalListMarkup(team, icon) {
  return team
    .map(
      (item = { linkedIn, devName, position, pathToPhoto, description, key }) =>
        teamModalItemMarkup(item, icon)
    )
    .join(" ");
}

teamModalList.innerHTML = teamModalListMarkup(teamList, icon);
const currentPageLang = localStorage.getItem("lang");
localizeElements(currentPageLang);
