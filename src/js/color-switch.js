import {colors} from './array-of-colors.js';
// const colors = [
//   '#FFFFFF',
//   '#2196F3',
//   '#4CAF50',
//   '#FF9800',
//   '#009688',
//   '#795548',
// ];

let timeout = null;
let activity = false;

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

refs.startBtn.addEventListener('click', start);
refs.stopBtn.addEventListener('click', stop);

// Сашина формула для создания рандомного числа индекса цвета в массиве
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


function start() {
  if (activity) {
    return;
  }
  timeout = setInterval(bgcChanger, 1000);
  activity = true;
  // правка ментора, чтоб кнопка не была активна после ее нажатия
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
};

function stop() {
  clearTimeout(timeout);
  activity = false;
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
};


function bgcChanger() {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};