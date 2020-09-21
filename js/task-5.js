const inputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onNameOutput);
function onNameOutput(element) {
  if (element.currentTarget.value !== ``) {
    nameOutputEl.textContent = element.currentTarget.value;
  } else {
    nameOutputEl.textContent = 'незнакомец';
  }
}
