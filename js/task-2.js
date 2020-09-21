const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const contIngEl = document.querySelector('#ingredients');
console.log(contIngEl);
const products = ingredients.map(element => {
  const itemsEl = document.createElement('li');
  itemsEl.textContent = element;
  return itemsEl;
});
// console.log(products);
contIngEl.append(...products);
