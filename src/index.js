import readlineSync from 'readline-sync';

export default (questions, rules, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer[i]) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
