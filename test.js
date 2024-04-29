const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a number: ', (number) => {
  // Convert input string to a number
  number = parseInt(number);

  // Check if the number is even or odd
  if (number % 2 === 0) {
    console.log(`${number} is even.`);
  } else {
    console.log(`${number} is odd.`);
  }

  rl.close();
});
