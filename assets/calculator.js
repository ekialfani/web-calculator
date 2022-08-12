const calculator = {
	displayNumber: '0',
	operator: null,
	firstNumber: null,
	isWaitForSecondNumber: false,
}


function updateDisplay(){
	const display = document.querySelector('#display-number');

	display.innerHTML = calculator.displayNumber;
}


function clearDisplay(){
	calculator.displayNumber = '0';
	calculator.operator = null;
	calculator.firstNumber = null;
	calculator.isWaitForSecondNumber = false;
}

function inputNumber(number){
	const displayNumber = calculator.displayNumber;
	const operator = calculator.operator;

	if(number !== '.' && displayNumber === '0'){
		calculator.displayNumber = number;

	}else {
		calculator.displayNumber += number;
	}
}


const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
	button.addEventListener('click', function(e){
		const target = e.target;

		if(target.classList.contains('clear')){
			clearDisplay();
			updateDisplay();

			return;
		}

		inputNumber(target.textContent);
		updateDisplay();
	})
})