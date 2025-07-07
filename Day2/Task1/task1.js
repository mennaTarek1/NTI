 //question(1):
/*
Write your own function that can add n values ensure  
that all passing parameters are 
numerical values only.
*/

function addNumbers(...values) {
let total = 0;
for (let val of values) { 
if (typeof val !== "number" || isNaN(val)) {
return "numeric values only";
}
     total += val;
  }
 return total;
}
 console.log(addNumbers(1, 2, 3));  //6
 console.log(addNumbers(1,"Hello",3)); //numeric values only"