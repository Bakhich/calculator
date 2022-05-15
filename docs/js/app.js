let inputSum = document.querySelector('.inputSum');
let inputPerc = document.querySelector('.inputPerc');
let inputMonth = document.querySelector('.inputMonth');

let button = document.querySelector('button');

let result = document.querySelector('.result');
let result1 = document.querySelector('.result1');
let result2 = document.querySelector('.result2');

let err = document.querySelector('.error');

button.onclick = function () {
    let sum = +inputSum.value;
    let perc = +inputPerc.value;
    let mnth = +inputMonth.value;

    if (sum > 0 & perc > 0 & mnth > 0) {
    result.innerHTML = (sum + (sum * perc / 100));
    result1.innerHTML = (result.innerHTML / mnth);
    result2.innerHTML = (result.innerHTML - sum);
    inputSum.value = '';
    inputPerc.value = '';
    err.innerHTML = ''
    } else {
        result.innerHTML = '';
        result1.innerHTML = '';
        result2.innerHTML = '';
        err.innerHTML = 'Введите целое число!'
    }
}



