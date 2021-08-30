import getRandomInRange from '../random.js';
import runGame from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".'; // Правила

const isEven = (quest) => quest % 2 === 0;

const getGameData = () => {
  const quest = getRandomInRange(1, 100);
  const correct = isEven(quest) ? 'yes' : 'no'; // проверка четности и определение верного ответа
  return [quest, correct];
};

const startEven = () => {
  runGame(getGameData, rule);
};

export default startEven;
