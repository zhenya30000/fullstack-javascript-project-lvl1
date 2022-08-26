import readlineSync from 'readline-sync';

const rounds = 3;

export default (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const getUserName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${getUserName}!`);
  console.log(rules);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
      );
      console.log(`Let's try again, ${getUserName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${getUserName}!`);
};
