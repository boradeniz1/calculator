const readline = require('readline');

let expression = '';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const prompt = () => {
  rl.question('Enter an operator or operand: ', (input) => {

    if (input === '=') {
      try {

        const result = eval(expression);
        console.log(`Result: ${result}`);
      } catch (e) {

        console.log('Invalid expression');
      }
      rl.close();
    } else {

      expression += input;
      prompt();
    }
  });
};


prompt();
