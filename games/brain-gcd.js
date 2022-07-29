#!/usr/bin/env node
import * as engine from '../src/index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const questions = ['25 50', '100 52', '3 9'];

const generateAnswers = (equations) => {
  const result = [];
  for (let i = 0; i < equations.length; i += 1) {
    const [firstVal, secondVal] = equations[i].split(' ');
    const gcd = (num1, num2) => {
      if (num2 === 0) {
        return num1;
      }
      return gcd(num2, num1 % num2);
    };
    result.push(`${gcd(Number(firstVal), Number(secondVal))}`);
  }
  return result;
};

const correctAnswers = generateAnswers(questions);

engine.startGame(questions, rules, correctAnswers);
