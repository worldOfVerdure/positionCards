import {toggleInnerBtn, cardStatus} from "./iconTray.js";
import {finishFaculty} from "./formCreateFaculty.js";
import {dropDownCreatedFlag} from "./dropDownLogic.js";

function deleteEntireCard(theMain) {
  theMain.removeChild(theMain.firstElementChild);
  cardStatus.exists = false;
  dropDownCreatedFlag.flag = false;
}

export function createForm (memberType) {
  toggleInnerBtn();
  const theMain = document.querySelector("main");
  const fragment = createFragment(memberType, theMain);
  theMain.append(fragment);
}

export function changeForm (memberType) {
  const getMain = document.querySelector("main");
  getMain.removeChild(getMain.firstElementChild);
  dropDownCreatedFlag.flag = false;
  createForm(memberType);
}

function createFragment (memberType, theMain) {
  let fragment = new DocumentFragment();
  const entireCard = document.createElement("div");
  entireCard.classList.add("card");
  entireCard.setAttribute("id", "entireCardNode"); // for deletion purposes
  fragment.append(entireCard);
  const cardHeaderAndDelete = document.createElement("div");
  cardHeaderAndDelete.setAttribute("id", "headerAndDelete");
  const cardHeader = document.createElement("h2");
  cardHeader.classList.add("formH2");
  switch (memberType) {
    case 0:
      cardHeader.innerText = "Faculty";
      break;
    case 1:
      cardHeader.innerText = "Staff";
      break;
    case 2:
      cardHeader.innerText = "Admin";
      break;
    case 3:
      cardHeader.innerText = "Student";
      break;
    default:
      cardHeader.innerText = "Error";
  }
  cardHeaderAndDelete.appendChild(cardHeader);
  const cardDeleteBtn = document.createElement("button");
  cardDeleteBtn.addEventListener("click", ()=>{
    deleteEntireCard(theMain);
  });
  const cardDeleteImg = document.createElement("img");
  cardDeleteImg.setAttribute("src", "images/trash.svg");
  cardDeleteImg.setAttribute("alt", "Image of a trashcan.");
  cardDeleteImg.setAttribute("title", "Delete entire card.");
  cardDeleteBtn.append(cardDeleteImg);
  cardHeaderAndDelete.appendChild(cardDeleteBtn);
  entireCard.appendChild(cardHeaderAndDelete);

  const validateSpanTextName = document.createElement("span");
  const validateSpanTextID = document.createElement("span");
  let newForm = document.createElement("form");
  newForm.setAttribute("action", "");
  newForm.setAttribute("method", "post");
  entireCard.appendChild(newForm);

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
  nameInput.setAttribute("pattern", "^[A-Za-z]+(\\s[A-Za-z]+)+$"); // TODO: Allow hyphens and more name types
  nameInput.classList.add("formValidate");
  newForm.appendChild(nameInput);
  newForm.appendChild(validateSpanTextName);

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
  idInput.setAttribute("pattern", "^\\d{5}$"); //regex anchors
  newForm.appendChild(idInput);
  newForm.appendChild(validateSpanTextID);

  // TODO: validate email as well.
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

  cardStatus.exists = true;
  return fragment;
}
