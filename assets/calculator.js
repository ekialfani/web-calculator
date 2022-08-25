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


function inverseNumber(){
	if(calculator.displayNumber === '0'){
		return;
	}

	calculator.displayNumber *= -1;

}


function inputNumber(number){
	const displayNumber = calculator.displayNumber;
	const operator = calculator.operator;

	if((number !== '.' && displayNumber === '0') || (displayNumber === operator)){
		calculator.displayNumber = number;

	}else {
		calculator.displayNumber += number;
	}
}


function handleOperator(operator){
	const isWaitForSecondNumber = calculator.isWaitForSecondNumber;
	const displayNumber = calculator.displayNumber;

	if(!isWaitForSecondNumber){
		calculator.firstNumber = displayNumber;
		calculator.operator = operator;

		calculator.displayNumber = operator;
		calculator.isWaitForSecondNumber = true;

	}else {
		alert('The operator has been set');
	}
}


function performCalculation(){
	const firstNumber = Number(calculator.firstNumber);
	const operator = calculator.operator;
	const secondNumber = Number(calculator.displayNumber);

	if(firstNumber === null || operator === null){
		return;
	}


	let result = 0;

	switch(operator){
		case '+':
			result = firstNumber + secondNumber;
			break;

		case '-':
			result = firstNumber - secondNumber;
			break;

		case '×':
			result = firstNumber * secondNumber;
			break;

		case '÷':
			result = firstNumber / secondNumber;
			break;

		default:
			result = firstNumber % secondNumber;
	}


	const history = {
		firstNumber: firstNumber,
		operator: operator,
		secondNumber: secondNumber,
		result: result,
	}


	putHistory(history);
	calculator.displayNumber = result;
	renderHistory();
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

		if(target.classList.contains('negative')){
			inverseNumber();
			updateDisplay();

			return;
		}

		if(target.classList.contains('operator')){
			handleOperator(target.textContent);
			updateDisplay();

			return;
		}

		if(target.classList.contains('equals')){
			performCalculation();
			updateDisplay();

			return;
		}

		inputNumber(target.textContent);
		updateDisplay();
	})
})