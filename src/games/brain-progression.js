#!/usr/bin/env node

import startGame from '../index.js';

const rules = 'What number is missing in the progression?';
const correctAnswers = [];

const generateQuestions = (questionsCount) => {
  const result = [];
  const getRandomInRange = (max, min = 0) => Math.floor((Math.random() * (max - min)) + min);
  for (let j = 0; j < questionsCount; j += 1) {
    let nextItem = getRandomInRange(90);
    const increment = getRandomInRange(10, 1);
    const arrayLength = getRandomInRange(10, 5);
    const hiddenSymbolIndex = getRandomInRange(arrayLength, 2);
    result.push([`${nextItem}`]);
    for (let i = 0; i < arrayLength - 1; i += 1) {
      if (i === hiddenSymbolIndex - 1) {
        result[j] += ' ..';
        nextItem += increment * 2;
        correctAnswers.push(`${nextItem - increment}`);
        result[j] += ` ${nextItem}`;
        i += 2;
      }
      nextItem += increment;
      result[j] += ` ${nextItem}`;
    }
    result[j] = result[j].toString();
  }
  return result;
};

const questions = generateQuestions(3);

startGame(questions, rules, correctAnswers);
