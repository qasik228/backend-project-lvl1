import getRandomInRange from '../random.js';
import evenGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'; // Правила

const gameData = () => {
  const quest = getRandomInRange(1, 100);
  const correct = quest % 2 === 0 ? 'yes' : 'no';
  return [quest, correct];
};

const startEven = () => {
  evenGame(gameData, rule);
};

export default startEven;
