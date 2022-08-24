#!/usr/bin/env node

import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const questionAnswerPair = [];
  const operators = ['+', '*'];
  const firstValue = getRandomInRange(20);
  const secondValue = getRandomInRange(20);
  const operator = operators[Math.round(Math.random())];
  questionAnswerPair.push(`${firstValue} ${operator} ${secondValue}`);
  if (operator === '+') {
    questionAnswerPair.push(`${Number(firstValue) + Number(secondValue)}`);
  } else {
    questionAnswerPair.push(`${Number(firstValue) * Number(secondValue)}`);
  }
  return questionAnswerPair;
};

startGame(rules, generateRound);
