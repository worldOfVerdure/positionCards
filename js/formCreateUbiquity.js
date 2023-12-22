import {toggleInnerBtn} from "./iconTray.js";
import {finishFaculty} from "./formCreateFaculty.js";

function deleteEntireCard(theMain) {
  // code here to properly remove objects and arrays and any data in the card creation process
  theMain.removeChild(theMain.firstElementChild);
}

export function createForm (memberType) { //first export at 12/22/2023 @ 11:31 am in Granpa's house. Dad is behind me working.
  toggleInnerBtn(); // needs to be imported so this file knows what the heck I am talking about
  const theMain = document.querySelector("main");
  const fragment = createFragment(memberType, theMain);
  theMain.append(fragment);
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

  const validateSpanText = document.createElement("span");
  const validateSpanText2 = document.createElement("span");
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
  nameInput.setAttribute("pattern", "^[A-Za-z]+(\\s[A-Za-z]+)+$"); //add name-name as an || with the \\s portion. TODO: Allow hyphens.
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
