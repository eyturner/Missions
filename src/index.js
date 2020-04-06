import { renderMissionModal, removeModal } from "./Modal.js";

import { renderMainView, addMission } from "./viewController.js";

import { renderMissionView, setCurrentMission } from "./renderMissionView.js";

import { Mission } from "./Mission.js";

import { updateLocalStorage } from "./localStorage.js";

import { getAllMissions } from "./renderMissionView.js";

let allMissions = getAllMissions();
let missionID = allMissions.length;

renderMainView(allMissions);

const submitNewMission = () => {
  let newMissionForm = document.querySelector(".newMissionForm");
  let newMissionTitle = newMissionForm.elements[0].value;
  let newMissionDescription = newMissionForm.elements[1].value;

  let newMission = new Mission(
    newMissionTitle,
    missionID++,
    newMissionDescription
  );
  allMissions.push(newMission);
  updateLocalStorage(allMissions);
  addMission(newMission);
  return newMission;
};

const RenderNewMissionView = () => {
  let newMission = submitNewMission();
  removeModal();
  renderMissionView(newMission);
  setCurrentMission(newMission);
};

let addMissionBtn = document.getElementById("addMissionBtn");
addMissionBtn.onclick = function () {
  let missionModal = renderMissionModal();

  let submitBtn = document.querySelector(".submitBtn");
  submitBtn.addEventListener("click", () => {
    RenderNewMissionView();
  });

  missionModal.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      RenderNewMissionView();
    }
  });
};
