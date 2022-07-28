#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hi, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const numbers = [13, 26, 47];
let correctAnswer = '';
let mistake = false;

const userSucceed = () => {
  console.log('Correct!');
};

const madeMistake = (answer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  mistake = true;
};

const correctAnswerAssign = (number) => {
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
};

const checkAnswer = (userAnswer) => {
  if (userAnswer === correctAnswer) {
    userSucceed();
  } else {
    madeMistake(userAnswer);
  }
};

for (let i = 0; i < numbers.length; i += 1) {
  if (mistake) { break; }
  console.log(`Question: ${numbers[i]}`);
  const userAnswer = readlineSync.question('Your answer: ');
  correctAnswerAssign(numbers[i]);
  checkAnswer(userAnswer);
  if (i === numbers.length - 1) {
    console.log(`Congratulations, ${userName}!`);
  }
}
