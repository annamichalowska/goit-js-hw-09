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
    if (selectedDates[0] < new Date()) {
      alert('Please choose a date in the future');
      buttonStart.disabled = true;
    } else {
      buttonStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', { ...options });

const newData = options.defaultDate;
console.log(newData);
console.log(newData.getTime());

const actualData = new Date();
console.log(actualData);
console.log(actualData.getTime());
