import getRandomInRange from '../random.js';
import Game from '../index.js';

const gameData = () => {
    const num1 = getRandomInRange(1, 100);
    const num2 = getRandomInRange(1, 100);
    const correct = answer(num1, num2);
    const quest = `${num1} ${num2}`;
    return [quest, correct];
  };

const startPrime = () => {
    Game(gameData, rule);
  };
  
  export default startPrime;