function Mission(title, id, description) {
  this.title = title;
  this.id = id;
  this.taskSetArr = [];
  if (description) {
    this.description = description;
  } else {
    this.description = "";
  }

  this.getID = function () {
    return this.id;
  };

  this.setDescription = function (newDesc) {
    this.description = newDesc;
  };

  this.addTaskSet = function (taskSet) {
    this.taskSetArr.push(taskSet);
  };

  this.getTaskSets = function () {
    return this.taskSetArr;
  };

  this.removeTaskSet = function (taskSet) {
    for (let i = 0; i < this.taskSetArr.length; i++) {
      if (taskSet == this.taskSetArr[i]) {
        this.taskSetArr.splice(i, 1);
      }
    }
  };
}

export { Mission };
