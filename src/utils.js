import { INIT_TIME } from './constants';

export const shuffle = function (arr) {
  let a = arr;
  for (let i = a.length; i; i--) {
    let j = Math.floor(Math.random() * i);
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }

  return a;
};

export const initial_state = function () {
  return Object.assign({
    start: false,
    combo: 0,
    answered: 0,
    correct: 0,
    time: INIT_TIME,
    questions: [{
      color: shuffle([0, 1, 2, 3]),
      state: ''
    }, {
      color: shuffle([0, 1, 2, 3]),
      state: ''
    }]
  }, {});
};
