import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (startNum, length, increment) => {
  const question = [];
  let nextNum = startNum;
  for (let i = 0; i <= length - 1; i += 1) {
    question.push(nextNum);
    nextNum += increment;
  }
  return question;
};

const generateRound = () => {
  const startNum = getRandomInRange(90);
  const increment = getRandomInRange(10, 1);
  const length = getRandomInRange(10, 5);
  const hiddenSymbolIndex = getRandomInRange(length - 1);
  const progression = (generateProgression(startNum, length, increment));
  const answer = `${progression[hiddenSymbolIndex]}`;
  progression[hiddenSymbolIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => startGame(rules, generateRound);
