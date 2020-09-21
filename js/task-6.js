const valInpEl = document.querySelector('#validation-input');

valInpEl.addEventListener('blur', onInputValueCheck);

function onInputValueCheck(item) {
  if (
    item.currentTarget.getAttribute('data-length') >
    item.currentTarget.value.length
  ) {
    valInpEl.classList.add('invalid');
    valInpEl.classList.remove('valid');
  } else {
    valInpEl.classList.add('valid');
    valInpEl.classList.remove('invalid');
  }
}
