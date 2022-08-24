#!/usr/bin/env node

import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const questionAnswerPair = [];
  questionAnswerPair.push(getRandomInRange(100));
  const isEven = (questionAnswerPair[0] % 2 === 0) ? 'yes' : 'no';
  questionAnswerPair.push(isEven);
  return questionAnswerPair;
};

startGame(rules, generateRound);
