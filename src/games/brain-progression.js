#!/usr/bin/env node

import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const questionAnswerPair = [];
  let nextItem = getRandomInRange(90);
  const increment = getRandomInRange(10, 1);
  const arrayLength = getRandomInRange(10, 5);
  const hiddenSymbolIndex = getRandomInRange(arrayLength, 2);
  questionAnswerPair.push([`${nextItem}`]);
  for (let i = 0; i < arrayLength - 1; i += 1) {
    if (i === hiddenSymbolIndex - 1) {
      questionAnswerPair[0] += ' ..';
      nextItem += increment * 2;
      questionAnswerPair.push(`${nextItem - increment}`);
      questionAnswerPair[0] += ` ${nextItem}`;
      i += 2;
    }
    nextItem += increment;
    questionAnswerPair[0] += ` ${nextItem}`;
  }
  questionAnswerPair[0] = questionAnswerPair[0].toString();
  return questionAnswerPair;
};

startGame(rules, generateRound);
