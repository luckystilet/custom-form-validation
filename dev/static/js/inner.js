const var1 = document.getElementById('option_1');
const var2 = document.getElementById('option_2');
const overlay = document.getElementsByClassName('form-section-left__overlay');
const number = document.getElementsByClassName('form-section-left__number');
const descr = document.getElementsByClassName('form-section-left__descr');
const submit = document.getElementById('form-submit');

var1.addEventListener('click', function(){
	overlay[0].classList.add('form-section-left__overlay--active');
	number[0].innerHTML = '47,6%';
	descr[0].innerHTML = 'пользователей — Вариант А';
	activeSubmit();
});
var2.addEventListener('click', function(){
	overlay[0].classList.add('form-section-left__overlay--active');
	number[0].innerHTML = '52,4%';
	descr[0].innerHTML = 'пользователей — Вариант Б';
	activeSubmit();
});
function activeSubmit(){
	submit.classList.add('form-block__submit--active');
}