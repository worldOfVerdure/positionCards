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

function createFormFac (fragment, parentElement) {
  // TODO: Make sure to have the classes taught as an array.
  const classLabel = document.createElement("label");
  classLabel.setAttribute("for", "class");
  classLabel.innerHTML = "Classes Teaching:";
  fragment.parentElement.appendChild(classLabel);
  const classInput = document.createElement("input");
  classInput.setAttribute("type", "text");
  classInput.setAttribute("id", "class");
  classInput.setAttribute("name", "user_class");
  fragment.parentElement.appendChild(classInput);

  const moneyLabel = document.createElement("label");
  moneyLabel.setAttribute("for", "money");
  moneyLabel.innerHTML = "Salary:";
  parentElement.appendChild(moneyLabel);
  const moneyInput = document.createElement("input");
  moneyInput.setAttribute("type", "number"); //Number correct?
  moneyInput.setAttribute("id", "money");
  moneyInput.setAttribute("name", "user_salary");
  parentElement.appendChild(moneyInput);

  const researchLabel = document.createElement("label");
  researchLabel.setAttribute("for", "research");
  researchLabel.innerHTML = "Research Status:";
  parentElement.appendChild(researchLabel);
  const researchInput = document.createElement("input");
  researchInput.setAttribute("type", "text");
  researchInput.setAttribute("id", "research");
  researchInput.setAttribute("name", "user_research");
  parentElement.appendChild(researchInput);

  return fragment;
}

// Event Listeners that populate the correct form to submit to make a true college member.
function createFormPerson (memberFunc) {
  let fragment = new DocumentFragment();

  const newDiv = document.createElement("div");
  newDiv.classList.add("card");
  fragment.append(newDiv); // New div added to fragment

  const newForm = document.createElement("form");
  newForm.setAttribute("action", "");
  newForm.setAttribute("method", "post");
  newDiv.appendChild(newForm);

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name"); //htmlFor property of a label might be a security risk.
  nameLabel.innerHTML = "Name:";
  newForm.appendChild(nameLabel);
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("id", "name");
  nameInput.setAttribute("name", "user_name");
  newForm.appendChild(nameInput);

  const idLabel = document.createElement("label");
  idLabel.setAttribute("for", "id");
  idLabel.innerHTML = "ID:";
  newForm.appendChild(idLabel);
  const idInput = document.createElement("input");
  idInput.setAttribute("type", "text");
  idInput.setAttribute("id", "id");
  idInput.setAttribute("name", "user_id");
  newForm.appendChild(idInput);

  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", "email");
  emailLabel.innerHTML = "Email:";
  newForm.appendChild(emailLabel);
  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("name", "user_email");
  newForm.appendChild(emailInput);

  return memberFunc(newForm, fragment);
}

// Function to make and return fragment
function createFragment (memberType) {
  switch (memberType) {
    case 0:
      fragment = createFormPerson(createFormFac);
      break;
    default:
      // Add some error message to the user.
  }
  return fragment;
}

function createCard (memberType) { 
  const theMain = document.querySelector("main");
  switch(memberType) {
    case 0: // Faculty.
      const fragment = createFragment(memberType);
      theMain.appendChild(fragment); //Maybe prepend
      // Correctly append fragment to existing document
      break;
    case 1:
      // Make appropriate elements
      break;
    case 2:
      // Make appropriate elements
      break;
    case 3:
      // Make appropriate elements
      break;
    default:
      // Textbox that gives an error message and then deletes the text box upon click out.

  }
}
// Adds functionality to the inner buttons via aEL. 
hiddenBtns.forEach((element, index)=>{
  element.addEventListener("click", ()=>{
    createCard(index);
  })});
// END: (1) Objects involving creating college members

// START: (2) Member objects maintainance code.
// const profArray = {
//   const pArray = [];

//   // Create a sorting method using merge sort.
// };
// END: (2) Member objects maintainance code.
