//question3
/*
 3- write a script that accepts a string from user through prompt and count
 the number of ‘e’ characters in it.
*/

let userInput = prompt("write any word you want to check about character 'e':");
let count = 0;
for (let i = 0; i < userInput.length; i++) {
  if (userInput[i] === "e") {
    count++;
  }
}
alert("total number of character 'e' is:" + count);
