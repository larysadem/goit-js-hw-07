// Счетчик состоит из спана и кнопок, которые должны 
// увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится
// текущее значение счетчика. Создай функции increment и
// decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и 
// обновление интерфейса

const refs = {
    removeCounter: document.querySelector('[data-action="decrement"]'),
    counter: document.querySelector('#value'),
    addCounter: document.querySelector('[data-action="increment"]')
};

refs.removeCounter.addEventListener('click', onDecrementBtn);
refs.addCounter.addEventListener('click', onIcrementBtn);
let counterValue = 0;
function onDecrementBtn() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};
function onIcrementBtn() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};