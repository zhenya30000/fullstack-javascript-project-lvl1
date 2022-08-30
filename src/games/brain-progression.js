import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const questionAnswerPair = [];
  const questions = [];
  let nextItem = getRandomInRange(90);
  const increment = getRandomInRange(10, 1);
  const arrayLength = getRandomInRange(10, 5);
  let answer = 0;
  const hiddenSymbolIndex = getRandomInRange(arrayLength - 1);
  for (let i = 0; i <= arrayLength - 1; i += 1) {
    questions.push(nextItem);
    nextItem += increment;
  }
  answer = `${questions[hiddenSymbolIndex]}`;
  questions[hiddenSymbolIndex] = '..';
  questionAnswerPair.push(questions.join(' '));
  questionAnswerPair.push(answer);
  return questionAnswerPair;
};

export default () => startGame(rules, generateRound);
