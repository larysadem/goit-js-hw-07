// Напиши скрипт, который для каждого элемента 
// массива ingredients создаст отдельный li, после чего 
// вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const navElem = document.querySelector('#ingredients');

const allElem = ingredients.map(ingredient => {
    const elemOfIngregients = document.createElement('li');
    elemOfIngregients.textContent = `${ingredient}`;
    return elemOfIngregients;
});

navElem.append(...allElem);
