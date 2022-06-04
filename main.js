console.log("let's start");

function tz1(inputData) {
	const minValue = 7;
	const replyOk = 'Привет';
	const replyFail = 'oops :(';
	const result = inputData > minValue ? replyOk : replyFail;

	generateOutput('tz1', result);
}

function tz2(inputData) {
	const etalonValue = 'Вячеслав';
	const replyOk = `Привет, ${etalonValue}`;
	const replyFail = 'Нет такого имени';
	const result =
		inputData.toLowerCase() === etalonValue.toLowerCase() ? replyOk : replyFail;

	generateOutput('tz2', result);
}

function tz3(inputData) {
	// inputData = '1,2, 3 , 4, 5 6 7 , , ,, 8   9,  10,,11  12,13,14,15';
	// inputData = '[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]';
	// inputData = "['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']";

	const clearData = inputData
		.replace(/['"\(\)\[\]\{\}]/g, '')
		.replace(/[,;:]/g, ' ');
	const numbersArray = clearData.split(' ');

	const resultArray = numbersArray.filter(el => +el && el % 3 === 0);

	generateOutput('tz3', resultArray);
}

function generateInput(tzId, message = 'Введите искомое значение: ') {
	const messageInitial = {
		tz1: 'Введите число: ',
		tz2: 'Введите имя: ',
		tz3: 'Введите числовой массив: ',
	};
	const inputForm = `<form id="inputForm" data-for="${tzId}">
	<label for="tzInputField">${messageInitial[tzId]}</label>
	<input id="tzInputField" type="text" value="">
	<button id="buttonInput" type="submit">Send</button>
	</form>`;
	divInput.innerHTML = inputForm;
	divOutput.innerHTML = '';
}

function generateOutput(tzId, message = 'Введите хоть что-то: ') {
	const outputForm = `<span>Ваш результат для ${tzId}: ${message}</span>`;
	divOutput.innerHTML = outputForm;
}

document.addEventListener('click', el => {
	const elId = el.target.id;
	const elTag = el.target.tagName;

	if (elTag === 'BUTTON' && elId.includes('tz')) {
		generateInput(elId);
	}
});

document.addEventListener('submit', el => {
	el.preventDefault();
	const tzId = el.target.getAttribute('data-for');
	const inputField = document.getElementById('tzInputField');
	this[tzId](inputField.value);
	inputField.value = '';
});

const divOutput = document.getElementById('tzOutput');
const divInput = document.getElementById('tzInput');
