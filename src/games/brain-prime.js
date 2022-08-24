#!/usr/bin/env node

import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const questionAnswerPair = [getRandomInRange(100, 1)];
  for (let j = 0; j < questionAnswerPair[0]; j += 1) {
    if (questionAnswerPair[0] % j === 0) {
      questionAnswerPair.push('no');
      break;
    } else if (j === questionAnswerPair[0] - 1) {
      questionAnswerPair.push('yes');
      break;
    }
  }
  return questionAnswerPair;
};

startGame(rules, generateRound);
