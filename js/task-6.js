// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.Если введено подходящее количество, то border инпута
// становится зеленым, если неправильное - красным. Для добавления стилей,
// используй CSS - классы valid и invalid.


const refs =  {
    input: document.querySelector('#validation-input')
}

refs.input.addEventListener('blur', onInputBlur);
refs.input.addEventListener('focus', onInputFocus )
function onInputBlur() {
    refs.input.value.length === Number(refs.input.getAttribute('data-length'))
        ? refs.input.classList.add('valid')
        : refs.input.classList.add('invalid');
}
function onInputFocus() {
    refs.input.classList.remove('valid');
    refs.input.classList.remove('invalid');
}