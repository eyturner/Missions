import { Task } from "./Task.js";
import { TaskSet } from "./TaskSet.js";
import { Mission } from "./Mission.js";

let taskID = 0;
let dl = new Task("Design Layout", taskID++, "Eventually");
let ijs = new Task("Implement JS", taskID++, "Eventually");
let c2s = new Task("Connect to Skeleton", taskID++, "Eventually");

let taskSetID = 0;
let codingTasks = new TaskSet("Coding Tasks", taskSetID++);
codingTasks.setNote(
  "Gotta get that job son! How else are you going to pay for your stuff?"
);
codingTasks.addTask(dl);
codingTasks.addTask(ijs);
codingTasks.addTask(c2s);

let cleaning = new TaskSet("Cleaning", taskSetID++);
cleaning.setNote(
  "Gotta get that house clean son! How else are you going to lounge around?"
);
cleaning.addTask(dl);
cleaning.addTask(ijs);
cleaning.addTask(c2s);

let fun = new TaskSet("Fun", taskSetID++);
fun.setNote(
  "Gotta get that play in son! How else are you going to get relief?"
);
fun.addTask(dl);
fun.addTask(ijs);
fun.addTask(c2s);

let missionID = 0;
let testMission = new Mission("Today", missionID++);
testMission.setDescription(
  "Make sure to do all of this today AT LEAST. Once you finish this, you can spend your time how you like."
);
testMission.addTaskSet(codingTasks);
testMission.addTaskSet(cleaning);
testMission.addTaskSet(fun);

// ------------------------------------------------------------------------------------------------s
let codingTasksTwo = new TaskSet("Coding Tasks", taskSetID++);
codingTasksTwo.setNote(
  "Gotta get that job son! How else are you going to pay for your stuff?"
);
codingTasksTwo.addTask(dl);
codingTasksTwo.addTask(ijs);
codingTasksTwo.addTask(c2s);

let cleaningTwo = new TaskSet("Cleaning", taskSetID++);
cleaningTwo.setNote(
  "Gotta get that house clean son! How else are you going to lounge around?"
);
cleaningTwo.addTask(dl);
cleaningTwo.addTask(ijs);
cleaningTwo.addTask(c2s);

let funTwo = new TaskSet("Fun", taskSetID++);
funTwo.setNote(
  "Gotta get that play in son! How else are you going to get relief?"
);
funTwo.addTask(dl);
funTwo.addTask(ijs);
funTwo.addTask(c2s);
let testMissionTwo = new Mission("Tomorrow", missionID++);
testMissionTwo.setDescription(
  "Make sure to do all of this tomorrow AT LEAST. Once you finish this, you can spend your time how you like."
);
testMissionTwo.addTaskSet(codingTasksTwo);
testMissionTwo.addTaskSet(cleaningTwo);
testMissionTwo.addTaskSet(funTwo);

export { testMission, testMissionTwo };
