#!/usr/bin/env node
import startGame from '../src/index.js';

const questions = [7, 57, 73];
const correctAnswers = [];
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

for (let i = 0; i < questions.length; i += 1) {
  for (let j = 2; j < questions[i]; j += 1) {
    if (questions[i] % j === 0) {
      correctAnswers.push('no');
      break;
    } else if (j === questions[i] - 1) {
      correctAnswers.push('yes');
      break;
    }
  }
}

startGame(questions, rules, correctAnswers);
