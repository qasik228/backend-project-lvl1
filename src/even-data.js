import getRandomInRange from './random.js';
import evenGame from './gamescode/even.js';

const gameData = () => {
    const quest = getRandomInRange(1, 100);
    const correct = quest % 2 === 0 ? 'yes' : 'no';
    return [quest, correct];
};

const startEven = () => {
    evenGame(gameData);
};

export default startEven;
