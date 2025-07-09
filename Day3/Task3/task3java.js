function getDayName(date) {
  const WeekDays = [
    "Sunday", "Monday", "Tuesday",
    "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  return WeekDays[new Date(date).getDay()];
}

function validateDate(dateString) {
  const formatRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!formatRegex.test(dateString)) {
    return false;
  }
  const parsedDate = new Date(dateString);
  return !isNaN(parsedDate.getTime());
}

function handleCheckDay() {
  const dateInput = document.getElementById("dateInput").value;
  const resultDiv = document.getElementById("result");

  if (!validateDate(dateInput)) {
    resultDiv.textContent = "Invalid date format. Please use YYYY-MM-DD.";
    resultDiv.style.color = "red";
    return;
  }

  const day = getDayName(dateInput);
  resultDiv.textContent = `The day is: ${day}.`;
  resultDiv.style.color = "green";
}