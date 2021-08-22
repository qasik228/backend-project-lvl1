import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'What is the result of the expression?'; // Правила
const sign = ['+', '-', '*'];

const answer = (num1, num2, symbol) => {
  if (symbol === '+') {
    return num1 + num2;
  }
  if (symbol === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

const gameData = () => {
  const num1 = getRandomInRange(1, 100);
  const num2 = getRandomInRange(1, 100);
  const symbol = sign[getRandomInRange(0, sign.length - 1)];
  const correct = String(answer(num1, num2, symbol));
  const quest = `${num1} ${symbol} ${num2}`;
  return [quest, correct];
};

const startCalc = () => {
  Game(gameData, rule);
};

export default startCalc;
