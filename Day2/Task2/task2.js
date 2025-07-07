//question(2):********************
/*
2-Write a script to determine whether the entered string is palindrome or not.
Ask the user whether to consider case of the entered string or not, 
handle both cases in your script i.e. 
RADAR NOON MOOM are palindrome.
Note: raDaR is not a palindrome if user requested considering case of entered string.

*/
let input = prompt("Enter word:");
let isNumber = !isNaN(input);
if (isNumber) {
  alert("Please enter a valid string, not a number.");
}
let caseSensitive = prompt(
  "Do you want to consider case sensitivity? (yes/no)"
);
if (caseSensitive.toLowerCase() === "no") {
  input = input.toLowerCase();
}
let reversed = "";
for (let i = input.length - 1; i >= 0; i--) {
  reversed += input[i];
}
if (input === reversed) {
  alert("it's a palindrome.");
} else {
  alert("it's not a palindrome.");
}
