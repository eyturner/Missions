import { TaskSet, setTaskSetTitle, setTaskSetNote } from "./TaskSet.js";
import { getMissionTaskSets, addTaskSetToMission } from "./Mission.js";

const submitEditModal = (taskSet) => {
  let newTitle = document.getElementById("titleInput").value;
  let newNote = document.getElementById("noteInput").value;
  setTaskSetTitle(taskSet, newTitle);
  setTaskSetNote(taskSet, newNote);
};

const submitNewTaskSet = (mission) => {
  let newTaskSetForm = document.querySelector(".newTaskSetForm");
  let newTaskSetTitle = newTaskSetForm.elements[0].value;
  let newTaskSetNote = newTaskSetForm.elements[1].value;

  let newTaskSet = new TaskSet(
    newTaskSetTitle,
    getMissionTaskSets(mission).length,
    newTaskSetNote
  );

  addTaskSetToMission(mission, newTaskSet);

  return newTaskSet;
};

export { submitEditModal, submitNewTaskSet };
