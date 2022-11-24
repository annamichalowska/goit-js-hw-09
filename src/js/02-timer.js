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
const choiceData = () => {
  const newData = options.defaultDate;
  const actualData = new Date();
  console.log(newData);
  console.log(actualData);
  console.log(newData.getTime());
  console.log(actualData.getTime());
  if (newData.getTime() < actualData.getTime()) {
    console.log('ZŁA DATA!!!!!');
    buttonStart.disabled = false;
  } else {
    console.log('DOBRA DATA!!!!');
    buttonStart.disabled = true;
  }
};

//console.clear();
