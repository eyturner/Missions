//If first load, load the main view. Load any lists from local Storage.
//Displays Astronaut background with "Click a list to get started!" viewController
//should then which list is shown in the "content" div based on what the user clicks.

import {
  renderMissionView,
  clearMissionView,
  removeMission,
} from "./renderMissionView.js";

import { deleteMissionModal, removeModal } from "./Modal.js";

let firstLoad = true;

const addMission = (mission) => {
  let missionName = mission.title;
  let missionID = mission.id;
  let sidebarMissionDiv = document.getElementById("sidebarMissionDiv");

  console.log("Adding Mission", missionName, missionID);

  let sidebarMission = document.createElement("div");
  sidebarMission.classList.add("sidebarMission");
  sidebarMission.id = missionID;

  let sidebarMissionTitle = document.createElement("div");
  sidebarMissionTitle.classList.add("sidebarMissionTitle");
  sidebarMissionTitle.innerHTML = missionName;

  let sidebarCloseBtn = document.createElement("div");
  sidebarCloseBtn.classList.add("sidebarCloseBtn");
  sidebarCloseBtn.innerHTML = "&times;";
  sidebarCloseBtn.addEventListener("click", () => {
    deleteMissionModal();
    let deleteButton = document.querySelector(".deleteBtn");
    deleteButton.addEventListener("click", () => {
      removeMissionFromSidebar(sidebarMissionDiv, sidebarMission);
      removeMission(sidebarMission);
      clearMissionView();
      loadLandingPage();
    });
  });

  sidebarMission.appendChild(sidebarMissionTitle);
  sidebarMission.appendChild(sidebarCloseBtn);

  sidebarMissionDiv.appendChild(sidebarMission);

  sidebarMissionTitle.addEventListener("click", () => {
    switchSelected(sidebarMission);
    renderMissionView(mission);
  });
  if (!firstLoad) {
    switchSelected(sidebarMission);
  }
  return sidebarMission;
};

const switchSelected = (newSelected) => {
  let sidebarMissions = document.querySelectorAll(".sidebarMission");
  sidebarMissions.forEach((sidebarMission) => {
    if (sidebarMission.classList.contains("selected")) {
      if (sidebarMission != newSelected) {
        sidebarMission.classList.toggle("selected");
        return;
      }
    } else if (sidebarMission == newSelected) {
      sidebarMission.classList.toggle("selected");
    }
  });
};

const removeMissionFromSidebar = (sidebarMissionDiv, sidebarMission) => {
  sidebarMissionDiv.removeChild(sidebarMission);
};

const loadSidebar = (allMissions) => {
  for (let i = 0; i < allMissions.length; i++) {
    addMission(allMissions[i]);
  }
};

const loadLandingPage = () => {
  let landingDiv = document.getElementById("landingDiv");
  if (!landingDiv) {
    let landingDiv = document.createElement("div");
    landingDiv.id = "landingDiv";

    let landingImg = document.createElement("img");
    landingImg.id = "landingImage";
    landingImg.src = "images/astronaut.png";

    let landingHeader = document.createElement("h2");
    landingHeader.id = "landingHeader";
    landingHeader.innerHTML = "Choose or Add a Mission to Get Started!";

    landingDiv.appendChild(landingImg);
    landingDiv.appendChild(landingHeader);

    let content = document.getElementById("content");
    content.appendChild(landingDiv);
  } else {
    landingDiv.style.display = "flex";
  }
};

const renderMainView = (allMissions) => {
  loadSidebar(allMissions);
  loadLandingPage();
  firstLoad = false;
};

export { renderMainView, addMission };
