const getSavedMissions = () => {
  let missionsArr = localStorage.getItem("allMissions");
  missionsArr = JSON.parse(missionsArr);
  if (missionsArr) {
    console.log(missionsArr);
    return missionsArr;
  } else {
    return [];
  }
};

const updateLocalStorage = (allMissions) => {
  console.log("Updating...");
  localStorage.setItem("allMissions", JSON.stringify(allMissions));
  showCurrentStorage();
};

const showCurrentStorage = () => {
  console.log(
    "localStorage now contains:",
    JSON.parse(localStorage.getItem("allMissions"))
  );
};

export { getSavedMissions, updateLocalStorage };
