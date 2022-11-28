const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    let colorValue = getRandomHexColor();
    document.body.style.backgroundColor = colorValue;
  }, 1000);

  buttonStart.disabled = true;
  buttonStop.disabled = false;
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);

  buttonStop.disabled = true;
  buttonStart.disabled = false;
});
