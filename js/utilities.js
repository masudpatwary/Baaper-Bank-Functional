function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldString = inputField.value;
  const newDipositValue = parseFloat(inputFieldString);
  return newDipositValue;
}

function getTextElementValueById(elementValue) {
  const previousDeposit = document.getElementById(elementValue);
  const previousDipositString = previousDeposit.innerText;
  const previousAmount = parseFloat(previousDipositString);
  return previousAmount;
}

function setElementValueById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
}
