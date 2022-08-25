const HISTORY_kEY = 'calculation_history';

function checkForStorage(){
	if(typeof(Storage) === 'undefined'){
		alert('Browser Doesn\'t Support Web Storage!');
		
		return false;
	}

	return true;
}


function putHistory(data){
	if(checkForStorage()){
		let historyData = null;

		if(localStorage.getItem(HISTORY_kEY) === null){
			historyData = [];
		}else {
			historyData = JSON.parse(localStorage.getItem(HISTORY_kEY));
		}

		historyData.unshift(data);

		if(historyData.length > 5){
			historyData.pop();
		}

		localStorage.setItem(HISTORY_kEY, JSON.stringify(historyData));
	}
}


function getHistory(){
	if(checkForStorage()){
		return JSON.parse(localStorage.getItem(HISTORY_kEY)) || [];
	}else {
		return [];
	}
}


function renderHistory(){
	const historyData = getHistory();

	let historyList = document.getElementById('history-list');

	historyList.innerHTML = '';

	for(const history of historyData){
		let row = document.createElement('tr');

		row.innerHTML = '<td>' +history.firstNumber +'</td>';
		row.innerHTML += '<td>' +history.operator +'</td>';
		row.innerHTML += '<td>' +history.secondNumber +'</td>';
		row.innerHTML += '<td>' +history.result +'</td>';

		historyList.append(row);
	}
}


renderHistory();
