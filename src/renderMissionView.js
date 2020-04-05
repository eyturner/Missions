import { renderTaskSetModal, removeModal, editTaskSetModal, deleteTaskSetModal } from "./Modal.js";
import { TaskSet } from "./TaskSet.js";
import { Task } from "./Task.js";

let missionDiv = document.querySelector(".mission");
let currentMission = null;
let allMissions = [];

const getAllMissions = () => {
  return allMissions;
};

const submitEditModal = (taskSet) => {
  let newTitle = document.getElementById("titleInput").value;
  let newNote = document.getElementById("noteInput").value;
  taskSet.setTitle(newTitle);
  taskSet.setNote(newNote);
  removeModal();
  renderMissionView(currentMission);
};
const removeMission = (toRemove) => {
  for (let i = 0; i < allMissions.length; i++) {
    if (allMissions[i].id == toRemove.id) {
      allMissions.splice(i, 1);
    }
  }
};

const hideLandingPage = () => {
  let landingDiv = document.getElementById("landingDiv");
  landingDiv.style.display = "none";
};

const setCurrentMission = (mission) => {
  currentMission = mission;
};

const setMissionID = (id) => {
  missionDiv.id = id;
};

const submitNewTaskSet = (mission) => {
  let newTaskSetForm = document.querySelector(".newTaskSetForm");
  let newTaskSetTitle = newTaskSetForm.elements[0].value;
  let newTaskSetNote = newTaskSetForm.elements[1].value;

  let newTaskSet = new TaskSet(
    newTaskSetTitle,
    mission.getTaskSets().length,
    newTaskSetNote
  );

  mission.addTaskSet(newTaskSet);

  return newTaskSet;
};

const addTitle = (title) => {
  let missionHeaderDiv = document.createElement("div");
  missionHeaderDiv.id = "missionHeaderDiv";

  let missionTitleH1 = document.createElement("h1");
  missionTitleH1.id = "missionTitle";
  missionTitleH1.innerHTML = title;

  let addTaskSetBtn = document.createElement("h3");
  addTaskSetBtn.innerHTML = "+";
  addTaskSetBtn.id = "addTaskSetBtn";
  addTaskSetBtn.addEventListener("click", () => {
    let taskSetModal = renderTaskSetModal();

    let submitBtn = document.querySelector(".submitBtn");
    submitBtn.onclick = function () {
      submitNewTaskSet(currentMission);
      removeModal();
      renderMissionView(currentMission);
    };

    taskSetModal.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        e.preventDefault();
        submitNewTaskSet(currentMission);
        removeModal();
        renderMissionView(currentMission);
      }
    });
  });

  missionHeaderDiv.appendChild(missionTitleH1);
  missionHeaderDiv.appendChild(addTaskSetBtn);

  missionDiv.appendChild(missionHeaderDiv);
};

const addDescription = (description) => {
  let missionDescriptionP = document.createElement("p");
  missionDescriptionP.innerHTML = description;
  missionDiv.appendChild(missionDescriptionP);
};

const addTask = (task, taskSet) => {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  let checkButton = document.createElement("input");
  checkButton.type = "checkbox";
  checkButton.addEventListener("change", () => {
    if (checkButton.checked) {
      taskSet.removeTask(task);
      if (taskSet.isEmpty()) {
        renderMissionView(currentMission);
      }
    } else {
      if (!currentMission.getTaskSets().includes(taskSet)) {
        currentMission.addTaskSet(taskSet);
      }
      taskSet.addTask(task);
    }
  });

  let taskTitle = task.title;
  let taskTitleP = document.createElement("p");
  taskTitleP.innerHTML = taskTitle;

  taskDiv.appendChild(checkButton);
  taskDiv.appendChild(taskTitleP);

  return taskDiv;
};

const addTaskSet = (taskSet) => {
  let taskSetTitle = taskSet.title;
  let taskSetNote = taskSet.note;
  let taskSetTasks = taskSet.getTasks();

  let taskSetDiv = document.createElement("div");
  taskSetDiv.classList.add("taskSet");

  let taskSetNameOptionsDiv = document.createElement("div");
  taskSetNameOptionsDiv.classList.add("taskSetNameOptions");

  let taskSetTitleH4 = document.createElement("h4");
  taskSetTitleH4.classList.add("taskSetTitle");
  taskSetTitleH4.innerHTML = taskSetTitle;

  let taskSetNoteH6 = document.createElement("h6");
  taskSetNoteH6.innerHTML = taskSetNote;

  let deleteTaskSetBtn = document.createElement("h4");
  deleteTaskSetBtn.classList.add('deleteTaskSetBtn');
  deleteTaskSetBtn.innerHTML = ('&times;')
  deleteTaskSetBtn.addEventListener("click", () => {
    deleteTaskSetModal();
    let confirmBtn = document.querySelector('.deleteBtn');
    confirmBtn.addEventListener("click", () => {
      currentMission.removeTaskSet(taskSet);
      removeModal();
      renderMissionView(currentMission);
    })
  })

  let optionsBtn = document.createElement("h4");
  optionsBtn.classList.add("optionsBtn");
  optionsBtn.innerHTML = "...";
  optionsBtn.addEventListener("click", () => {
    let editModal = editTaskSetModal(taskSet);

    editModal.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        submitEditModal(taskSet);
      }
    });

    let submitBtn = document.querySelector(".submitBtn");
    submitBtn.addEventListener("click", () => {
      submitEditModal(taskSet);
    });
  });

  let taskSetBtnDiv = document.createElement("div");
  taskSetBtnDiv.appendChild(deleteTaskSetBtn);
  taskSetBtnDiv.appendChild(optionsBtn);
  taskSetBtnDiv.classList.add("taskSetBtnDiv");

  taskSetNameOptionsDiv.appendChild(taskSetTitleH4);
  taskSetNameOptionsDiv.appendChild(taskSetNoteH6);
  taskSetNameOptionsDiv.appendChild(taskSetBtnDiv);

  taskSetDiv.appendChild(taskSetNameOptionsDiv);

  for (let i = 0; i < taskSetTasks.length; i++) {
    let newTask = addTask(taskSetTasks[i], taskSet);
    taskSetDiv.appendChild(newTask);
  }
  let newTaskInput = document.createElement("input");
  newTaskInput.classList.add("newTaskInput");
  newTaskInput.placeholder = "Add new task";
  taskSetDiv.appendChild(newTaskInput);

  newTaskInput.addEventListener("keydown", (e) => {
    if (e.keyCode == 13) {
      let newTaskName = newTaskInput.value;
      taskSet.addTask(new Task(newTaskName, taskSetTasks.length, "Eventually"));
      renderMissionView(currentMission);
    }
  });

  return taskSetDiv;
};

const clearMissionView = () => {
  missionDiv.textContent = "";
};

const renderMissionView = (mission) => {
  setCurrentMission(mission);
  hideLandingPage();
  clearMissionView();
  let missionTitle = mission.title;
  let missionDescription = mission.description;
  let missionTaskSets = mission.getTaskSets();

  addTitle(missionTitle);
  addDescription(missionDescription);
  setMissionID(mission.id);
  for (let i = 0; i < missionTaskSets.length; i++) {
    let newTaskSet = addTaskSet(missionTaskSets[i]);
    missionDiv.appendChild(newTaskSet);
  }
};

export {
  renderMissionView,
  addTaskSet,
  addTask,
  clearMissionView,
  setCurrentMission,
  getAllMissions,
  removeMission,
};
