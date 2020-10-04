const valInpEl = document.querySelector('#validation-input');

valInpEl.addEventListener('blur', onInputValueCheck);

function onInputValueCheck(item) {
  if (
    item.currentTarget.value.length !=
    item.currentTarget.getAttribute('data-length')
  ) {
    valInpEl.classList.add('invalid');
  } else {
    valInpEl.classList.replace('invalid', 'valid');
  }
}
