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

function createMemberWrapper (memberTypeConstructor, name, memberType, id, email, jonInfo, moneyInfo, statusInfo) {
  const tempPerson = new Person(name, memberType, id, email);
  const tempCollegeMember = new memberTypeConstructor(jobInfo, moneyInfo, statusInfo);
  
  return Object.setPrototypeOf(tempCollegeMember, tempPerson);
}

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

  const newForm = document.createElement("form");
  newForm.setAttribute("action", "");
  newForm.setAttribute("method", "post");
  newDiv.appendChild(newForm);

  const nameLabel = document.createElement("label");
  nameLabel.htmlFor = "name";
  nameLabel.innerText = "Name:";
  newForm.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "user_name");
  nameInput.setAttribute("required", "");
  newForm.appendChild(nameInput);

  const idLabel = document.createElement("label");
  idLabel.htmlFor = "id";
  idLabel.innerText = "ID:";
  newForm.appendChild(idLabel);
  const idInput = document.createElement("input");
  idInput.setAttribute("type", "text");
  idInput.setAttribute("id", "id");
  idInput.setAttribute("name", "user_id");
  idInput.setAttribute("required", "");
  newForm.appendChild(idInput);

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
      const classLabel = document.createElement("label");
      classLabel.htmlFor = "class";
      classLabel.innerText = "Classes:";
      newForm.appendChild(classLabel);
      const classInput = document.createElement("input");
      classInput.setAttribute("type", "text");
      classInput.setAttribute("id", "class");
      classInput.setAttribute("name", "user_class");
      classInput.setAttribute("required", "");
      newForm.appendChild(classInput);

      const moneyLabel = document.createElement("label");
      moneyLabel.htmlFor = "salary";
      moneyLabel.innerText = "Salary:";
      newForm.appendChild(moneyLabel);
      const moneyInput = document.createElement("input");
      moneyInput.setAttribute("type", "text"); //Number correct?
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
      labelTrue.classList.add("labelYes");
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
  // addPositionBtn.disabled = true; Wahy?
  const theMain = document.querySelector("main");
  const fragment = createFragment(memberType);
  theMain.appendChild(fragment);
}
// Adds functionality to the inner buttons via aEL. 
hiddenBtns.forEach((element, index)=>{
  element.addEventListener("click", ()=>{
    createForm(index);
  })});
// END: (1) Objects involving creating college members

// START: (2) Member objects maintainance code.
// const profArray = {
//   const pArray = [];

//   // Create a sorting method using merge sort.
// };
// END: (2) Member objects maintainance code.
