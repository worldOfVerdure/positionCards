import * as dDLogic from "./dropDownLogic.js";

export function createDropDown (newForm) {
  const entireDropDown = document.createElement("div");
  const dropDownDiv = document.createElement("div");
  dropDownDiv.classList.add("dropDownInput");
  const resevoir = document.createElement("div");
  resevoir.setAttribute("class", "dropDownResevoir");
  dropDownDiv.appendChild(resevoir);
  const dropDownArrowBtn = document.createElement("button");
  dropDownArrowBtn.setAttribute("type", "button");
  const dropDownArrowImg = document.createElement("img");
  dropDownArrowImg.setAttribute("src", "images/dropDown.svg");
  dropDownArrowImg.setAttribute("alt", "Drop down arrow icon.");
  dropDownArrowBtn.appendChild(dropDownArrowImg);
  dropDownDiv.appendChild(dropDownArrowBtn);
  entireDropDown.appendChild(dropDownDiv);
  const choicesMenu = document.createElement("div");
  choicesMenu.setAttribute("hidden", "");
  choicesMenu.classList.add("choicesMenu");
  // Instantiate object to count courses for a college member and avoid redundant courses being selected.
  const courseCounterObj = new dDLogic.CourseCounter(true, 6, 0, [], []);
  if (courseCounterObj.initialFlag === true) { // Set up courseCounter
    for(let i=0; i<courseCounterObj.maxCourse; ++i) {
      courseCounterObj.coursesSelected[i] = "";
      courseCounterObj.coursesSelectedMarker[i] = false;
    }
    courseCounterObj.initialFlag = false;
  }

  dropDownArrowBtn.addEventListener("click", ()=>{
    if (!dDLogic.dropDownCreatedFlag.flag) { // First-time creating the choices menu. Only called once per card. AYO! Make sure to reset this flag upon deletion of a card or the submission of a card.
      createChoices(choicesMenu, resevoir, courseCounterObj);
      dDLogic.dropDownCreatedFlag.flag = true;
      choicesMenu.removeAttribute("hidden");
    }
    else if (dDLogic.dropDownCreatedFlag.flag && !choicesMenu.hasAttribute("hidden")) { // To close choices
      choicesMenu.setAttribute("hidden", "");
    }
    else { // To open choices again, and again...
      choicesMenu.removeAttribute("hidden");
    }
  });
  entireDropDown.appendChild(choicesMenu);
  return newForm.appendChild(entireDropDown);
}

function createChoices (choicesMenu, resevoir, courseCounterObj) {
  for (let i=0; i<dDLogic.classDirectory.majors.length; ++i) {
    const majorHeader = document.createElement("ul");
    majorHeader.innerText = dDLogic.classDirectory.majors[i];
    choicesMenu.appendChild(majorHeader);
    for (let j=0; j<dDLogic.classDirectory[dDLogic.classDirectory.majors[i]].length; ++j) {
      const majorListItem = document.createElement("li");
      majorListItem.innerText = dDLogic.classDirectory[dDLogic.classDirectory.majors[i]][j];
      majorListItem.addEventListener("click", ()=>{
        courseSelected(majorListItem, resevoir, courseCounterObj);
      });
      majorHeader.appendChild(majorListItem);
    }
  }
}

// TODO: make specific object for this card
function courseSelected (majorListItem, resevoir, courseCounterObj) {
  if (courseCounterObj.courseCount>=courseCounterObj.maxCourse || dDLogic.courseAlreadySelected(majorListItem.innerText, courseCounterObj)) {
    return;
  }

  const selectedClass = document.createElement("div");
  selectedClass.innerText = majorListItem.innerText;
  selectedClass.classList.add("selectedClass");
  const deleteClassBtn = document.createElement("button");
  deleteClassBtn.classList.add("deleteClassBtn");
  const deleteClassImg = document.createElement("img");
  deleteClassImg.setAttribute("src", "images/closeX.svg");
  deleteClassImg.setAttribute("alt", "Image of an 'x' in the middle of a circle.");
  deleteClassBtn.append(deleteClassImg);
  selectedClass.append(deleteClassBtn);
  resevoir.appendChild(selectedClass);
  deleteClassBtn.addEventListener("click", event=>{
    dDLogic.removeClass(event.currentTarget.parentElement.innerText, courseCounterObj);
    selectedClass.remove();
  });

  dDLogic.addClass(majorListItem, courseCounterObj);
}
