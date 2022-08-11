const calculator = {
	displayNumber: '0',
	operator: null,
	firstNumber: null,
	isWaitForSecondNumber: false,
}


function updateDisplay() {
	const display = document.querySelector('#display-number');

	display.innerHTML = calculator.displayNumber;

}

function inputNumber(number){
	if(number !== '.' && calculator.displayNumber == '0'){
		calculator.displayNumber = number;
	}else {
		calculator.displayNumber += number;
	}

}


const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
	button.addEventListener('click', function(e){
		const target = e.target;

		inputNumber(target.textContent);
		updateDisplay();
	})
})