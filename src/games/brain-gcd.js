import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => ((num2 === 0) ? num1 : getGcd(num2, num1 % num2));

const generateRound = () => {
  const firstVal = getRandomInRange(50, 1);
  const secondVal = getRandomInRange(50, 1);
  const question = `${firstVal} ${secondVal}`;
  const answer = `${getGcd(firstVal, secondVal)}`;
  return [question, answer];
};

export default () => startGame(rules, generateRound);
