import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = (getRandomInRange(100));
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) === true ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(rules, generateRound);
