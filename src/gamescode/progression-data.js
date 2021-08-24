import getRandomInRange from '../random.js';
import Game from '../index.js';

const rule = 'What number is missing in the progression?'; // Правила

const progression = (massiv, a1, d) => {
    const prog = []; // прогрессия
    for (let i = 0; i < massiv; i += 1) {
        prog.push(a1 + d * i);
        
    }
    return prog;
};

const gameData = () => {
    let massiv = getRandomInRange(5, 10); // длинна прогрессии
    let a1 = getRandomInRange(1, 50); // старт прогрессии
    let d = getRandomInRange(1, 25); // шаг (разность прогрессии)
    const prog = progression(massiv, a1, d); // создание прогрессии
    const an = getRandomInRange(0, massiv-1); // скрытый n-ый элемент прогрессии
    const correct = String(prog[an]);
    prog[an] = '..';
    const quest = prog.join(' ');
    return [quest, correct];
  };

const startProgression = () => {
    Game(gameData, rule);
  };

export default startProgression;