import getRandomInRange from '../random.js';
import runGame from '../index.js';

const rule = 'What number is missing in the progression?'; // Правила

const hideCorrect = (progression, hiddenIndex) => {
  const finalprog = progression;
  finalprog[hiddenIndex] = '..';
  return finalprog.join(' ');
};

const getProgression = (length, start, step) => {
  const progression = []; // прогрессия
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const getGameData = () => {
  const length = getRandomInRange(5, 10); // длинна прогрессии
  const start = getRandomInRange(1, 50); // старт прогрессии
  const step = getRandomInRange(1, 25); // шаг (разность прогрессии)
  const progression = getProgression(length, start, step); // создание прогрессии
  const hiddenIndex = getRandomInRange(0, length - 1); // скрытый n-ый элемент прогрессии
  const correct = String(progression[hiddenIndex]);
  const quest = hideCorrect(progression, hiddenIndex);
  return [quest, correct];
};

const startProgression = () => {
  runGame(getGameData, rule);
};

export default startProgression;
