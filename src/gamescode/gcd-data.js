import getRandomInRange from '../random.js';
import runGame from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.'; // Правила

// нахождение НОД двух чисел
const getGcd = (num1, num2) => {
  const minnum = Math.min(num1, num2);
  let gcd = 1;
  for (let i = 1; i <= minnum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return String(gcd);
};

const getGameData = () => {
  const num1 = getRandomInRange(1, 100); // число 1
  const num2 = getRandomInRange(1, 100); // число 2
  const correct = getGcd(num1, num2); // верный ответ
  const quest = `${num1} ${num2}`; // задача
  return [quest, correct];
};

const startGcd = () => {
  runGame(getGameData, rule);
};

export default startGcd;
