import colors from './colors.js';

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

class Body {
  constructor() {
    this.intervalId = null;
  }

  startToChangeBackground() {
    refs.startBtn.setAttribute('disabled', true);
    this.intervalId = setInterval(() => {
      refs.body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  }

  stopToChangeBackground() {
    refs.startBtn.removeAttribute('disabled', false);
    clearInterval(this.intervalId);
  }
}

const body = new Body();

refs.startBtn.addEventListener(
  'click',
  body.startToChangeBackground.bind(body)
);
refs.stopBtn.addEventListener('click', body.stopToChangeBackground.bind(body));
