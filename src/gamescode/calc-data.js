import getRandomInRange from '../random.js';
import runGame from '../index.js';

const rule = 'What is the result of the expression?'; // Правила
const sign = ['+', '-', '*'];
// получение верного ответа
const getCalc = (num1, num2, symbol) => {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator '${symbol}'`); // try {} cath {} ???
  }
};

const getGameData = () => {
  const num1 = getRandomInRange(1, 100); // число 1
  const num2 = getRandomInRange(1, 100); // число 2
  const symbol = sign[getRandomInRange(0, sign.length - 1)]; // случайной арифметической операции
  const correct = String(getCalc(num1, num2, symbol)); // верный ответ
  const quest = `${num1} ${symbol} ${num2}`; // задача
  return [quest, correct];
};

const startCalc = () => {
  runGame(getGameData, rule);
};

export default startCalc;
