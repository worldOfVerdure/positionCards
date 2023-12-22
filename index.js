// START: (1) Objects involving creating college members
function Person (name, memberStatus, id, email) {
 this.name = name;
 this.memberType = memberStatus;
 this.id = id;
 this.email = email;
}

function Professor (classesTaught, salary, researchStatus) {
  this.classesTaught = classesTaught; //Array passed from event function.
  this.salary = salary;
  this.researchStatus = researchStatus;

  // TODO: make a too string.
}

function createMemberWrapper (memberTypeConstructor, name, memberType, id, email, jobInfo, moneyInfo, statusInfo) {
  const tempPerson = new Person(name, memberType, id, email);
  const tempCollegeMember = new memberTypeConstructor(jobInfo, moneyInfo, statusInfo);
  
  return Object.setPrototypeOf(tempCollegeMember, tempPerson);
}

const dropDownCreatedFlag = {
  flag: false,
};

const courseCounter = {
  initialFlag: true,
  maxCourse: 6,
  courseCount: 0,
  coursesSelected: [],
  coursesSelectedMarker: [],
};
// Keep all properties, save for "majors" starting with capitilization
const classDirectory = {
  majors: ["Art", "Biology", "Chemistry", "Engineering", "Mathematics"],
  Art: ["Color Theory", "Sculpture", "Digital Design", "Art History"],
  Biology: ["Bio1", "Bio2", "Molecular Biology", "Botany"],
  Chemistry: ["Chem1", "Chem2", "Organic Chemistry", "Inorganic Chemistry"],
  Engineering: ["Physics 1", "Physics 2", "Aerodynamics", "Thermodynamics"],
  Mathematics: ["Algebra", "Linear Algebra", "Calculus", "Partial Differential Equations", "Graph Theory"],
}; // Up to here is in dataStructures.js

// Expand or minimize plus icon button menu based on click event. Inside iconTray.js.
const addPositionBtn = document.getElementById("addCardBtn");
const hiddenBtns = document.querySelectorAll("button.innerBtn");

// Function call that toggles the class innerBtn.
const toggleInnerBtn = () => { // from here ->
  hiddenBtns.forEach(element=>{
    element.classList.toggle("innerBtn");
  });
}

// Adds an evenlistener to the plus button.
addPositionBtn.addEventListener("click", ()=>{
  toggleInnerBtn(); // TODO: Look up event delegation for a better solution
}); // to here -> inside iconTray.js.

function addClass (majorListItem) { // All code from here ->
  for (let i=0; i<courseCounter.maxCourse; ++i) {
    if (courseCounter.coursesSelected[i] === "") {
      courseCounter.coursesSelected[i] = majorListItem.innerText;
      courseCounter.coursesSelectedMarker[i] = true;
      ++courseCounter.courseCount;
      return;
    }
  }
}

function removeClass (removedClass) {
  for (let i=0; i<courseCounter.maxCourse; i++) {
    if (courseCounter.coursesSelected[i] === removedClass) {
      courseCounter.coursesSelected[i] = "";
      courseCounter.coursesSelectedMarker[i] = false;
      --courseCounter.courseCount;
      return;
    }
  }
}

function courseAlreadySelected(className) {
  for (let i=0; i<courseCounter.maxCourse; ++i) {
    if (className === courseCounter.coursesSelected[i])
      return true;
  }
  return false;
} // to here -> inside dropDownLogic.js.

// TODO: make specific object for this card
function courseSelected (majorListItem, resevoir) {
  if (courseCounter.initialFlag === true) { // Set up courseCounter
    for(let i=0; i<courseCounter.maxCourse; ++i) {
      courseCounter.coursesSelected[i] = "";
      courseCounter.coursesSelectedMarker[i] = false;
    }
    courseCounter.initialFlag = false;
  }

  if (courseCounter.courseCount>=courseCounter.maxCourse || courseAlreadySelected(majorListItem.innerText)) {
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
    removeClass(event.currentTarget.parentElement.innerText);
    selectedClass.remove();
  });

  addClass(majorListItem);
} // inside dropDownDomMan.js.

function createChoices (choicesMenu, resevoir) {
  for (let i=0; i<classDirectory.majors.length; ++i) {
    const majorHeader = document.createElement("ul");
    majorHeader.innerText = classDirectory.majors[i];
    choicesMenu.appendChild(majorHeader);
    for (let j=0; j<classDirectory[classDirectory.majors[i]].length; ++j) {
      const majorListItem = document.createElement("li");
      majorListItem.innerText = classDirectory[classDirectory.majors[i]][j];
      majorListItem.addEventListener("click", ()=>{
        courseSelected(majorListItem, resevoir);
      });
      majorHeader.appendChild(majorListItem);
    }
  }
} // inside dropDownDomMan.js.

function createDropDown (newForm) {
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
  dropDownArrowBtn.addEventListener("click", ()=>{
    if (!dropDownCreatedFlag.flag) { // First-time to actually create the choices menu once.
      createChoices(choicesMenu, resevoir);
      dropDownCreatedFlag.flag = true;
      choicesMenu.removeAttribute("hidden");
    }
    else if (dropDownCreatedFlag.flag && !choicesMenu.hasAttribute("hidden")) { // To close choices
      choicesMenu.setAttribute("hidden", "");
    }
    else { // To open choices again, and again...
      choicesMenu.removeAttribute("hidden");
    }
  });
  entireDropDown.appendChild(choicesMenu);
  newForm.appendChild(entireDropDown);
} // inside dropDownDomMan.js.

