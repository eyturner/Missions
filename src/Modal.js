const createNewModal = () => {
  let modalDiv = document.createElement("div");
  modalDiv.id = "myModal";
  modalDiv.classList.add("modal");

  return modalDiv;
};

const createModalHead = (modalHeaderTitle, modalType) => {
  let modalHeaderDiv = document.createElement("div");
  modalHeaderDiv.classList.add("modal-header");
  modalHeaderDiv.classList.add(modalType);

  let modalCloseBtn = document.createElement("span");
  modalCloseBtn.classList.add("close");
  modalCloseBtn.innerHTML = "&times;";

  modalCloseBtn.addEventListener("click", removeModal);

  let modalHeaderH2 = document.createElement("h2");
  modalHeaderH2.innerHTML = modalHeaderTitle;

  modalHeaderDiv.appendChild(modalHeaderH2);
  modalHeaderDiv.appendChild(modalCloseBtn);

  return modalHeaderDiv;
};

const createMissionModalBody = () => {
  let modalBodyDiv = document.createElement("div");
  modalBodyDiv.classList.add("modal-body");

  let modalBodyForm = document.createElement("form");
  modalBodyForm.classList.add("newMissionForm");

  let modalTitleDiv = document.createElement("div");
  modalTitleDiv.classList.add("modalTitleDiv");

  let modalTitleInput = document.createElement("input");
  modalTitleInput.id = "titleInput";

  let titleLabel = document.createElement("label");
  titleLabel.id = "missionTitleLabel";
  titleLabel.for = modalTitleInput.id;
  titleLabel.innerHTML = "Mission Title";

  modalTitleDiv.appendChild(titleLabel);
  modalTitleDiv.appendChild(modalTitleInput);

  let missionDescriptionDiv = document.createElement("div");
  missionDescriptionDiv.classList.add("newMissionDescriptionDiv");

  let missionDescriptionInput = document.createElement("input");
  missionDescriptionInput.id = "descriptionInput";

  let descriptionLabel = document.createElement("label");
  descriptionLabel.for = missionDescriptionInput.id;
  descriptionLabel.innerHTML = "Mission Description";

  missionDescriptionDiv.appendChild(descriptionLabel);
  missionDescriptionDiv.appendChild(missionDescriptionInput);

  modalBodyForm.appendChild(modalTitleDiv);
  modalBodyForm.appendChild(missionDescriptionDiv);

  modalBodyDiv.appendChild(modalBodyForm);

  return modalBodyDiv;
};

const createTaskSetModalBody = () => {
  let modalBodyDiv = document.createElement("div");
  modalBodyDiv.classList.add("modal-body");

  let modalBodyForm = document.createElement("form");
  modalBodyForm.classList.add("newTaskSetForm");

  let modalTitleDiv = document.createElement("div");
  modalTitleDiv.classList.add("modalTitleDiv");

  let modalTitleInput = document.createElement("input");
  modalTitleInput.id = "titleInput";

  let titleLabel = document.createElement("label");
  titleLabel.id = "taskSetTitleLabel";
  titleLabel.for = modalTitleInput.id;
  titleLabel.innerHTML = "TaskSet Title";

  modalTitleDiv.appendChild(titleLabel);
  modalTitleDiv.appendChild(modalTitleInput);

  let TaskSetNoteDiv = document.createElement("div");
  TaskSetNoteDiv.classList.add("newTaskSetNoteDiv");

  let TaskSetNoteInput = document.createElement("input");
  TaskSetNoteInput.id = "noteInput";

  let descriptionLabel = document.createElement("label");
  descriptionLabel.id = "taskSetDescriptionLabel";
  descriptionLabel.for = TaskSetNoteInput.id;
  descriptionLabel.innerHTML = "TaskSet Note";

  TaskSetNoteDiv.appendChild(descriptionLabel);
  TaskSetNoteDiv.appendChild(TaskSetNoteInput);

  modalBodyForm.appendChild(modalTitleDiv);
  modalBodyForm.appendChild(TaskSetNoteDiv);

  modalBodyDiv.appendChild(modalBodyForm);

  return modalBodyDiv;
};

const editTaskSetModalBody = (taskSet) => {
  let modalBodyDiv = document.createElement("div");
  modalBodyDiv.classList.add("modal-body");

  let modalBodyForm = document.createElement("form");
  modalBodyForm.classList.add("newTaskSetForm");

  let modalTitleDiv = document.createElement("div");
  modalTitleDiv.classList.add("modalTitleDiv");

  let modalTitleInput = document.createElement("input");
  modalTitleInput.id = "titleInput";
  modalTitleInput.value = taskSet.getTitle();

  let titleLabel = document.createElement("label");
  titleLabel.id = "taskSetTitleLabel";
  titleLabel.for = modalTitleInput.id;
  titleLabel.innerHTML = "TaskSet Title";

  modalTitleDiv.appendChild(titleLabel);
  modalTitleDiv.appendChild(modalTitleInput);

  let TaskSetNoteDiv = document.createElement("div");
  TaskSetNoteDiv.classList.add("newTaskSetNoteDiv");

  let TaskSetNoteInput = document.createElement("input");
  TaskSetNoteInput.id = "noteInput";
  TaskSetNoteInput.value = taskSet.getNote();

  let descriptionLabel = document.createElement("label");
  descriptionLabel.id = "taskSetDescriptionLabel";
  descriptionLabel.for = TaskSetNoteInput.id;
  descriptionLabel.innerHTML = "TaskSet Note";

  TaskSetNoteDiv.appendChild(descriptionLabel);
  TaskSetNoteDiv.appendChild(TaskSetNoteInput);

  modalBodyForm.appendChild(modalTitleDiv);
  modalBodyForm.appendChild(TaskSetNoteDiv);

  modalBodyDiv.appendChild(modalBodyForm);

  return modalBodyDiv;
};

