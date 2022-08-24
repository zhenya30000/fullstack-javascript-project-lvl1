#!/usr/bin/env node

import startGame from '../index.js';
import getRandomInRange from '../helpers.js';

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const questionAnswerPair = [];
  const firstVal = getRandomInRange(50, 1);
  const secondVal = getRandomInRange(50, 1);
  questionAnswerPair.push(`${firstVal} ${secondVal}`);
  const gcd = (num1, num2) => {
    if (num2 === 0) {
      return num1;
    }
    return gcd(num2, num1 % num2);
  };
  questionAnswerPair.push(`${gcd(Number(firstVal), Number(secondVal))}`);
  return questionAnswerPair;
};

startGame(rules, generateRound);
