import { renderMissionModal, removeModal } from "./Modal.js";

import { renderMainView, addMission } from "./viewController.js";

import {
  renderMissionView,
  setCurrentMission,
  getAllMissions,
} from "./renderMissionView.js";

import { testMission, testMissionTwo } from "./testMission.js";

import { Mission } from "./Mission.js";

let allMissions = getAllMissions();
allMissions.push(testMission);
allMissions.push(testMissionTwo);
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
  addMission(newMission);
  return newMission;
};

// const getMissionByID = (id) => {
//   for (let i = 0; i < allMissions.length; ++i) {
//     if (allMissions[i].getID() == id) {
//       return allMissions[i];
//     }
//   }
// };

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
