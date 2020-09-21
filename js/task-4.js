let counterValue = 0;

const incrBtnEl = document.querySelector('[data-action="increment"]');
const decrBtnEl = document.querySelector('[data-action="decrement"]');
const valueEl = document.querySelector('#value');

incrBtnEl.addEventListener('click', onIncrClick);
decrBtnEl.addEventListener('click', onDecrClick);

function onIncrClick() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
onIncrClick();

function onDecrClick() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
onDecrClick();