function finishFaculty (newForm) {
  const classLabel = document.createElement("label");
  classLabel.innerText = "Classes: (no more than 6)";
  newForm.appendChild(classLabel);
  createDropDown(newForm);

  const moneyLabel = document.createElement("label");
  moneyLabel.htmlFor = "salary";
  moneyLabel.innerText = "Salary:";
  newForm.appendChild(moneyLabel);
  const moneyInput = document.createElement("input");
  moneyInput.setAttribute("type", "text");
  moneyInput.setAttribute("id", "salary");
  moneyInput.setAttribute("name", "user_salary");
  moneyInput.setAttribute("required", "");
  newForm.appendChild(moneyInput);

  const researchFieldset = document.createElement("fieldset");
  newForm.appendChild(researchFieldset);
  const researchLegend = document.createElement("legend");
  researchLegend.innerText = "Is this faculty member conducting research?";
  researchFieldset.appendChild(researchLegend);
  const inputTrue = document.createElement("input");
  inputTrue.setAttribute("type", "radio");
  inputTrue.setAttribute("id", "trueRadio");
  inputTrue.setAttribute("name", "research");
  inputTrue.setAttribute("value", "y");
  inputTrue.setAttribute("required", "");
  inputTrue.classList.add("radioInpLab");
  researchFieldset.appendChild(inputTrue);
  const labelTrue = document.createElement("label");
  labelTrue.innerText = "Yes";
  labelTrue.setAttribute("for", "trueRadio");
  labelTrue.classList.add("radioInpLab");
  researchFieldset.appendChild(labelTrue);
  const inputFalse = document.createElement("input");
  inputFalse.setAttribute("type", "radio");
  inputFalse.setAttribute("id", "falseRadio");
  inputFalse.setAttribute("name", "research");
  inputFalse.setAttribute("value", "n");
  inputFalse.setAttribute("required", "");
  inputFalse.classList.add("radioInpLab");
  researchFieldset.appendChild(inputFalse);
  const labelFalse = document.createElement("label");
  labelFalse.innerText = "No";
  labelFalse.setAttribute("for", "falseRadio");
  labelFalse.classList.add("radioInpLab");
  researchFieldset.appendChild(labelFalse);

  return newForm;
} // Inside fromCreatedFaculty.js.
// Event Listeners that populate the correct form to submit to make a true college member.
function createFragment (memberType) {
  let fragment = new DocumentFragment();

  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  fragment.append(newDiv);

  const newH2 = document.createElement("h2");
  newH2.classList.add("formH2");
  switch (memberType) {
    case 0:
      newH2.innerText = "Faculty";
      break;
    case 1:
      newH2.innerText = "Staff";
      break;
    case 2:
      newH2.innerText = "Admin";
      break;
    case 3:
      newH2.innerText = "Student";
      break;
    default:
      newH2.innerText = "Error";
  }
  newDiv.appendChild(newH2);

  const validateSpanText = document.createElement("span");
  const validateSpanText2 = document.createElement("span");

  let newForm = document.createElement("form");
  newForm.setAttribute("action", "");
  newForm.setAttribute("method", "post");
  newDiv.appendChild(newForm);

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.innerText = "Name: (first and last)";
  newForm.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "user_name");
  nameInput.setAttribute("required", "");
  nameInput.setAttribute("title", "Only alphabetic characters.");
  nameInput.setAttribute("pattern", "^[A-Za-z]+(\\s[A-Za-z]+)+$"); //add name-name as an || with the \\s portion
  nameInput.classList.add("formValidate");
  newForm.appendChild(nameInput);
  newForm.appendChild(validateSpanText);

  const idLabel = document.createElement("label");
  idLabel.htmlFor = "id";
  idLabel.innerText = "ID: (5 numbers)";
  newForm.appendChild(idLabel);
  const idInput = document.createElement("input");
  idInput.setAttribute("type", "text");
  idInput.setAttribute("id", "id");
  idInput.setAttribute("name", "user_id");
  idInput.setAttribute("required", "");
  idInput.setAttribute("title", "Enter a five digit ID");
  idInput.setAttribute("required", "");
  idInput.classList.add("formValidate");
  idInput.setAttribute("pattern", "^\\d{5}$");
  newForm.appendChild(idInput);
  newForm.appendChild(validateSpanText2);

  const emailLabel = document.createElement("label");
  emailLabel.htmlFor = "email";
  emailLabel.innerText = "Email:";
  newForm.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "user_email");
  emailInput.setAttribute("required", "");
  newForm.appendChild(emailInput);

  switch (memberType) {
    case 0:
      newForm = finishFaculty(newForm);
      break;
    case 1:
      break;

    case 2:
      break;

    case 3:
      break;
    
    default:
  }
  const newSubmitBtn = document.createElement("button");
  newSubmitBtn.classList.add("submitBtn");
  newSubmitBtn.innerText = "Submit";
  newForm.appendChild(newSubmitBtn);

  return fragment;
}

function createForm (memberType) {
  toggleInnerBtn();
  const theMain = document.querySelector("main");
  const fragment = createFragment(memberType);
  theMain.prepend(fragment); // inside formCreateUbiquity.js
}
// Adds functionality to the inner buttons via aEL. Inside iconTray.js.
hiddenBtns.forEach((element, index)=>{
  element.addEventListener("click", ()=>{ // Test and maybe just pass createForm()
    createForm(index);
  })});
