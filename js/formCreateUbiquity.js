import toggleInnerBtn from "./iconTray.js";
import finishFaculty from "./formCreateFaculty.js";

export function createForm (memberType) { //first export at 12/22/2023 @ 11:31 am in Granpa's house. Dad is behind me working.
  toggleInnerBtn(); // needs to be imported so this file knows what the heck I am talking about
  const theMain = document.querySelector("main");
  const fragment = createFragment(memberType);
  theMain.prepend(fragment);
}

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
      //newForm = finishStaff(newForm);
      break;

    case 2:
      //newForm = finishAdmin(newForm);
      break;

    case 3:
      //newForm = finishStudent(newForm);
      break;
    
    default:
      console.log("Invalid college memeber selection.");
  }
  const newSubmitBtn = document.createElement("button");
  newSubmitBtn.classList.add("submitBtn");
  newSubmitBtn.innerText = "Submit";
  newForm.appendChild(newSubmitBtn);

  return fragment;
}
