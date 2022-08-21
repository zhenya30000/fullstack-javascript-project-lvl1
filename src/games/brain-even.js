#!/usr/bin/env node
import startGame from '../index.js';

const questions = [13, 26, 47];
const correctAnswers = [];
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

for (let i = 0; i < questions.length; i += 1) {
  if (questions[i] % 2 === 0) {
    correctAnswers.push('yes');
  } else {
    correctAnswers.push('no');
  }
}

startGame(questions, rules, correctAnswers);
