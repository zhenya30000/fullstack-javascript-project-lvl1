import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '*', '-'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+': return `${num1 + num2}`;
    case '*': return `${num1 * num2}`;
    case '-': return `${num1 - num2}`;
    default: throw new Error(`Operator ${operator} - doesn't supported`);
  }
};

const generateRound = () => {
  const firstValue = getRandomInRange(20);
  const secondValue = getRandomInRange(20);
  const operator = operators[getRandomInRange(2)];
  const question = `${firstValue} ${operator} ${secondValue}`;
  const answer = calculate(firstValue, secondValue, operator);
  return [question, answer];
};

export default () => startGame(rules, generateRound);
