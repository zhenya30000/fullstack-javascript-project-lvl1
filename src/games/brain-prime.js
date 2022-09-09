import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let j = 2; j < number; j += 1) {
    if (number % j === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(100, 3);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) === true ? 'yes' : 'no';
  return [question, answer];
};

export default () => startGame(rules, generateRound);
