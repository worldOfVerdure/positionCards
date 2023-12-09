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

const classDirectory = {
  majors: ["Art", "Biology", "Chemistry", "Engineering", "Mathematics"],
  art: ["Color Theory", "Sculpture", "Digital Design", "Art History"],
  biology: ["Bio1", "Bio2", "Molecular Biology", "Botany"],
  chemistry: ["Chem1", "Chem2", "Organic Chemistry", "Inorganic Chemistry"],
  engineering: ["Physics 1", "Physics 2", "Aerodynamics", "Thermodynamics"],
  math: ["Algebra", "Linear Algebra", "Calculus", "Partial Differential Equations", "Graph Theory"],
};

const dropMenuStatus = {
  dropFlag: false,
};

// Expand or minimize plus icon button menu based on click event.
const addPositionBtn = document.getElementById("addCardBtn");
const hiddenBtns = document.querySelectorAll("button.innerBtn");

// Function call that toggles the class innerBtn.
const toggleInnerBtn = () => {
  hiddenBtns.forEach(element=>{
    element.classList.toggle("innerBtn");
  });
}

// Adds an evenlistener to the plus button.
addPositionBtn.addEventListener("click", ()=>{
  toggleInnerBtn(); // TODO: Look up event delegation for a better solution
});

function displayChoices (choicesMenu) {
  
  if (dropMenuStatus.dropFlag === false)
    dropMenuStatus.dropFlag = true;
  else
    dropMenuStatus.dropFlag = false;
}

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
    if (dropMenuStatus.dropFlag === false) {
      displayChoices(choicesMenu);
      choicesMenu.removeAttribute("hidden");
    }

    else {
      choicesMenu.setAttribute("hidden", "");
      dropMenuStatus.dropFlag = false;
    }
  });
  entireDropDown.appendChild(choicesMenu);
  newForm.appendChild(entireDropDown);
}

function finishFaculty (newForm) {
  const classLabel = document.createElement("label");
  classLabel.htmlFor = "class";
  classLabel.innerText = "Classes:";
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
}
// Event Listeners that populate the correct form to submit to make a true college member.
function createFragment (memberType) {
  let fragment = new DocumentFragment();

  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  fragment.append(newDiv); // New div added to fragment

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
  nameLabel.innerText = "Name (first and last):";
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
  theMain.prepend(fragment);
}
// Adds functionality to the inner buttons via aEL. 
hiddenBtns.forEach((element, index)=>{
  element.addEventListener("click", ()=>{ // Test and maybe just pass createForm()
    createForm(index);
  })});

  // Check toggle
