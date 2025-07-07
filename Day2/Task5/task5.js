  function getValidNumber(promptText) {
      let num;
      do {
        const input = prompt(promptText);
        num = parseFloat(input);
      } while (isNaN(num));
      return num;
    }

    let a = getValidNumber("Enter the first number:");
    let b = getValidNumber("Enter the second number:");
    let c = getValidNumber("Enter the third number:");

    let sum = a + b + c;
    let mul = a * b * c;
    let div = a / b / c;

     document.write(`<span class="label">sum of the 3 values </span>${a}+${b}+${c} = ${sum}<br> <br>`);
     document.write(`<span class="label">multiplication of the 3 values </span>${a}*${b}*${c} = ${mul}<br> <br>`);
     document.write(`<span class="label">division of the 3 values </span>${a}/${b}/${c} = ${div}<br> <br>`);