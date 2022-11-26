import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonStart = document.querySelector('button[data-start]');
const daysToNewDate = document.querySelector('span[data-days]');
const hoursToNewDate = document.querySelector('span[data-hours]');
const minutesToNewDate = document.querySelector('span[data-minutes]');
const secondsToNewDate = document.querySelector('span[data-seconds]');
let timerId = null;

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

buttonStart.disabled = true;

const addLeadingZero = value => String(value).padStart(2, 0);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }

    const countdownTimer = () => {
      const nowDate = new Date();
      localStorage.setItem('selectedData', selectedDates[0]);
      const selectData = new Date(localStorage.getItem('selectedData'));

      if (!selectData) return;

      const diffDates = selectData - nowDate;
      const { days, hours, minutes, seconds } = convertMs(diffDates);
      daysToNewDate.textContent = days;
      hoursToNewDate.textContent = addLeadingZero(hours);
      minutesToNewDate.textContent = addLeadingZero(minutes);
      secondsToNewDate.textContent = addLeadingZero(seconds);

      if (
        daysToNewDate.textContent === '0' &&
        hoursToNewDate.textContent === '00' &&
        minutesToNewDate.textContent === '00' &&
        secondsToNewDate.textContent === '00'
      ) {
        clearInterval(timerId);
      }
    };

    const onClick = () => {
      if (timerId) {
        clearInterval(timerId);
      }
      timerId = setInterval(countdownTimer, 1000);
    };

    buttonStart.addEventListener('click', onClick);
  },
};

flatpickr('#datetime-picker', { ...options });
