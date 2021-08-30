import getRandomInRange from '../random.js';
import runGame from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // Правила
// тест простоты
const isPrime = (quest) => {
  if (quest < 2) {
    return false;
  }
  const check = Math.sqrt(quest);
  for (let i = 2; i <= Math.floor(check); i += 1) {
    if (quest % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const quest = getRandomInRange(1, 100);
  const correct = isPrime(quest) ? 'yes' : 'no';
  return [quest, correct];
};

const startPrime = () => {
  runGame(getGameData, rule);
};

export default startPrime;
