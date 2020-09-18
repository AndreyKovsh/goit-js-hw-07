const categoriesEl = document.querySelectorAll('.item');
console.log(`'В списке ${categoriesEl.length} категории.'`);

categoriesEl.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов: ${item.querySelectorAll('li').length}`);
});
