import {createForm, changeForm} from "./formCreateUbiquity.js"; // first ever import

export const cardStatus = {
  exists: false,
};
// Expand or minimize plus icon button menu based on click event.
const addPositionBtn = document.getElementById("addCardBtn");
const hiddenBtns = document.querySelectorAll("button.innerBtn");
// Function call that toggles the class innerBtn.
export const toggleInnerBtn = () => {
  hiddenBtns.forEach(element=>{
    element.classList.toggle("innerBtn");
  }); // Suggestion: Could place all bottuns in a div and hide those to make code run faster.
}
// Adds an evenlistener to the plus button.
addPositionBtn.addEventListener("click", ()=>{
  toggleInnerBtn(); // TODO: Look up event delegation for a better solution
});
// Adds functionality to the inner buttons via aEL.
hiddenBtns.forEach((element, index)=>{
  element.addEventListener("click", ()=>{
    if (!cardStatus.exists)
      createForm(index);
    else
      changeForm(index);
  })});