const createModalFooter = (modalType) => {
  let modalFooterDiv = document.createElement("div");
  modalFooterDiv.classList.add("modal-footer");
  modalFooterDiv.classList.add(modalType);

  let submitFormH3 = document.createElement("h3");
  submitFormH3.innerHTML = "Submit";
  submitFormH3.classList.add("submitBtn");

  modalFooterDiv.appendChild(submitFormH3);

  return modalFooterDiv;
};

const renderMissionModal = () => {
  let modalDiv = createNewModal();

  window.onclick = (e) => {
    if (e.target == modalDiv) {
      removeModal();
    }
  };

  let modalContentDiv = document.createElement("div");
  modalContentDiv.classList.add("modal-content");

  let modalHeaderDiv = createModalHead("Add Mission", "missionModal");
  let modalBodyDiv = createMissionModalBody();
  let modalFooterDiv = createModalFooter("missionModal");

  modalContentDiv.appendChild(modalHeaderDiv);
  modalContentDiv.appendChild(modalBodyDiv);
  modalContentDiv.appendChild(modalFooterDiv);

  modalDiv.appendChild(modalContentDiv);
  modalDiv.style.display = "block";

  document.body.appendChild(modalDiv);
  return modalDiv;
};

const renderTaskSetModal = () => {
  removeModal();

  let modalDiv = createNewModal();

  window.onclick = (e) => {
    if (e.target == modalDiv) {
      removeModal();
    }
  };

  let modalContentDiv = document.createElement("div");
  modalContentDiv.classList.add("modal-content");

  let modalHeaderDiv = createModalHead("Add TaskSet", "taskSetModal");
  let modalBodyDiv = createTaskSetModalBody();
  let modalFooterDiv = createModalFooter("taskSetModal");

  modalContentDiv.appendChild(modalHeaderDiv);
  modalContentDiv.appendChild(modalBodyDiv);
  modalContentDiv.appendChild(modalFooterDiv);

  modalDiv.appendChild(modalContentDiv);
  modalDiv.style.display = "block";

  document.body.appendChild(modalDiv);
  return modalDiv;
};

const editTaskSetModal = (taskSet) => {
  let modalDiv = createNewModal();

  window.onclick = (e) => {
    if (e.target == modalDiv) {
      removeModal();
    }
  };

  let modalContentDiv = document.createElement("div");
  modalContentDiv.classList.add("modal-content");

  let modalHeaderDiv = createModalHead("Edit TaskSet", "taskSetModal");
  let modalBodyDiv = editTaskSetModalBody(taskSet);
  let modalFooterDiv = createModalFooter("taskSetModal");

  modalContentDiv.appendChild(modalHeaderDiv);
  modalContentDiv.appendChild(modalBodyDiv);
  modalContentDiv.appendChild(modalFooterDiv);

  modalDiv.appendChild(modalContentDiv);
  modalDiv.style.display = "block";

  document.body.appendChild(modalDiv);
  return modalDiv;
};

const deleteMissionModal = () => {
  let modalDiv = createNewModal();

  window.onclick = (e) => {
    if (e.target == modalDiv) {
      removeModal();
    }
  };

  let modalContentDiv = document.createElement("div");
  modalContentDiv.classList.add("modal-content");

  let modalHeaderDiv = createModalHead("Delete Mission?", "deleteMissionModal");

  let modalBodyDiv = document.createElement("div");
  modalBodyDiv.classList.add("modal-body");
  modalBodyDiv.id = "deleteModalBody";

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.innerHTML = "Yes";
  modalBodyDiv.appendChild(deleteButton);

  let saveButton = document.createElement("button");
  saveButton.classList.add("saveBtn");
  saveButton.innerHTML = "No";
  modalBodyDiv.appendChild(saveButton);

  modalContentDiv.appendChild(modalHeaderDiv);
  modalContentDiv.appendChild(modalBodyDiv);

  modalDiv.appendChild(modalContentDiv);
  modalDiv.style.display = "block";

  document.body.appendChild(modalDiv);

  return modalDiv;
};

const removeModal = () => {
  let modalDiv = document.getElementById("myModal");
  if (modalDiv) {
    document.body.removeChild(modalDiv);
  }
};

export {
  renderMissionModal,
  renderTaskSetModal,
  removeModal,
  editTaskSetModal,
  deleteMissionModal,
};
