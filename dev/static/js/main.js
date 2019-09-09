const form = document.getElementById('form-block__main');
form.addEventListener('submit', function(){
	validator();
});

const inputs = form.elements;
let rulesList;
let errors = [];
const submitBtn = document.getElementById('form-submit');
let submitClick = false;

for(let i = 0; i < inputs.length; i++){
	inputs[i].addEventListener('change', function(){
		validator();
	});
}

const rules = {
	required: function(el){
		if(el.value != ''){
			return true;
		}
		return false;
	},
	email: function(el){
		const regemail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
		if (el.value != '' && !regemail.test(el.value)){
			el.classList.add('error');
		}
		let result = regemail.test(el.value);
		if(result) el.classList.remove('error');
		return result
	},
	name: function(el){
		const regname = /^[а-яА-Я]{3,16}$/;
		if (el.value != '' && !regname.test(el.value)){
			el.classList.add('error');
		}
		let result = regname.test(el.value);
		if(result) el.classList.remove('error');
		return result
	},
	pass: function(el){
		const regtel = /^[a-zA-Z0-9_-]{6,18}$/;
		if (el.value != '' && !regtel.test(el.value)){
			el.classList.add('error');
		}
		let result = regtel.test(el.value);
		if(result) el.classList.remove('error');
		return result
	},
	radio: function(el){
		const rad = document.getElementsByName('radio');
		for (let i=0; i<rad.length; i++) {
			if (rad[i].checked) {
				return true;
			}
		}
	},
	checkbox: function(el){
		return el.checked;
	}
}
const changePlaceholder = {
	required: function(el){
		if(el.value != ''){
			return true;
		}
		if(el.name == 'name') el.placeholder = 'Введите свое имя';
		if(el.name == 'email') el.placeholder = 'Введите свой email';
		if(el.name == 'pass') el.placeholder = 'Придумайте новый пароль';
	}
}

function showErrors(arr){
	console.log(arr);
}

function validator(e){
	errors = [];
	for(let i = 0; i < inputs.length; i++){
		rulesList = inputs[i].dataset.rule;
		rulesList = rulesList.split(' ');
		for(let j = 0; j < rulesList.length; j++){
			if(rulesList[j] == 'submit' || rulesList[j] == 'skip'){
				continue;
			}
			if(rulesList[j] in rules){
				if(submitClick) changePlaceholder['required'](inputs[i]); // Изменение placeholder только, если кулик был по кнопке submit
				if(!rules[rulesList[j]](inputs[i])){
					errors.push({
						name: inputs[i].name,
						error: rulesList[j]
					});
				}
			}
		}
	}
	if(errors.length == 0){
		submitBtn.classList.add('form-block__submit--valid');
	}
	if(errors.length > 0){
		showErrors(errors);
		submitBtn.classList.remove('form-block__submit--valid');
	}
	submitClick = false;
}

submitBtn.addEventListener('click', function(){
	submitClick = true;
	validator();
	if(errors.length == 0){
		form.submit();
	}
});
