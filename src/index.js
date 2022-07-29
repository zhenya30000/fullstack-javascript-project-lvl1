import readlineSync from 'readline-sync';

let scores = 0;
let userName = '';
let looseFlag = false;

export const sayHi = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hi, ${userName}!`);
};

export const declareRules = (string) => {
  console.log(string);
};

export const addScores = () => {
  scores += 1;
  if (scores === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export const userSucceed = () => {
  console.log('Correct!');
  addScores();
};

export const madeMistake = (answer, correctAnswer) => {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
  );
  console.log(`Let's try again, ${userName}!`);
  looseFlag = true;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const startGame = (questions, rules, correctAnswer) => {
  sayHi();
  declareRules(rules);
  for (let i = 0; i < questions.length; i += 1) {
    if (looseFlag) {
      break;
    }
    askQuestion(questions[i]);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer[i]) {
      userSucceed();
    } else {
      madeMistake(userAnswer, correctAnswer[i]);
    }
  }
};
