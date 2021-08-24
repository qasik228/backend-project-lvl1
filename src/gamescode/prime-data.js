import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // Правила
// тест простоты
const answer = (quest) => {
  if (quest === 1) {
    return 'no';
  }
  const check = Math.sqrt(quest);
  for (let i = 2; i <= Math.floor(check); i += 1) {
    if (quest % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const gameData = () => {
  const quest = getRandomInRange(1, 100);
  const correct = answer(quest);
  return [quest, correct];
};

const startPrime = () => {
  Game(gameData, rule);
};

export default startPrime;
