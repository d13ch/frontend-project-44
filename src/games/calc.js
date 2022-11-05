const rules = () => {
  console.log('What is the result of the expression?');
};

const gameData = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;

  const operators = ['+', '-', '*'];
  const opIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[opIndex];

  const task = `${num1} ${operator} ${num2}`;

  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
  }
  return [task, result];
};

export { rules, gameData };