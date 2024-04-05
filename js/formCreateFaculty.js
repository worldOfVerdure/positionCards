import {createDropDown} from "./dropDownMenu.js";

export function finishFaculty (newForm) {
  const classLabel = document.createElement("label");
  classLabel.innerText = "Classes: (no more than 6)";
  newForm.appendChild(classLabel);
  newForm = createDropDown(newForm);

  const validateSpanTextSalary = document.createElement("span");
  const moneyLabel = document.createElement("label");
  moneyLabel.htmlFor = "salary";
  moneyLabel.innerText = "Salary:";
  newForm.appendChild(moneyLabel);
  const moneyInput = document.createElement("input");
  moneyInput.setAttribute("type", "text");
  moneyInput.setAttribute("id", "salary");
  moneyInput.setAttribute("name", "user_salary");
  moneyInput.setAttribute("required", "");
  moneyInput.setAttribute("pattern", "^\\d{5,6}$");
  moneyInput.classList.add("formValidate");
  newForm.appendChild(moneyInput);
  newForm.appendChild(validateSpanTextSalary);

  // TODO: ensure size of box doesn't increase with drop down menu fluctuations
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
