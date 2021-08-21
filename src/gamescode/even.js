import readlineSync from 'readline-sync';

const round = 3; // Кол-во раундов
const rule = 'Answer "yes" if the number is even, otherwise answer "no".'; // Правила

// Код игры
const evenGame = (gameData) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello ${name}!`);
    console.log(rule);
    // Начало цикла
    for (let i = 1; i<=round; i++) {
        const [quest, correct] = gameData();
        console.log(`Question: ${quest}`);
        const answer = readlineSync.question('Your answer: ');
        // Проверка ответа игрока
        if (answer === correct) {
            console.log('Correct!'); // Харошь
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'`); // Shit happens
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`) // OMG MLG
};
export default evenGame;
