function TaskSet(title, id, note) {
  this.title = title;
  this.taskArr = [];
  this.id = id;
  if (note) {
    this.note = note;
  } else {
    this.note = "";
  }

  this.getTitle = function () {
    return this.title;
  };
  this.getId = function () {
    return this.id;
  };

  this.getNote = function () {
    return this.note;
  };

  this.setTitle = function (newTitle) {
    this.title = newTitle;
  };

  this.setNote = function (newNote) {
    this.note = newNote;
  };

  this.addTask = function (task) {
    this.taskArr.push(task);
  };

  this.getTasks = function () {
    return this.taskArr;
  };

  this.isEmpty = function () {
    if (this.taskArr.length == 0) {
      return true;
    }

    return false;
  };

  this.removeTask = function (task) {
    for (let i = 0; i < this.taskArr.length; ++i) {
      if (this.taskArr[i] == task) {
        this.taskArr.splice(i, 1);
      }
    }
  };
}

export { TaskSet };
