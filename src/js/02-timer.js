import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const buttonStart = document.querySelector('button[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', { ...options });

const newData = options.defaultDate;
console.log(newData);
console.log(newData.getTime());

const actualData = new Date();
console.log(actualData);
console.log(actualData.getTime());

if (newData.getTime() > actualData.getTime()) {
  console.log('ZŁA DATA!!!!!');
  buttonStart.disabled = true;
} else {
  console.log('DOBRA DATA!!!!');
  buttonStart.disabled = false;
}

//console.clear();
