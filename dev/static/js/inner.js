const var1 = document.getElementById('option_1');
const var2 = document.getElementById('option_2');
const overlay = document.getElementsByClassName('form-section-left__overlay');
const number = document.getElementsByClassName('form-section-left__number');
const descr = document.getElementsByClassName('form-section-left__descr');

var1.addEventListener('click', function(){
	overlay[0].classList.add('form-section-left__overlay--active');
	// .overlay[0].innerHTML('')
});
var2.addEventListener('click', function(){
	overlay[0].classList.add('form-section-left__overlay--active');
});