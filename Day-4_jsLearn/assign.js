// Step 1: Create an empty array to store user input
const numbers = [];

// Step 2: Use a loop to prompt the user for input until they choose to stop
let userInput;
while (userInput !== "done") {
  userInput = prompt("Enter a number (or 'done' to calculate the average):");

  // Step 3: Check if the input is a valid number and not 'done'
  if (userInput !== null && userInput !== "" && userInput !== "done") {
    const number = parseFloat(userInput);

    // Step 4: Add the valid number to the array
    if (!isNaN(number)) {
      numbers.push(number);
    } else {
      alert("Invalid input. Please enter a valid number.");
      console.log("Invalid input. Please enter a valid number.");
    }
  }
}

// Step 5: Calculate the average of the numbers in the array
// if (numbers.length > 0) {
//   const sum = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
//   const average = sum / numbers.length;
//   alert(`The average of the numbers is: ${average}`);
// } else {
//   alert("No valid numbers entered.");
// }

if(number.length> 0){
    
}
