#!/usr/bin/env node
import startGame from '../src/index.js';

const rules = 'What is the result of the expression?';

const generateQuestions = (questionsCount) => {
  const result = [];
  const operators = ['+', '*'];
  let firstValue = 0;
  let secondValue = 0;
  let operator = '';
  for (let i = 0; i < questionsCount; i += 1) {
    firstValue = Math.round(Math.random() * 20);
    secondValue = Math.round(Math.random() * 20);
    operator = operators[Math.round(Math.random())];
    result.push(`${firstValue} ${operator} ${secondValue}`);
  }
  return result;
};

const questions = generateQuestions(3);

const generateAnswers = (equations) => {
  const result = [];
  for (let i = 0; i < equations.length; i += 1) {
    const [firstVal, operator, secondVal] = equations[i].split(' ');
    if (operator === '+') {
      result.push(`${Number(firstVal) + Number(secondVal)}`);
    } else {
      result.push(`${(Number(firstVal) * Number(secondVal))}`);
    }
  }
  return result;
};

const correctAnswers = generateAnswers(questions);

startGame(questions, rules, correctAnswers);
