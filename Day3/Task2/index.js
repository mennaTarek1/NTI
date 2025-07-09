const answerField = document.getElementById("Answer");
const equalButton = document.querySelector('input[type="button"][value="="]');

let userInput = "";

function updateDisplay() {
  answerField.value = userInput;
}


function EnterNumber(value) {
  userInput += value;
  updateDisplay();
}


function EnterOperator(operator) {
  userInput += operator;
  updateDisplay();
}

function EnterClear() {
  userInput = "";
  updateDisplay();
}


function handleEqual() {
  try {

    if (!/^[0-9+\-*/. ()]+$/.test(userInput)) {
      throw new Error("Invalid input");
    }

    userInput = eval(userInput).toString();
    updateDisplay();
  } catch {
    answerField.value = "Error";
    userInput = "";
  }
}


equalButton.addEventListener("click", handleEqual);
