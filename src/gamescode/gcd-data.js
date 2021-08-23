import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.'; // Правила

const answer = (num1, num2) => {
    const minnum = Math.min(num1, num2);
    let gcd = 1;
    for (let i = 1; i <= minnum; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return String(gcd);
};

const gameData = () => {
    const num1 = getRandomInRange(1, 100);
    const num2 = getRandomInRange(1, 100);
    const correct = answer(num1, num2);
    const quest = `${num1} ${num2}`;
    return [quest, correct];
};

const startGcd = () => {
    Game(gameData, rule);
};

export default startGcd;
