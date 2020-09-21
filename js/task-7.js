const inputSizeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputSizeEl.addEventListener('input', onInputFontSize);

function onInputFontSize(el) {
  textEl.style.fontSize = el.currentTarget.value + 'px';
}
