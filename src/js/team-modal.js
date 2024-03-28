import { teamList, icon } from "../assets/teamList/teamList";
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

function teamModalItemMarkup({ link, name, position }, icon) {
  return `<li class="team-modal-item">
        <div class="team-modal-img-wrapper">
          <a class="team-modal-link" target="_blank" href=${link}>${icon}</a>
        </div>
        <p class="team-modal-name">
          ${name}<span>${position}</span>
        </p>
      </li>`;
}

function teamModalListMarkup(team, icon) {
  return team
    .map(({ linkedIn, name, position }) =>
      teamModalItemMarkup({ linkedIn, name, position }, icon)
    )
    .join(" ");
}

teamModalList.innerHTML = teamModalListMarkup(teamList, icon);
