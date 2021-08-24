import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'; // Правила

const gameData = () => {
  const quest = getRandomInRange(1, 100);
  const correct = quest % 2 === 0 ? 'yes' : 'no'; // проверка четности и определение верного ответа
  return [quest, correct];
};

const startEven = () => {
  Game(gameData, rule);
};

export default startEven;
