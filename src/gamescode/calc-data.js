import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'What is the result of the expression?'; // Правила
const sign = ['+', '-', '*'];
// получение верного ответа
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
  const num1 = getRandomInRange(1, 100); // число 1
  const num2 = getRandomInRange(1, 100); // число 2
  const symbol = sign[getRandomInRange(0, sign.length - 1)]; // выбор случайной арифметической операции
  const correct = String(answer(num1, num2, symbol)); // верный ответ
  const quest = `${num1} ${symbol} ${num2}`; // задача
  return [quest, correct];
};

const startCalc = () => {
  Game(gameData, rule);
};

export default startCalc;
