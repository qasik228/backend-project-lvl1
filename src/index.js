import readlineSync from 'readline-sync';

const round = 3; // Кол-во раундов
// Правила должны приходить извне

// Код проверки ответов
const runGame = (gameData, rule) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}!`);
  console.log(rule); // Правила игры
  // Начало цикла
  for (let i = 0; i < round; i += 1) {
    const [quest, correct] = gameData();
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    // Проверка ответа игрока
    if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`); // Shit happens
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!'); // Харошь
  }
  console.log(`Congratulations, ${name}!`); // OMG MLG
};
export default runGame;
