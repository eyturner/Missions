function Task(title, id, dueDate) {
  this.title = title;
  this.id = id;
  this.dueDate = dueDate;
  this.isComplete = false;

  this.setDueDate = function (newDueDate) {
    this.dueDate = newDueDate;
  };

  this.setTitle = function (newTitle) {
    this.title = newTitle;
  };

  this.getId = function () {
    return this.id;
  };

  this.completeTask = function () {
    this.isComplete = true;
  };
}

export { Task };
