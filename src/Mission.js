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

// const getMissionID = (mission) => {
//   return mission.id;
// }

// const setMissionDescription = (mission, newDesc) => {
//   mission.description = newDesc;
// }

const addTaskSetToMission = (mission, taskSet) => {
  mission.taskSetArr.push(taskSet);
}

const getMissionTaskSets = (mission) => {
  return mission.taskSetArr;
};

const removeTaskSetFromMission = (mission, taskSet) => {
  for (let i = 0; i < mission.taskSetArr.length; i++) {
    if(taskSet == mission.taskSetArr[i]) {
      mission.taskSetArr.splice(i,1);
    }
  }
}

export { Mission, getMissionTaskSets, addTaskSetToMission, removeTaskSetFromMission };
