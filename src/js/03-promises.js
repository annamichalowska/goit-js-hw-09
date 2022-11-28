import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const inputDelay = document.querySelector('input[name=delay]');
const inputDelayStep = document.querySelector('input[name=step]');
const inputAmount = document.querySelector('input[name=amount]');
const createPromisesBtn = document.querySelector('button');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}

const submitClick = event => {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let timeDelay = Number(inputDelay.value);
  let stepDelay = Number(inputDelayStep.value);
  let amountValue = Number(inputAmount.value);

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, timeDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    timeDelay += stepDelay;
  }
  createPromisesBtn.disabled = true;
};

form.addEventListener('submit', submitClick);
