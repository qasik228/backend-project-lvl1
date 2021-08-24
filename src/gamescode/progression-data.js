import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'What number is missing in the progression?'; // Правила

const getProgression = (massiv, a1, d) => {
  const progression = []; // прогрессия
  for (let i = 0; i < massiv; i += 1) {
    progression.push(a1 + d * i);
  }
  return progression;
};

const gameData = () => {
  const massiv = getRandomInRange(5, 10); // длинна прогрессии
  const a1 = getRandomInRange(1, 50); // старт прогрессии
  const d = getRandomInRange(1, 25); // шаг (разность прогрессии)
  const progression = getProgression(massiv, a1, d); // создание прогрессии
  const an = getRandomInRange(0, massiv - 1); // скрытый n-ый элемент прогрессии
  const correct = String(progression[an]);
  progression[an] = '..';
  const quest = progression.join(' ');
  return [quest, correct];
};

const startProgression = () => {
  Game(gameData, rule);
};

export default startProgression;
