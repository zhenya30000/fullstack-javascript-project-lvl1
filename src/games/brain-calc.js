import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '*', '-'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return `${num1 + num2}`;
    case '*': return `${num1 * num2}`;
    case '-': return `${num1 - num2}`;
    default: return null;
  }
};

const generateRound = () => {
  const firstValue = getRandomInRange(20);
  const secondValue = getRandomInRange(20);
  const operator = operators[getRandomInRange(2)];
  return [`${firstValue} ${operator} ${secondValue}`, calculate(firstValue, secondValue, operator)];
};

export default () => startGame(rules, generateRound);
