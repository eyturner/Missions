function Task(title, id, dueDate) {
  this.title = title;
  this.id = id;
  this.dueDate = dueDate;
  this.isComplete = false;

  // this.setDueDate = function (newDueDate) {
  //   this.dueDate = newDueDate;
  // };

  // this.setTitle = function (newTitle) {
  //   this.title = newTitle;
  // };

  // this.completeTask = function () {
  //   this.isComplete = true;
  // };
}

const setTaskDueDate = (Task, newDueDate) => {
  Task.dueDate = newDueDate;
};

const setTaskTitle = (Task, newTitle) => {
  Task.title = newTitle;
};

const completeTask = (Task) => {
  Task.isComplete = true;
};

export { Task, setTaskDueDate, setTaskTitle, completeTask };
